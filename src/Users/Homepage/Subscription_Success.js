import React, { useState } from 'react'
import AvatarSubMenu from './AvatarAndSubMenus'
import {
  getuserdetailsforupdate,
  baseplanmonthlysessionid,
} from '../../Redux/Action/ActionCreator'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import Commonsidebar from './SidebarAndMenus/Commonsidebar'

function Homepage() {
  let [searchParams, setSearchParams] = useSearchParams()
  sessionStorage.setItem('searchparams', setSearchParams)
  const dispatch = useDispatch()
  const sessionid = searchParams.get('session_id')
  const [verify, setVerify] = useState(false)
  let userdetails = JSON.parse(localStorage.getItem('userdetails'))
  const [statename, setName] = useState({
    firstname: userdetails.firstname,
    lastname: userdetails.lastname,
    phonenumber: userdetails.phonenumber,
    username: userdetails.username,
    country: userdetails.country,
    email: userdetails.email,
    countryobj: [],
    gender: userdetails.gender,
    pdfconverter_dp: userdetails.profileimage,
    profile_image: '',
    subscription_name: userdetails.subscription_name,
    subscription_status: userdetails.subscription_status,
    subscription_period: userdetails.subscription_period,
  })

  sessionStorage.setItem('statename', statename)
  sessionStorage.setItem('setName', setName)
  if (sessionid !== '' || sessionid !== null) {
    var formData = new FormData()
    formData.append('session_id', sessionid)
    dispatch(
      baseplanmonthlysessionid(formData, (res) => {
        if (res?.statusText === 'Created') {
          if (res.statusText === 'Created' || res.status === 201) {
            setVerify(true)
          }
        }
      }),
    )
  }

  let normaluserlogindetails = JSON.parse(
    localStorage.getItem('normaluserlogindetails'),
  )

  dispatch(
    getuserdetailsforupdate((res) => {
      const userdetails = {
        username: res.data['username'],
        firstname: res.data['firstname'],
        lastname: res.data['lastname'],
        country: res.data['country'],
        phonenumber: res.data['phonenumber'],
        email: res.data['email'],
      }
      localStorage.setItem('userdetails', JSON.stringify(userdetails))
    }),
  )

  return (
    <div className="main-container">
      {verify ? (
        <div className="main-container">
          <Commonsidebar />
          <div className="main">
            <div
              className="subscriptionreport-container"
              style={{
                marginTop: '15px',
                marginLeft: '-10px',
                paddingBottom: '50px',
              }}
            >
              <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
              <h3
                id="status"
                style={{
                  marginTop: '10px',
                  color: 'white',
                  fontStyle: 'bold',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {' '}
                Congrats {normaluserlogindetails.username}
              </h3>{' '}
              <p
                id="message"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '10px',
                }}
              >
                {' '}
                Your are Successfully taken the base plan monthly subscription
                enjoy it.{' '}
              </p>{' '}
              <Link
                to="/homepageuser"
                id="successemailcontinue"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '20%',
                }}
              >
                <b>Continue</b>
              </Link>
            </div>{' '}
          </div>
        </div>
      ) : (
        <>
          <div className="main-container">
            <Commonsidebar />
            <div className="main">
              <div
                className="subscriptionreport-container"
                style={{
                  marginTop: '15px',
                  marginLeft: '-10px',
                  paddingBottom: '50px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '40px',
                  }}
                >
                  <div
                    className="icon-box"
                    style={{
                      maxWidth: '15%',
                      backgroundColor: 'red',
                      display: 'flex',
                      justifyContent: 'center',
                      borderRadius: '60px',
                      marginTop: '10px',
                    }}
                  >
                    <i className="material-icons" style={{ fontSize: '80px' }}>
                      &#xE5CD;
                    </i>
                  </div>
                </div>
                <h3
                  id="status"
                  style={{
                    marginTop: '10px',
                    color: 'white',
                    fontStyle: 'bold',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  Hi {normaluserlogindetails.username}, Subscription Failed
                </h3>{' '}
                <p
                  id="message"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px',
                  }}
                >
                  {' '}
                  oops!!! Something went wrong. Please Try again.{' '}
                </p>{' '}
                <Link
                  to="/homepageuser"
                  id="successemailcontinue"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '20%',
                  }}
                >
                  <b>Continue</b>
                </Link>
              </div>{' '}
            </div>
            <AvatarSubMenu />
          </div>
        </>
      )}
    </div>
  )
}
export default Homepage
