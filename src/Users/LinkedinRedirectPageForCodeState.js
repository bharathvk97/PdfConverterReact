import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Header from '../LandingPages/Header'
import Dragdrop from '../LandingPages/DragDrop'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { linkedinloginaccesstoken } from '../Redux/Action/ActionCreator'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { linkednUserDetails } from '../Redux/Action/ActionCreator'
import { useNavigate } from 'react-router-dom'

function LinkedinCodeStatepage() {
  localStorage.clear()
  const onFilechange = (files) => {
    // console.log(files)
  }
  // const navigate = useNavigate()
  const linkedinredirecturl = process.env.REACT_APP_LINKEDIN_REDIRECT_URL
  const linkedinclientsecretkey = process.env.REACT_APP_LINKEDIN_SECRET_KEY
  const linkedinclientid = process.env.REACT_APP_LINKEDIN_CLIENT_ID
  const linkedingranttype = 'authorization_code'
  const baseurl = process.env.REACT_APP_API_BASE_URL

  // const dispatch = useDispatch()
  const [data, setData] = useState([])
  sessionStorage.setItem('data', data)
  // console.log(data)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (window.location.href.indexOf('/linkedin?code=') > -1) {
      // var state = window.location.href.split('state=').pop()
      var beforecode = window.location.href.split('code=').pop()
      var code = beforecode.split('&state=')[0]
      console.log('code', code)
      var formData = new FormData()
      formData.append('code', code)
      dispatch(
        linkednUserDetails(formData, (res) => {
          // console.log(res.data)
          console.log(res.data.email.elements[0]['handle~']['emailAddress'])
          if ('data' in res) {
            // console.log((res.data.success).toLowerCase())
            const normaluserlogindetails = {
              is_verified: true,
              email: res.data.email.elements[0]['handle~']['emailAddress'],
              lastname: res.data['lastname'],
              firstname: res.data['firstname'],
              user_type: 1,
              image: res.data['imageUrl'],
              username: res.data['user'],
              useridfb: '',
              namefb: '',
              phonenumber:"22"
            }
            localStorage.setItem(
              'normaluserlogindetails',
              JSON.stringify(normaluserlogindetails)
            );
            localStorage.setItem('refreshtoken', res.data.refresh_token);
            localStorage.setItem('accesstoken', res.data.access_token);

            if (res.status === 200) {
              // navigate('/homepageuser');
              const closePopup = window.open('', '_self');
              closePopup.close();
              
              // window.location.href = '/homepageuser'; 
              // navigate('/homepageuser');

            }

          }
        })
      )
      // axios({
      //   method: 'post',
      //   url: 'http://0.0.0.0:81/profile_backend/oauth/acesstoken/linkedin/',
      //   data: formData,
      //   headers: { 'Content-Type': 'multipart/form-data' },
      // })
      //   .then(function (response) {
      //     sessionStorage.setItem('response', response)
      //     console.log(response)
      //   })http://0.0.0.0:81/token/
      //   .catch(function (response) {
      //     sessionStorage.setItem('response', response)
      //     console.log(response)
      //   })
      // console.log(code, state)

      // axios
      //   .post(
      //     `https://www.linkedin.com/oauth/v2/accessToken?grant_type=${linkedingranttype}&client_id=${linkedinclientid}&client_secret=${linkedinclientsecretkey}&redirect_uri=${linkedinredirecturl}&code=${code}`,
      //   )

      //   .then((response) => {
      //     // console.log(response)
      //     axios
      //       .get(
      //         `https://api.linkedin.com/v2/me?oauth2_access_token=${response.data['access_token']}`,
      //       )

      //       .then((response) => {
      //         // console.log(response)
      //         const normaluserlogindetails = {
      //           Firstname: response.data.localizedFirstName,
      //           Lastname: response.data.localizedLastName,
      //           user_type: '1',
      //           userid: response.data['id'],
      //           microsoft_name: '',
      //           microsoft_username: '',
      //           useridfb: '',
      //           namefb: '',
      //           username: '',
      //         }
      //         localStorage.setItem(
      //           'normaluserlogindetails',
      //           JSON.stringify(normaluserlogindetails),
      //         )
      //         var formData = new FormData()
      //         formData.append('code', code)
      //         // console.log(code)

      //         // localStorage.setItem(
      //         //   'userdetails',
      //         //   JSON.stringify(normaluserlogindetails),
      //         // )
      //         // if (normaluserlogindetails !== '') {
      //         //   navigate('/homepageuser')
      //         // }
      //         // setData(response.data.products)
      //       })
      //       .catch((err) => {
      //         // console.log(err)
      //         sessionStorage.setItem('error', err)
      //       })
      //     setData(response.data.products)
      //   })
      //   .catch(function (response) {
      //     sessionStorage.setItem('response', response)
      //   })
      // axios
      //   .post(
      //     `https://www.linkedin.com/oauth/v2/accessToken?grant_type=${linkedingranttype}&client_id=${linkedinclientid}&client_secret=${linkedinclientsecretkey}&redirect_uri=${linkedinredirecturl}&code=${code}`,
      //   )

      //   .then((response) => {
      //     console.log(response)
      //     axios
      //       .get(
      //         `https://api.linkedin.com/v2/me?oauth2_access_token=${response.data['access_token']}`,
      //       )

      //       .then((response) => {
      //         console.log(response)
      //         const normaluserlogindetails = {
      //           Firstname: response.data.localizedFirstName,
      //           Lastname: response.data.localizedLastName,
      //           user_type: '1',
      //           userid: response.data['id'],
      //           microsoft_name: '',
      //           microsoft_username: '',
      //           useridfb: '',
      //           namefb: '',
      //           username: '',
      //         }
      //         localStorage.setItem(
      //           'normaluserlogindetails',
      //           JSON.stringify(normaluserlogindetails),
      //         )
      //         // localStorage.setItem(
      //         //   'userdetails',
      //         //   JSON.stringify(normaluserlogindetails),
      //         // )
      //         if (normaluserlogindetails !== '') {
      //           navigate('/homepageuser')
      //         }
      //         // setData(response.data.products)
      //       })
      //       .catch((err) => {
      //         console.log(err)
      //       })
      //   setData(response.data.products)
      // })
      // .catch((err) => {
      //   console.log(err)
      // })
    }
  }, [])

  return (
    <div className="landing-wrap">
      <Header />

      <Container>
        <h1>
          <span>Convert your </span> <br />
          file easily{' '}
        </h1>
        <div className="col-sm-5 text-center mx-auto mt-3">
          <p style={{ color: '#E6E6E6' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
        </div>
        <Dragdrop onFilechange={(files) => onFilechange(files)} />
      </Container>
    </div>
  )
}

export default LinkedinCodeStatepage
