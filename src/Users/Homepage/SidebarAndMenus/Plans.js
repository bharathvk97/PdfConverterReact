import React from 'react'
import { useState } from 'react'
import AvatarSubMenu from '../AvatarAndSubMenus'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import {
  monthlybaseplanstripepage,
  monthlystandardplanstripepage,
  monthlyproplanstripepage,
  yearlybaseplanstripepage,
  yearlystandardplanstripepage,
  yearlyproplanstripepage,
} from '../../../Redux/Action/ActionCreator'
import Commonsidebar from './Commonsidebar'

function Plans() {
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  // const navigate = useNavigate()
  const monthlyplan = () => {
    if (show === false) {
      setShow(true)
    }
    if (show === true) {
      setShow(false)
    }
  }
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
  // setName()
  sessionStorage.setItem('setName', setName)
  const getmonthlybaseplanstripepage = () => {
    let normaluserlogindetails = JSON.parse(
      localStorage.getItem('normaluserlogindetails'),
    )
    const access_token = normaluserlogindetails.normaluser_accesstoken
    if (access_token !== '') {
      dispatch(
        monthlybaseplanstripepage((res) => {
          localStorage.setItem(
            'normaluser_baseplan_stripe_page_link',
            res.data['link'],
          )
          const stripe_page_link = res.data['link']
          if (stripe_page_link !== '') {
            window.open(res.data['link'])
            // navigate("/subsciptionsuccess")
          }
        }),
      )
    }
  }
  const getyearlybaseplanstripepage = () => {
    let normaluserlogindetails = JSON.parse(
      localStorage.getItem('normaluserlogindetails'),
    )
    const access_token = normaluserlogindetails.normaluser_accesstoken
    if (access_token !== '') {
      dispatch(
        yearlybaseplanstripepage((res) => {
          localStorage.setItem(
            'normaluser_baseplan_yearly_stripe_page_link',
            res.data['link'],
          )
          const stripe_page_link = res.data['link']
          if (stripe_page_link !== '') {
            window.open(res.data['link'])
            // navigate("/subsciptionsuccess")
          }
        }),
      )
    }
  }
  const getyearlystandardplanstripepage = () => {
    let normaluserlogindetails = JSON.parse(
      localStorage.getItem('normaluserlogindetails'),
    )
    const access_token = normaluserlogindetails.normaluser_accesstoken
    if (access_token !== '') {
      dispatch(
        yearlystandardplanstripepage((res) => {
          localStorage.setItem(
            'normaluser_standardplan_yearly_stripe_page_link',
            res.data['link'],
          )
          const stripe_page_link = res.data['link']
          if (stripe_page_link !== '') {
            window.open(res.data['link'])
            // navigate("/subsciptionsuccess")
          }
        }),
      )
    }
  }
  const getyearlyproplanstripepage = () => {
    let normaluserlogindetails = JSON.parse(
      localStorage.getItem('normaluserlogindetails'),
    )
    const access_token = normaluserlogindetails.normaluser_accesstoken
    if (access_token !== '') {
      dispatch(
        yearlyproplanstripepage((res) => {
          localStorage.setItem(
            'normaluser_proplan_yearly_stripe_page_link',
            res.data['link'],
          )
          const stripe_page_link = res.data['link']
          if (stripe_page_link !== '') {
            window.open(res.data['link'])
            // navigate("/subsciptionsuccess")
          }
        }),
      )
    }
  }
  const getmonthlystandardplanstripepage = () => {
    let normaluserlogindetails = JSON.parse(
      localStorage.getItem('normaluserlogindetails'),
    )

    const access_token = normaluserlogindetails.normaluser_accesstoken
    if (access_token !== '') {
      dispatch(
        monthlystandardplanstripepage((res) => {
          localStorage.setItem(
            'normaluser_standardplan_stripe_page_link',
            res.data['link'],
          )
          const stripe_page_link = res.data['link']
          if (stripe_page_link !== '') {
            window.open(res.data['link'])
            // navigate("/subsciptionsuccess")
          }
        }),
      )
    }
  }
  const getmonthlyproplanstripepage = () => {
    let normaluserlogindetails = JSON.parse(
      localStorage.getItem('normaluserlogindetails'),
    )

    const access_token = normaluserlogindetails.normaluser_accesstoken
    if (access_token !== '') {
      dispatch(
        monthlyproplanstripepage((res) => {
          localStorage.setItem(
            'normaluser_proplan_stripe_page_link',
            res.data['link'],
          )
          const stripe_page_link = res.data['link']
          if (stripe_page_link !== '') {
            window.open(res.data['link'])
            // navigate("/subsciptionsuccess")
          }
        }),
      )
    }
  }
  return (
    <div className="main-container">
      {/* <div style={{ display: 'flex', overflow: 'scroll initial' }}> */}
      {/* <CDBSidebar textColor="#fff" backgroundColor="rgb(39, 44, 74)">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <img
            alt=""
            src={logo}
            style={{ marginLeft: '-10px', marginTop: '-5px' }}
          />
          <br></br>
          <br></br>{' '}
          <center>
            <h3 style={{ marginBottom: '-22px' }}>
              <b>Hi {normaluserlogindetails.username}</b>
            </h3>
          </center>
        </CDBSidebarHeader>
        <Sidebar />
      </CDBSidebar> */}
      <Commonsidebar />
      <div className="main">
        <div className="col-div-8">
          <div className="" style={{ marginLeft: '10px' }}>
            <div style={{ marginLeft: '40%', marginBottom: '-20px' }}>
              <p style={{ color: 'white' }}>
                Monthly
                <label className="switch">
                  <input type="checkbox" onClick={monthlyplan} />
                  <span className="slider round"></span>
                </label>
                Annualy
              </p>
            </div>
            {!show ? (
              <div className="pricing-table">
                <div className="ptable-item">
                  <div className="ptable-single">
                    <div
                      className="ptable-header"
                      style={{ backgroundColor: '#FFAA33' }}
                    >
                      <div className="ptable-title">
                        <i
                          className="fa fa-adjust"
                          style={{ fontSize: '50px' }}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="ptable-price">
                        <h3>$100.0</h3>
                        <h6>
                          <small>per month</small>
                        </h6>
                      </div>
                    </div>
                    <div className="ptable-body">
                      <div className="ptable-description">
                        <ul>
                          <div className="ptable-title">
                            <h2 style={{ color: '#FFAA33' }}>BASIC</h2>
                          </div>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              50GB Disk Space
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              50 Email Accounts
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              50GB Monthly Bandwidth
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              10 Subdomains
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              15 Domains
                            </small>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {statename.subscription_name === 'Base Plan' &&
                    statename.subscription_period === 'month' ? (
                      <div className="ptable-footer">
                        <div className="ptable-action">
                          <button
                            style={{
                              backgroundColor: '#FFAA33',
                              borderRadius: '20px',
                              border: 'none',
                              color: 'white',
                              padding: '6px 20px',
                            }}
                            disabled
                            onClick={getmonthlybaseplanstripepage}
                          >
                            Select
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="ptable-footer">
                          <div className="ptable-action">
                            <button
                              style={{
                                backgroundColor: '#FFAA33',
                                borderRadius: '20px',
                                border: 'none',
                                color: 'white',
                                padding: '6px 20px',
                              }}
                              onClick={getmonthlybaseplanstripepage}
                            >
                              Select
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="ptable-item featured-item">
                  <div className="ptable-single">
                    <div
                      className="ptable-header"
                      style={{ backgroundColor: 'rgb(18 199 108)' }}
                    >
                      <div className="ptable-title">
                        <i
                          className="fa fa-suitcase"
                          style={{ fontSize: '50px' }}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="ptable-price">
                        <h3>$200.0</h3>
                        <h6>
                          <small>per month</small>
                        </h6>
                      </div>
                    </div>
                    <div className="ptable-body">
                      <div className="ptable-description">
                        <ul>
                          <div className="ptable-title">
                            <h2 style={{ color: 'rgb(18 199 108)' }}>
                              STANDARD
                            </h2>
                          </div>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              60GB Disk Space
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              60 Email Accounts
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              60GB Monthly Bandwidth
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              15 Subdomains
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              20 Domains
                            </small>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {statename.subscription_name === 'Standard Plan' &&
                    statename.subscription_period === 'month' ? (
                      <div className="ptable-footer">
                        <div className="ptable-action">
                          <button
                            style={{
                              backgroundColor: 'rgb(18 199 108)',
                              borderRadius: '20px',
                              border: 'none',
                              color: 'white',
                              padding: '6px 20px',
                            }}
                            disabled
                            onClick={getmonthlystandardplanstripepage}
                          >
                            Select
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="ptable-footer">
                          <div className="ptable-action">
                            <button
                              style={{
                                backgroundColor: 'rgb(18 199 108)',
                                borderRadius: '20px',
                                border: 'none',
                                color: 'white',
                                padding: '6px 20px',
                              }}
                              onClick={getmonthlystandardplanstripepage}
                            >
                              Select
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="ptable-item">
                  <div className="ptable-single">
                    <div
                      className="ptable-header"
                      style={{ backgroundColor: '#6495ed' }}
                    >
                      <div className="ptable-title">
                        {/* <h2>Premium</h2> */}
                        <i
                          className="fa fa-globe"
                          style={{ fontSize: '50px' }}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="ptable-price">
                        <h3>$300.0</h3>
                        <h6>
                          <small>per month</small>
                        </h6>
                      </div>
                    </div>
                    <div className="ptable-body">
                      <div className="ptable-description">
                        <div className="ptable-title">
                          <h2 style={{ color: 'blue' }}>PRO</h2>
                        </div>
                        <ul>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              70GB Disk Space
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              70 Email Accounts
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              70GB Monthly Bandwidth
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              20 Subdomains
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              25 Domains
                            </small>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {statename.subscription_name === 'Pro Plan' &&
                    statename.subscription_period === 'month' ? (
                      <div className="ptable-footer">
                        <div className="ptable-action">
                          <button
                            style={{
                              backgroundColor: '#6495ed',
                              borderRadius: '20px',
                              border: 'none',
                              color: 'white',
                              padding: '6px 20px',
                            }}
                            disabled
                            onClick={getmonthlyproplanstripepage}
                          >
                            Select
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="ptable-footer">
                          <div className="ptable-action">
                            <button
                              style={{
                                backgroundColor: '#6495ed',
                                borderRadius: '20px',
                                border: 'none',
                                color: 'white',
                                padding: '6px 20px',
                              }}
                              onClick={getmonthlyproplanstripepage}
                            >
                              Select
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="pricing-table">
                <div className="ptable-item">
                  <div className="ptable-single">
                    <div
                      className="ptable-header"
                      style={{ backgroundColor: '#FFAA33' }}
                    >
                      <div className="ptable-title">
                        <i
                          className="fa fa-adjust"
                          style={{ fontSize: '50px' }}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="ptable-price">
                        <h3>$1000.0</h3>
                        <h6>
                          <small>per year</small>
                        </h6>
                      </div>
                    </div>
                    <div className="ptable-body">
                      <div className="ptable-description">
                        <ul>
                          <div className="ptable-title">
                            <h2 style={{ color: '#FFAA33' }}>BASIC</h2>
                          </div>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              500GB Disk Space
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              50 Email Accounts
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              50GB Yearly Bandwidth
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              10 Subdomains
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              15 Domains
                            </small>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {statename.subscription_name === 'Base Plan' &&
                    statename.subscription_period === 'year' ? (
                      <div className="ptable-footer">
                        <div className="ptable-action">
                          <button
                            style={{
                              backgroundColor: '#FFAA33',
                              borderRadius: '20px',
                              border: 'none',
                              color: 'white',
                              padding: '6px 20px',
                            }}
                            onClick={getyearlybaseplanstripepage}
                            disabled
                          >
                            Select
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="ptable-footer">
                          <div className="ptable-action">
                            <button
                              style={{
                                backgroundColor: '#FFAA33',
                                borderRadius: '20px',
                                border: 'none',
                                color: 'white',
                                padding: '6px 20px',
                              }}
                              onClick={getyearlybaseplanstripepage}
                            >
                              Select
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="ptable-item featured-item">
                  <div className="ptable-single">
                    <div
                      className="ptable-header"
                      style={{ backgroundColor: 'rgb(18 199 108)' }}
                    >
                      <div className="ptable-title">
                        <i
                          className="fa fa-suitcase"
                          style={{ fontSize: '50px' }}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="ptable-price">
                        <h3>$2000.0</h3>
                        <h6>
                          <small>per year</small>
                        </h6>
                      </div>
                    </div>
                    <div className="ptable-body">
                      <div className="ptable-description">
                        <ul>
                          <div className="ptable-title">
                            <h2 style={{ color: 'rgb(18 199 108)' }}>
                              STANDARD
                            </h2>
                          </div>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              600GB Disk Space
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              60 Email Accounts
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              60GB Yearly Bandwidth
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              15 Subdomains
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              20 Domains
                            </small>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {statename.subscription_name === 'Standard Plan' &&
                    statename.subscription_period === 'year' ? (
                      <div className="ptable-footer">
                        <div className="ptable-action">
                          <button
                            style={{
                              backgroundColor: 'rgb(18 199 108)',
                              borderRadius: '20px',
                              border: 'none',
                              color: 'white',
                              padding: '6px 20px',
                            }}
                            onClick={getyearlystandardplanstripepage}
                            disabled
                          >
                            Select
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="ptable-footer">
                          <div className="ptable-action">
                            <button
                              style={{
                                backgroundColor: 'rgb(18 199 108)',
                                borderRadius: '20px',
                                border: 'none',
                                color: 'white',
                                padding: '6px 20px',
                              }}
                              onClick={getyearlystandardplanstripepage}
                            >
                              Select
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="ptable-item">
                  <div className="ptable-single">
                    <div
                      className="ptable-header"
                      style={{ backgroundColor: '#6495ed' }}
                    >
                      <div className="ptable-title">
                        {/* <h2>Premium</h2> */}
                        <i
                          className="fa fa-globe"
                          style={{ fontSize: '50px' }}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="ptable-price">
                        <h3>$3000.0</h3>
                        <h6>
                          <small>per year</small>
                        </h6>
                      </div>
                    </div>
                    <div className="ptable-body">
                      <div className="ptable-description">
                        <div className="ptable-title">
                          <h2 style={{ color: 'blue' }}>PRO</h2>
                        </div>
                        <ul>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              700GB Disk Space
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              70 Email Accounts
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              70GB Yearly Bandwidth
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              20 Subdomains
                            </small>
                          </li>
                          <li>
                            <small style={{ fontSize: '.975em' }}>
                              25 Domains
                            </small>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {statename.subscription_name === 'Pro Plan' &&
                    statename.subscription_period === 'year' ? (
                      <div className="ptable-footer">
                        <div className="ptable-action">
                          <button
                            style={{
                              backgroundColor: '#6495ed',
                              borderRadius: '20px',
                              border: 'none',
                              color: 'white',
                              padding: '6px 20px',
                            }}
                            onClick={getyearlyproplanstripepage}
                            disabled
                          >
                            Select
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="ptable-footer">
                          <div className="ptable-action">
                            <button
                              style={{
                                backgroundColor: '#6495ed',
                                borderRadius: '20px',
                                border: 'none',
                                color: 'white',
                                padding: '6px 20px',
                              }}
                              onClick={getyearlyproplanstripepage}
                            >
                              Select
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <AvatarSubMenu />
      </div>
      {/* </div> */}
    </div>
  )
}
export default Plans
