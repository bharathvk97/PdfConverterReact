import React, { useEffect, useState } from 'react'
import AvatarSubMenu from './AvatarAndSubMenus'
import { Link, json } from 'react-router-dom'
import Commonsidebar from './SidebarAndMenus/Commonsidebar'
import {
    getuserdetailsforupdate
  } from '../../Redux/Action/ActionCreator'
  import { useDispatch } from 'react-redux'

function StorageRunningOutModal({setIsModalOpen}) {
    // const dispatch = useDispatch();
  let normaluserlogindetails = JSON.parse(
    localStorage.getItem('normaluserlogindetails'),
  )
  const[userPlan,setUserPlan] = useState({name:"",period:""});
//   console.log(userInfo);

//   useEffect(() => {
//     dispatch(
//       getuserdetailsforupdate((res) => {
//         if (res?.data) {
//           const userdetails = {
//             username: res.data.data['username'],
//             firstname: res.data.data['firstname'],
//             lastname: res.data.data['lastname'],
//             country: res.data.data['country'],
//             phonenumber: res.data.data['phonenumber'],
//             email: res.data.data['email'],
//             profileimage: res.data.data['image'],
//             gender: res.data.data['gender'],
//             subscription_name: res.data['subscription_name'],
//             subscription_status: res.data['subscription_status'],
//             subscription_period: res.data['subscribtion_period'],
//             fbname: '',
//             fbuserid: '',
//           }
//         //   setUserPlan(res.data['subscription_name'])
//         setUserPlan({name:res.data['subscription_name'],period:res.data['subscribtion_period']})
//         //   setuserselectedplanperiod(res.data['subscribtion_period'])
//           localStorage.setItem('userdetails', JSON.stringify(userdetails))
//         }
//       }),
//     )
//   },[])
//   let previousPlan = localStorage.getItem('userselectedpreviousplan');
//   console.log(previousPlan)

  return (
    // <div className="main-containeer">
    //   {/* {verify ? ( */}
    //   {/* <> */}
    //   <div className="main-containere">
    //     {/* <Commonsidebar /> */}
        <div className="mains" style={{marginLeft:"4%",textAlign:"center"}}>
          <div
            className="subscriptionreport-container"
            style={{
              marginTop: '15px',
              marginLeft: '-10px',
              paddingBottom: '50px',
            }}
          >
            <svg
              className="warning_symbol"
              xmlns="http://www.w3.org/2000xx/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="warning_symbol_circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="warning_symbol_exc"
                fill="none"
                d="M26 15h-2v20h2zm0 25h-2v2h2z"
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
              {/* Hi {normaluserlogindetails.username} */}
            </h3>{' '}
            <p
              id="message"
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Hi {normaluserlogindetails.username} you are running out of space, more than 90% storage space occupied.
            </p>{' '}
            <p
              id="message"
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '10px',
              }}
            >
              Please Upgrade to the next higher plan.
            </p>
            <Link
            //   to="/homepageuser"
            onClick={()=>{setIsModalOpen(false)}}
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
    //   </div>
    //   {/* <AvatarSubMenu /> */}
    // </div>
  )
}
export default StorageRunningOutModal
