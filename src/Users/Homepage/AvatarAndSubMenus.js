import avatar from './../../img/Avatar-Profile-Vector-PNG-Cutout.png'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  getuserdetailsforupdate,
  upgrademonthlybaseplantobaseplanyearlystripepage,
  cancelselectedplan,
  upgrademonthlystandardplantostandardplanyearlystripepage,
  upgrademonthlyproplantoproplanyearlystripepage,
  baseplanmonthlytostandardplanmonthly,
  degradeproplanyearlytobaseplanmonthly,
  degradestandardplanyearlytobaseplanmonthly,
  degradebaseplanyearlytobaseplanmonthly,
  standardplanmonthlytoproplanmonthly,
  standardplanyearlytoproplanyearly,
} from '../../Redux/Action/ActionCreator'

function AvatarSubMenu() {
  const navigate = useNavigate()

  const [avatarlogo, setavatarlogo] = useState('')

  const dispatch = useDispatch()
  const [userselectedplan, setuserselectedplan] = useState('')
  const [userselectedplanperiod, setuserselectedplanperiod] = useState('')
  let normaluserlogindetails = JSON.parse(
    localStorage.getItem('normaluserlogindetails'),
  )
  const baseurl = process.env.REACT_APP_API_BASE_URL
  const changeplan = () => {
    if (
      userselectedplan === 'Base Plan' &&
      userselectedplanperiod === 'month'
    ) {
      navigate('/changeplanconfirmation')
    } else if (
      userselectedplan === 'Base Plan' &&
      userselectedplanperiod === 'year'
    ) {
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

  const upgradeplan = () => {
    // alert('hi', userselectedplan)
    if (
      userselectedplan === 'Base Plan' &&
      userselectedplanperiod === 'month'
    ) {
      const access_token = normaluserlogindetails.normaluser_accesstoken
      if (access_token !== '') {
        dispatch(
          upgrademonthlybaseplantobaseplanyearlystripepage((res) => {
            // localStorage.setItem(
            //   'normaluser_baseplanupgrade_stripe_page_link',
            //   res.data['sucess_url'],
            // )
            if ('data' in res) {
              if (res.data['sucess_url'] !== '' && res.statusText === 'OK') {
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
            console.log(res)
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
            console.log(res)
            if ('data' in res) {
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
  const cancelplan = (e) => {
    e.preventDefault()
    navigate('/cancelplanpage');
  }
  function menuToggle() {
    const toggleMenu = document.querySelector('.menu')
    toggleMenu.classList.toggle('active')
  }
  function account(e) {
    e.preventDefault()
    navigate('/userprofile')
  }
  function dashboard(e) {
    e.preventDefault()
    navigate('/homepageuser')
  }
  function logout() {
    localStorage.clear()
    navigate('/')
  }
  function sharedfilepage(e) {
    e.preventDefault()
    navigate('/sharedfiles')
  }
  const deletedfilepage = (e) => {
    e.preventDefault()
    navigate('/deletedfiles')
  }
  const notification = (e) => {
    e.preventDefault()
    navigate('/notificationpage')
  }
  const subscriptionpage = (e) => {
    e.preventDefault()
    navigate('/plans')
  }
  const uploadfile = (e) => {
    e.preventDefault()
    navigate('/uploadfile')
  }
  const history = (e) => {
    e.preventDefault()
    navigate('/history')
  }
  useEffect(() => {
    dispatch(
      getuserdetailsforupdate((res) => {
        // console.log(res);
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
          setavatarlogo(res.data.data['image'])
          localStorage.setItem('userdetails', JSON.stringify(userdetails))
        }
      }),
    )
  }, [])
  return (
    <div className="action">
      <div className="profile" onClick={menuToggle}>
        {/* {avatarlogo !== '/media/avataar.png' ? (
          <img alt="" src={baseurl + avatarlogo} />
        ) : (
          // <img src={avatar} />
          <></>
        )} */}
        {avatarlogo.includes('90440_') || avatarlogo === '/media/avataar.png'  ? (
          <img alt="profile" src={avatar} />
        ) : (
          <img alt="profile" src={baseurl + avatarlogo} />
        )}{' '}
      </div>

      <div className="menu">
        {normaluserlogindetails !== '' ? (
          <h3
            style={{
              color: 'white',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              marginBottom: '5px',
            }}
            title={normaluserlogindetails.username}
          >
            {normaluserlogindetails.username !== '' ? (
              <div style={{ marginBottom: '-20px' }}>
                {normaluserlogindetails.username}
              </div>
            ) : (
              <div></div>
            )}
            {normaluserlogindetails.namefb !== '' ? (
              <div style={{ marginTop: '25px', marginBottom: '-15px' }}>
                {normaluserlogindetails.namefb}
              </div>
            ) : (
              <div></div>
            )}
            {normaluserlogindetails.Firstname !== '' ? (
              <div style={{ marginBottom: '-10px' }}>
                {normaluserlogindetails.Firstname}&nbsp;
                {normaluserlogindetails.Lastname}
              </div>
            ) : (
              <div></div>
            )}
            <br />
            <span
              style={{ color: 'white' }}
              title={normaluserlogindetails.email}
            >
              {normaluserlogindetails.email !== '' ? (
                <div>{normaluserlogindetails.email}</div>
              ) : (
                <div></div>
              )}
              {normaluserlogindetails.useridfb !== '' ? (
                <div>{normaluserlogindetails.useridfb}</div>
              ) : (
                <div></div>
              )}
            </span>{' '}
          </h3>
        ) : (
          <div></div>
        )}
        {normaluserlogindetails !== '' ? (
          <h3 style={{ color: 'white' }}>
            {normaluserlogindetails.microsoft_name}
            <br />
            <span style={{ color: 'white' }}>
              {normaluserlogindetails.microsoft_username}
            </span>
          </h3>
        ) : (
          <div></div>
        )}

        <ul>
          <li style={{ marginTop: '-35px' }}>
            <i className="fa fa-home" style={{ color: 'white' }}></i>{' '}
            <button
              onClick={dashboard}
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderRadius: '16px',
                color: 'white',
                WebkitBackdropFilter: 'blur(10.3px)',
                WebkitBoxShadow: 'none',
                MozBoxShadow: 'none',
                border: 'aliceblue',
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Dashboard
            </button>
          </li>
          {normaluserlogindetails.namefb || normaluserlogindetails.Firstname ? (
            <></>
          ) : (
            <>
              <li>
                {' '}
                <i className="fa fa-user" style={{ color: 'white' }}></i>{' '}
                <button
                  onClick={account}
                  style={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    borderRadius: '16px',
                    color: 'white',
                    WebkitBackdropFilter: 'blur(10.3px)',
                    WebkitBoxShadow: 'none',
                    MozBoxShadow: 'none',
                    border: 'aliceblue',
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;Account
                </button>
              </li>
            </>
          )}
          {/* {normaluserlogindetails.namefb || normaluserlogindetails.Firstname ? (
            <></>
          ) : (
            <>
              <li>
                {' '}
                <i className="fa fa-user" style={{ color: 'white' }}></i>{' '}
                <button
                  onClick={account}
                  style={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    borderRadius: '16px',
                    color: 'white',
                    WebkitBackdropFilter: 'blur(10.3px)',
                    WebkitBoxShadow: 'none',
                    MozBoxShadow: 'none',
                    border: 'aliceblue',
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;Account
                </button>
              </li>
            </>
          )} */}
          <li>
            <i className="fa fa-bell" style={{ color: 'white' }}></i>{' '}
            <button
              onClick={notification}
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderRadius: '16px',
                color: 'white',
                WebkitBackdropFilter: 'blur(10.3px)',
                WebkitBoxShadow: 'none',
                MozBoxShadow: 'none',
                border: 'aliceblue',
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Notifications
            </button>
          </li>
          <li>
            <i className="fa fa-trash" style={{ color: 'white' }}></i>{' '}
            <button
              onClick={deletedfilepage}
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderRadius: '16px',
                color: 'white',
                WebkitBackdropFilter: 'blur(10.3px)',
                WebkitBoxShadow: 'none',
                MozBoxShadow: 'none',
                border: 'aliceblue',
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Deleted Files
            </button>
          </li>
          <li>
            <i className="fa fa-share" style={{ color: 'white' }}></i>{' '}
            <button
              onClick={sharedfilepage}
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderRadius: '16px',
                color: 'white',
                WebkitBackdropFilter: 'blur(10.3px)',
                WebkitBoxShadow: 'none',
                MozBoxShadow: 'none',
                border: 'aliceblue',
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Shared Files
            </button>
          </li>
          <li>
            <i className="fa fa-money" style={{ color: 'white' }}></i>{' '}
            <button
              onClick={subscriptionpage}
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderRadius: '16px',
                color: 'white',
                WebkitBackdropFilter: 'blur(10.3px)',
                WebkitBoxShadow: 'none',
                MozBoxShadow: 'none',
                border: 'aliceblue',
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Subscription
            </button>
          </li>
          <li>
            <i className="fa fa-upload" style={{ color: 'white' }}></i>{' '}
            <button
              onClick={uploadfile}
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderRadius: '16px',
                color: 'white',
                WebkitBackdropFilter: 'blur(10.3px)',
                WebkitBoxShadow: 'none',
                MozBoxShadow: 'none',
                border: 'aliceblue',
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Upload Files
            </button>
          </li>
          <li>
            <i className="fa fa-file" style={{ color: 'white' }}></i>{' '}
            <button
              onClick={history}
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderRadius: '16px',
                color: 'white',
                WebkitBackdropFilter: 'blur(10.3px)',
                WebkitBoxShadow: 'none',
                MozBoxShadow: 'none',
                border: 'aliceblue',
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;History
            </button>
          </li>
          <li>
            <i className="fa fa-money" style={{ color: 'yellow' }}></i>{' '}
            <button
              onClick={upgradeplan}
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderRadius: '16px',
                color: 'yellow',
                WebkitBackdropFilter: 'blur(10.3px)',
                WebkitBoxShadow: 'none',
                MozBoxShadow: 'none',
                border: 'aliceblue',
              }}
            >
              &nbsp;&nbsp;&nbsp;Upgrade Plan
            </button>
          </li>
          <li>
            <i className="fa fa-dollar" style={{ color: 'yellow' }}></i>{' '}
            <button
              onClick={degradeplan}
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderRadius: '16px',
                color: 'yellow',
                WebkitBackdropFilter: 'blur(10.3px)',
                WebkitBoxShadow: 'none',
                MozBoxShadow: 'none',
                border: 'aliceblue',
              }}
            >
              &nbsp;&nbsp;&nbsp;Degrade Plan
            </button>
          </li>
          <li>
            <i className="fa fa-edit" style={{ color: 'yellow' }}></i>{' '}
            <button
              onClick={changeplan}
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderRadius: '16px',
                color: 'yellow',
                WebkitBackdropFilter: 'blur(10.3px)',
                WebkitBoxShadow: 'none',
                MozBoxShadow: 'none',
                border: 'aliceblue',
              }}
            >
              &nbsp;&nbsp;&nbsp;Change Plan
            </button>
          </li>
          {userselectedplan ? (
            <li>
              <i className="fa fa-money" style={{ color: 'red' }}></i>{' '}
              <button
                onClick={cancelplan}
                style={{
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  borderRadius: '16px',
                  color: 'red',
                  WebkitBackdropFilter: 'blur(10.3px)',
                  WebkitBoxShadow: 'none',
                  MozBoxShadow: 'none',
                  border: 'aliceblue',
                }}
              >
                &nbsp;&nbsp;&nbsp;Cancel Plan
              </button>
            </li>
          ) : (
            <div></div>
          )}
          <li>
            <i className="fa fa-lock" style={{ color: 'white' }}></i>{' '}
            <button
              onClick={logout}
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderRadius: '16px',
                color: 'white',
                WebkitBackdropFilter: 'blur(10.3px)',
                WebkitBoxShadow: 'none',
                MozBoxShadow: 'none',
                border: 'aliceblue',
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Logout
            </button>
          </li>
          {normaluserlogindetails.useridfb ||
          normaluserlogindetails.Firstname ? (
            <>
              <li>
                <i className="fa fa-user" style={{ color: 'red' }}></i>{' '}
                <button
                  // onClick={changeplan}
                  style={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    borderRadius: '16px',
                    // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    color: 'red',
                    WebkitBackdropFilter: 'blur(10.3px)',
                    WebkitBoxShadow: 'none',
                    MozBoxShadow: 'none',
                    border: 'aliceblue',
                  }}
                >
                  &nbsp;&nbsp;&nbsp;Delete Account
                </button>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  )
}
export default AvatarSubMenu
