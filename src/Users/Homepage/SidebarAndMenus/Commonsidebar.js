import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../../img/logo.svg'
import { useDispatch } from 'react-redux'
import {
  getuserdetailsforupdate,
  upgrademonthlybaseplantobaseplanyearlystripepage,
  cancelselectedplan,
  upgrademonthlystandardplantostandardplanyearlystripepage,
  upgrademonthlyproplantoproplanyearlystripepage,
  changemonthlybaseplantostandardmonthly,
  degradebaseplanyearlytobaseplanmonthly,
  degradestandardplanyearlytobaseplanmonthly,
  degradeproplanyearlytobaseplanmonthly,
  standardplanyearlytoproplanyearly,
  standardplanmonthlytoproplanmonthly,
} from "../../../Redux/Action/ActionCreator";

const Commonsidebar = () => {
  const navigate = useNavigate()
  const dashboard = (e) => {
    e.preventDefault()
    navigate('/homepageuser')
  }
  const account = (e) => {
    e.preventDefault()
    navigate('/userprofile')
  }
  const notification = (e) => {
    e.preventDefault()
    navigate('/notificationpage')
  }
  const deletedfiles = (e) => {
    e.preventDefault()
    navigate('/deletedfiles')
  }
  const sharedfiles = (e) => {
    e.preventDefault()
    navigate('/sharedfiles')
  }
  const subscription = (e) => {
    e.preventDefault()
    navigate('/plans')
  }
  const uploadfiles = (e) => {
    e.preventDefault()
    navigate('/uploadfile')
  }
  const history = (e) => {
    e.preventDefault()
    navigate('/history')
  }
  const logout = (e) => {
    e.preventDefault()
    localStorage.clear()
    navigate('/')
  }
  const cancelplan = (e) => {
    e.preventDefault()
    navigate('/cancelplanpage');
  }

  const dispatch = useDispatch()
  const [userselectedplan, setuserselectedplan] = useState('')
  const [userselectedplanperiod, setuserselectedplanperiod] = useState('')

  let normaluserlogindetails = JSON.parse(
    localStorage.getItem('normaluserlogindetails'),
  )

  const changeplan = (e) => {
    e.preventDefault();
    if (userselectedplan == 'Base Plan' && userselectedplanperiod == 'month') {
      navigate('/changeplanconfirmation')
    }

    if (userselectedplan === 'Base Plan' && userselectedplanperiod === 'year') {
      navigate('/changeconfirmationyearly')
    }

    //
    if (
      userselectedplan === 'Standard Plan' &&
      userselectedplanperiod === 'month'
    ) {
      const access_token = normaluserlogindetails.normaluser_accesstoken
      if (access_token !== '') {
        dispatch(
          standardplanmonthlytoproplanmonthly((res) => {
            if ('data' in res && res.status === 200) {
              navigate('/standardplanchangepage')
            }
          }),
        )
      }
    }
    // standardplanyearlytoproplanyearly
    if (
      userselectedplan === 'Standard Plan' &&
      userselectedplanperiod === 'year'
    ) {
      const access_token = normaluserlogindetails.normaluser_accesstoken
      if (access_token !== '') {
        dispatch(
          standardplanyearlytoproplanyearly((res) => {
            console.log(res)
            if ('data' in res && res.status === 200) {
              navigate('/standardplanchangepage')
            }
          }),
        )
      }
    }
  }

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
          setuserselectedplan(res.data['subscription_name'])
          setuserselectedplanperiod(res.data['subscribtion_period'])
          localStorage.setItem('userdetails', JSON.stringify(userdetails))
        }
      }),
    )
  })
  // const upgradeplan = () => {
  //   // alert('hi', userselectedplan)
  //   if (userselectedplan == 'Base Plan' && userselectedplanperiod == 'month') {
  //     const access_token = normaluserlogindetails.normaluser_accesstoken
  //     if (access_token !== '') {
  //       dispatch(
  //         upgrademonthlybaseplantobaseplanyearlystripepage((res) => {
  //           localStorage.setItem(
  //             'normaluser_baseplanupgrade_stripe_page_link',
  //             res.data['Invoice link'],
  //           )
  //           // const stripe_page_link = res.data['Invoice link']
  //           // if (stripe_page_link !== '') {
  //           //   window.open(res.data['Invoice link'])
  //           //   // navigate("/subsciptionsuccess")
  //           // }
  //         }),
  //       )
  //     }
  //   }
  //   if (
  //     userselectedplan == 'Standard Plan' &&
  //     userselectedplanperiod == 'month'
  //   ) {
  //     const access_token = normaluserlogindetails.normaluser_accesstoken
  //     if (access_token !== '') {
  //       dispatch(
  //         upgrademonthlystandardplantostandardplanyearlystripepage((res) => {
  //           localStorage.setItem(
  //             'normaluser_standardplanupgrade_stripe_page_link',
  //             res.data['Invoice link'],
  //           )
  //           const stripe_page_link = res.data['Invoice link']
  //           if (stripe_page_link !== '') {
  //             window.open(res.data['Invoice link'])
  //             // navigate("/subsciptionsuccess")
  //           }
  //         }),
  //       )
  //     }
  //   }
  //   if (userselectedplan == 'Pro Plan' && userselectedplanperiod == 'month') {
  //     const access_token = normaluserlogindetails.normaluser_accesstoken
  //     if (access_token !== '') {
  //       dispatch(
  //         upgrademonthlyproplantoproplanyearlystripepage((res) => {
  //           localStorage.setItem(
  //             'normaluser_proplanupgrade_stripe_page_link',
  //             res.data['Invoice link'],
  //           )
  //           const stripe_page_link = res.data['Invoice link']
  //           if (stripe_page_link !== '') {
  //             window.open(res.data['Invoice link'])
  //             // navigate("/subsciptionsuccess")
  //           }
  //         }),
  //       )
  //     }
  //   }
  // }

  //
  const upgradeplan = (e) => {
    e.preventDefault()
    // alert('hi', userselectedplan)
    if (
      userselectedplan === 'Base Plan' &&
      userselectedplanperiod === 'month'
    ) {
      const access_token = normaluserlogindetails.normaluser_accesstoken
      if (access_token !== '') {
        dispatch(
          upgrademonthlybaseplantobaseplanyearlystripepage((res) => {
            console.log(res)
            // localStorage.setItem(
            //   'normaluser_baseplanupgrade_stripe_page_link',
            //   res.data['sucess_url'],
            // )
            if ('data' in res) {
              if (res.data['sucess_url'] !== '') {
                navigate('/baseplanmonthlytobaseplanyearly')
              }
            }
          }),
        )
      }
    }
    if (
      userselectedplan === 'Standard Plan' &&
      userselectedplanperiod === 'month'
    ) {
      const access_token = normaluserlogindetails.normaluser_accesstoken
      if (access_token !== '') {
        dispatch(
          upgrademonthlystandardplantostandardplanyearlystripepage((res) => {
            // localStorage.setItem(
            //   'normaluser_standardplanupgrade_stripe_page_link',
            //   res.data['Invoice link'],
            // )
            if ('data' in res) {
              if (res.data['sucess_url'] !== '') {
                navigate('/standardplanmonthlytostandardplanyearly')
              }
            }
          }),
        )
      }
    }
    if (userselectedplan === 'Pro Plan' && userselectedplanperiod === 'month') {
      const access_token = normaluserlogindetails.normaluser_accesstoken
      if (access_token !== '') {
        dispatch(
          upgrademonthlyproplantoproplanyearlystripepage((res) => {
            // localStorage.setItem(
            //   'normaluser_proplanupgrade_stripe_page_link',
            //   res.data['Invoice link'],
            // )
            if ('data' in res) {
              if (res.data['sucess_url'] !== '') {
                navigate('/proplanmonthlytoproplanyearly')
              }
            }
          }),
        )
      }
    }
  }
  // degrade plan
  const degradeplan = (e) => {
    e.preventDefault()
    const access_token = normaluserlogindetails.normaluser_accesstoken
    if (access_token !== '') {
      if (userselectedplan === 'Base Plan') {
        dispatch(
          degradebaseplanyearlytobaseplanmonthly((res) => {
            // console.log(res)
            // console.log("hellooooo")
            if ('data' in res) {
              // console.log(res)
              if (res.data['sucess_url'] !== '') {
                navigate('/planyearlytoplanmonthly')
              }
            }
          }),
        )
      }
      if (userselectedplan === 'Standard Plan') {
        dispatch(
          degradestandardplanyearlytobaseplanmonthly((res) => {
            console.log(res)
            if ('data' in res) {
              if (res.data['sucess_url'] !== '') {
                navigate('/planyearlytoplanmonthly')
              }
            }
          }),
        )
      }
      if (userselectedplan === 'Pro Plan') {
        dispatch(
          degradeproplanyearlytobaseplanmonthly((res) => {
            console.log(res)
            if ('data' in res) {
              if (res.data['sucess_url'] !== '') {
                navigate('/planyearlytoplanmonthly')
              }
            }
          }),
        )
      }
    }
  }
  return (
    <div className="navcontainer">
      <nav className="nav">
        <img
          alt=""
          src={logo}
          style={{
            marginTop: '-10px',
            marginLeft: '-60px',
            marginBottom: '10px',
          }}
        />
        <br></br>
        <div className="nav-upper-options">
          <div className="nav-option option1" onClick={dashboard}>
            <a
              href="#"
             // onClick={dashboard}
              target="dashboard"
              style={{
                fontSize: '18px',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <i
                className="fa fa-home"
                style={{ height: '30px', marginRight: '10px' }}
              ></i>
              Dahsboard
            </a>
          </div>
          {normaluserlogindetails.useridfb ||
          normaluserlogindetails.Firstname ? (
            <></>
          ) : (
            <>
              <div className="option2 nav-option" onClick={account}>
                <a
                  href="#"
                  target="account"
                  style={{
                    fontSize: '18px',
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  <i
                    className="fa fa-user"
                    style={{ height: '30px', marginRight: '10px' }}
                  ></i>
                  Account
                </a>
              </div>
            </>
          )}
          <div className="nav-option option3" onClick={notification}>
            <a
              href="#"
              // onClick={notification}
              target="deletedfiles"
              style={{
                fontSize: '18px',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <i
                className="fa fa-bell"
                style={{ height: '30px', marginRight: '10px' }}
              ></i>
              Notifications
            </a>
          </div>
          <div className="nav-option option3" onClick={deletedfiles}>
            <a
              href="#"
              
              target="deletedfiles"
              style={{
                fontSize: '18px',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <i
                className="fa fa-trash"
                style={{ height: '30px', marginRight: '10px' }}
              ></i>
              Deleted Files
            </a>
          </div>
          <div className="nav-option option4"  onClick={sharedfiles}>
            <a
              href="#"
             
              target="sharedfiles"
              style={{
                fontSize: '18px',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <i
                className="fa fa-share"
                style={{ height: '30px', marginRight: '10px' }}
              ></i>
              Shared Files
            </a>
          </div>
          <div className="nav-option option5" onClick={subscription}>
            <a
              href="#"
              
              target="subscription"
              style={{
                fontSize: '18px',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <i
                className="fa fa-money"
                style={{ height: '30px', marginRight: '10px' }}
              ></i>
              Subscriptions
            </a>
          </div>
          <div className="nav-option option6" onClick={upgradeplan}>
            <a
              
              href="#"
              target="history"
              style={{
                fontSize: '18px',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <i
                className="fa fa-money"
                style={{ height: '30px', marginRight: '10px', color: 'yellow' }}
              ></i>
              Upgrade Plan
            </a>
          </div>
          <div className="nav-option option6"  onClick={degradeplan}>
            <a
             
              href="#"
              target="history"
              style={{
                fontSize: '18px',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <i
                className="fa fa-dollar"
                style={{ height: '30px', marginRight: '10px', color: 'yellow' }}
              ></i>
              Degrade Plan
            </a>
          </div>
          <div className="nav-option option6" onClick={changeplan}>
            <a
              
              href="#"
              target="history"
              style={{
                fontSize: '18px',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <i
                className="fa fa-edit"
                style={{ height: '30px', marginRight: '10px', color: 'yellow' }}
              ></i>
              Change Plan
            </a>
          </div>
          {userselectedplan ? (
            <>
              <div className="option2 nav-option"  onClick={cancelplan}>
                <a
                  href="#"
                 
                  target="account"
                  style={{
                    fontSize: '18px',
                    color: 'red',
                    textDecoration: 'none',
                  }}
                >
                  <i
                    className="fa fa-money"
                    style={{ height: '30px', marginRight: '10px' }}
                  ></i>
                  Cancel Plan
                </a>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="nav-option option6" onClick={uploadfiles}>
            <a
              href="#"
              
              target="uploadfiles"
              style={{
                fontSize: '18px',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <i
                className="fa fa-upload"
                style={{
                  height: '30px',
                  marginRight: '10px',
                }}
              ></i>
              Upload Files
            </a>
          </div>
          <div className="nav-option option6" onClick={history}>
            <a
              href="#"
              
              target="history"
              style={{
                fontSize: '18px',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <i
                className="fa fa-file"
                style={{ height: '30px', marginRight: '10px' }}
              ></i>
              History
            </a>
          </div>

          <div className="nav-option logout" onClick={logout}>
            <a
              href="#"
              
              target="logout"
              style={{
                fontSize: '18px',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <i
                className="fa fa-lock"
                style={{ height: '30px', marginRight: '10px' }}
              ></i>
              Logout
            </a>
          </div>
          {normaluserlogindetails.useridfb ||
          normaluserlogindetails.Firstname ? (
            <>
              <div className="option2 nav-option">
                <a
                  href="#"
                  // onClick={account}
                  target="account"
                  style={{
                    fontSize: '18px',
                    color: 'red',
                    textDecoration: 'none',
                  }}
                >
                  <i
                    className="fa fa-user"
                    style={{ height: '30px', marginRight: '10px' }}
                  ></i>
                  Delete Account
                </a>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Commonsidebar
