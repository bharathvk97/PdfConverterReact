import React from 'react'
import { LinkedInApi } from '../Config'
import axios from 'axios'
import linkedinimage from '../img/linkedin.svg'

export default class Linkedinlogin extends React.Component {
  initialState = {
    user: {},
    loggedIn: false,
  }

  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  componentDidMount = () => {
    if (window.opener && window.opener !== window) {
      const code = this.getCodeFromWindowURL(window.location.href)
      window.opener.postMessage({ type: 'code', code: code }, '*')
      window.close()
    }
    window.addEventListener('message', this.handlePostMessage)
  }

  handlePostMessage = (event) => {
    if (event.data.type === 'code') {
      const { code } = event.data
      this.getUserCredentials(code)
    }
  }

  getCodeFromWindowURL = (url) => {
    const popupWindowURL = new URL(url)
    return popupWindowURL.searchParams.get('code')
  }

  showPopup = () => {
    const { clientId, redirectUrl, oauthUrl, scope, state } = LinkedInApi
    const oauthUrls = `${oauthUrl}&client_id=${clientId}&scope=${scope}&state=${state}&redirect_uri=${redirectUrl}`
    const width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2
    window.open(
      oauthUrls,
      'Linkedin',
      'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' +
        width +
        ', height=' +
        height +
        ', top=' +
        top +
        ', left=' +
        left,
    )
  }

  getUserCredentials = (code) => {
    const linkedinredirecturl = process.env.REACT_APP_LINKEDIN_REDIRECT_URL
    const linkedinclientsecretkey = process.env.REACT_APP_LINKEDIN_SECRET_KEY
    const linkedinclientid = process.env.REACT_APP_LINKEDIN_CLIENT_ID

    const linkedingranttype = 'authorization_code'
    axios
      .get(
        `https://www.linkedin.com/oauth/v2/accessToken?grant_type=${linkedingranttype}&client_id=${linkedinclientid}&client_secret=${linkedinclientsecretkey}&redirect_uri=${linkedinredirecturl}&code=${code}`,
      )
      .then((res) => {
        console.log(res)
        const user = res.data
        this.setState({
          user,
          loaded: true,
        })
        // Do something with user
      })
  }

  render() {
    const { loggedIn, user } = this.state
    const contentWhenLoggedIn = (
      <>
        <img src={user.profileImageURL} alt="Profile image" />
        <h3>{`${user.firstName} ${user.lastName}`}</h3>
        <h3>{user.email}</h3>
      </>
    )
    const contentWhenLoggedOut = (
      <>
        <button className="social-btn linkidin-sl" onClick={this.showPopup}>
          <img src={linkedinimage} style={{ width: 25, marginRight: '15px' }} />{' '}
          Sign with Linkedin
        </button>
      </>
    )
    return (
      <div>
        {loggedIn && user !== {} ? contentWhenLoggedIn : contentWhenLoggedOut}
      </div>
    )
  }
}
