import React, { useEffect, useState } from 'react'
import AvatarSubMenu from './AvatarAndSubMenus'
import { Link, json } from 'react-router-dom'
import Commonsidebar from './SidebarAndMenus/Commonsidebar'
import {
    getuserdetailsforupdate
  } from '../../Redux/Action/ActionCreator'
  import { useDispatch } from 'react-redux'

function StandardPlanChangePage() {
    const dispatch = useDispatch();
  let normaluserlogindetails = JSON.parse(
    localStorage.getItem('normaluserlogindetails'),
  )
  const[userPlan,setUserPlan] = useState({name:"",period:""});
//   console.log(userInfo);

  useEffect(() => {
    dispatch(
      getuserdetailsforupdate((res) => {
        if (res?.data) {
          const userdetails = {
            username: res.data.data['username'],
            firstname: res.data.data['firstname'],
            lastname: res.data.data['lastname'],
            country: res.data.data['country'],
            phonenumber: res.data.data['phonenumber'],
            email: res.data.data['email'],
            profileimage: res.data.data['image'],
            gender: res.data.data['gender'],
            subscription_name: res.data['subscription_name'],
            subscription_status: res.data['subscription_status'],
            subscription_period: res.data['subscribtion_period'],
            fbname: '',
            fbuserid: '',
          }
        //   setUserPlan(res.data['subscription_name'])
        setUserPlan({name:res.data['subscription_name'],period:res.data['subscribtion_period']})
        //   setuserselectedplanperiod(res.data['subscribtion_period'])
          localStorage.setItem('userdetails', JSON.stringify(userdetails))
        }
      }),
    )
  },[])
//   let previousPlan = localStorage.getItem('userselectedpreviousplan');
//   console.log(previousPlan)

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
              You have successfully changed your Standard Plan {userPlan.period} to {userPlan.name} {userPlan.period}
            </p>{' '}
            <p
              id="message"
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '10px',
              }}
            >
              Have a good Day
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
export default StandardPlanChangePage
