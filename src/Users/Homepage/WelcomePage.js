import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import AvatarSubMenu from './AvatarAndSubMenus'
import {
  // getuserdetailsforupdate,
  baseplanmonthlysessionid,
} from '../../Redux/Action/ActionCreator'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import Commonsidebar from './SidebarAndMenus/Commonsidebar'
import { getuserdetailsforupdate } from '../../Redux/Reducer/CommonReducer'

function WelcomePage(props) {
  const { setWelcomeModal } = props
  const closeWelcomeModal = () => setWelcomeModal(false)
  //   let userdetails = JSON.parse(localStorage.getItem("userdetails"));
  //   const [statename, setName] = useState({
  //     firstname: userdetails.firstname,
  //     lastname: userdetails.lastname,
  //     phonenumber: userdetails.phonenumber,
  //     username: userdetails.username,
  //     country: userdetails.country,
  //     email: userdetails.email,
  //     countryobj: [],
  //     gender: userdetails.gender,
  //     pdfconverter_dp: userdetails.profileimage,
  //     profile_image: "",
  //     subscription_name: userdetails.subscription_name,
  //     subscription_status: userdetails.subscription_status,
  //     subscription_period: userdetails.subscription_period,
  //   });
  //   sessionStorage.setItem("statename", statename);
  //   sessionStorage.setItem("setName", setName);

  let normaluserlogindetails = JSON.parse(
    localStorage.getItem('normaluserlogindetails'),
  )
  return (
    <div className="welcomehome-head">
      <div className="welcome-sub">
        {/* <Commonsidebar /> */}
        <div className="main-welcome">
          <div
            className="welcomepage-modal"
            style={{
              marginTop: '15px',
              marginLeft: '-10px',
            }}
          >
            <i
              onClick={closeWelcomeModal}
              className="fa-solid fa-xmark xmark"
            ></i>
            <h3
              id="status"
              style={{
                color: 'white',
                fontStyle: 'bold',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {' '}
              Hi {normaluserlogindetails.username}
            </h3>{' '}
            <p
              className="msg-success-pln"
              id="message-success-plan"
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '10px',
                textAlign:"center"
              }}
            >
              {' '}
              Welcome to pdfconverter, all your notifications would appear here.
            </p>{' '}
            <div
              className="successemailcontinue"
              id=""
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '20%',
                cursor: 'pointer',
                marginBottom:"30px"
              }}
            >
              <b className="welcm-contn" onClick={() => setWelcomeModal(false)}>
                Continue
              </b>
            </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default WelcomePage
