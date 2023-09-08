import React, { useState } from 'react'
import Header from '../LandingPages/Header'
import { Link } from 'react-router-dom'
import { emailverification } from '../Redux/Action/ActionCreator'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Landingpage from '../LandingPages/LandingPage'

function Emailverify() {
  let [searchParams, setSearchParams] = useSearchParams()
  setSearchParams('')
  const dispatch = useDispatch()
  const token = searchParams.get('token')
  const [verify, setVerify] = useState(false)

  dispatch(
    emailverification(token, (res) => {
      if (
        res.data['email'] === 'Successfully activated' &&
        res.status === 200
      ) {
        setVerify(true)
      }
    }),
  )
  return (
    <div className="registration-wrap">
      {verify ? (
        <>
          <Header />
          <div id="card" className="animated fadeIn">
            <div id="uppersideemailverification">
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
              <h3 id="status"> Verified Successfully </h3>{' '}
              <p id="message">
                {' '}
                Your account is verified successfully. Please click continue
                button to explore the features.{' '}
              </p>
              <Link to="/" id="successemailcontinue">
                <b>Continue</b>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <Landingpage />
        </>
      )}
    </div>
  )
}

export default Emailverify
