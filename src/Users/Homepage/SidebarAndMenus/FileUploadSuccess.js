import React, { useState } from 'react'
import AvatarSubMenu from '../AvatarAndSubMenus'
import { Link } from 'react-router-dom'
import Commonsidebar from './Commonsidebar'

function Fileuploadsuccess() {
  let normaluserlogindetails = JSON.parse(
    localStorage.getItem('normaluserlogindetails'),
  )

  return (
    <div className="main-container">
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
              Your file is uploaded successfully, Your file is being checked if
              its malacious. If found malacious the file will be deleted from
              our server. Otherwise the file will be subjected to the AI process
              and you will be notifiied of the uploaded file staus via the
              notifications and you can check the file status on the dashboard.{' '}
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
    </div>
  )
}
export default Fileuploadsuccess
