import React, { useState } from 'react'
import AvatarSubMenu from './AvatarAndSubMenus'
import { Link } from 'react-router-dom'
import Commonsidebar from './SidebarAndMenus/Commonsidebar'
// import { useSelector } from 'react-redux'
// import { getuserdetailsforupdate } from '../../Redux/Reducer/CommonReducer'

function PlanYearlytoplanmonthly() {
  let normaluserlogindetails = JSON.parse(
    localStorage.getItem('normaluserlogindetails'),
  )
  let userInfo = JSON.parse(localStorage.getItem('userdetails'));
  // console.log(userInfo);
  // const [verify, setVerify] = useState(false)
  // const access_token = normaluserlogindetails.normaluser_accesstoken
  // if (access_token !== '') {
  //   setVerify(true)
  // }
  return (
    <div className="main-container">
      {/* {verify ? ( */}
      {/* <> */}
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
                color: 'white',
                fontStyle: 'bold',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '-54px',
              }}
            >
              {' '}
              Hi {normaluserlogindetails.username}
            </h3>{' '}
            <p
              id="message"
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              We have successfully downgraded your {userInfo.subscription_name} yearly to monthly subscription
            </p>{' '}
            <p
              id="message"
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '10px',
              }}
            >
              If you ever feel to upgrade, just click upgrade from the sidebar or avatar menu
            </p>
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
      <AvatarSubMenu />
    </div>
  )
}
export default PlanYearlytoplanmonthly
