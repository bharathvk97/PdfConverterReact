import React from 'react'
import { Link } from 'react-router-dom'
import { userprofileupdationverification } from '../Redux/Action/ActionCreator'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import AvatarSubMenu from './Homepage/AvatarAndSubMenus'
import Commonsidebar from './Homepage/SidebarAndMenus/Commonsidebar'

function UpdateProfileVerification() {
  let normaluserlogindetails = JSON.parse(
    localStorage.getItem('normaluserlogindetails'),
  )
  let [searchParams, setSearchParams] = useSearchParams()
  setSearchParams('')
  const dispatch = useDispatch()
  const token = searchParams.get('token')
  // const [verify, setVerify] = useState(false)
  // console.log(token)
  dispatch(
    userprofileupdationverification(token, (res) => {
      // console.log(res)
      if (
        res.data['email'] === 'Successfully activated' &&
        res.status === 200
      ) {
        // setVerify(true)
        localStorage.setItem('accountupdated', res.data['email'])
      }
    }),
  )
  return (
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
            Your account updation is verified successfully..{' '}
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
  )
}

export default UpdateProfileVerification
