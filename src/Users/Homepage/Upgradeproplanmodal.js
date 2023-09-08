import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  upgrademonthlyproplantoproplanyearlycreation,
  viewproplanmonthlyupgradedetailsalert,
  viewproplanmonthlyupgradedetails,
} from '../../Redux/Action/ActionCreator'
import { useNavigate } from 'react-router-dom'

function Upgradeproplanviewmodal(props) {
  const {
    closeproplanupgradeview,
    showproplanupgradeview,
    userselectedplan,
    userselectedplanperiod,
    planname,
  } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let normaluserlogindetails = JSON.parse(
    localStorage.getItem('normaluserlogindetails'),
  )

  const [viewalert, setviewalert] = useState('')
  const [viewupgradeplanstatus, setviewupgradeplanstatus] = useState('')
  const [viewupgraderesults, setviewupgraderesults] = useState('')
  const [plancreatedstatus, setplancreatedstatus] = useState('')
  useEffect(() => {
    sessionStorage.setItem('plancreatedstatus', plancreatedstatus)
    const access_token = normaluserlogindetails.normaluser_accesstoken
    if (access_token !== '' && planname === 'Pro Plan') {
      dispatch(
        upgrademonthlyproplantoproplanyearlycreation((res) => {
          if ('response' in res) {
            if (res.response.data.message === 'Not upgraded your plan ') {
              setviewupgraderesults('Please click Upgrade Plan Button')
            }
          }
          if ('response' in res) {
            if (res.response.statusText === 'Internal Server Error') {
              setviewupgraderesults(
                'Pro Plan Subscription Upgraded To Monthly To yearly Is Active',
              )
            }
          }
          if ('response' in res) {
            setviewupgraderesults(res.response.data['message'])
          }
        }),
      )
    }
  }, [])
  const upgradebaseplanmonthlyalert = () => {
    if (userselectedplan === 'Pro Plan' && userselectedplanperiod === 'month') {
      dispatch(
        viewproplanmonthlyupgradedetailsalert((res) => {
          // setviewupgradealert(res.data['message'])
          setviewalert(res.data['message'])
          // console.log(res)
        }),
      )
    }
  }
  const viewupgradedetails = (e) => {
    e.preventDefault()
    const access_token = normaluserlogindetails.normaluser_accesstoken
    if (access_token !== '') {
      dispatch(
        viewproplanmonthlyupgradedetails((res) => {
          if (
            res.data['message'] ===
            'Pro Plan Subscription Upgraded to monthly to yearly '
          ) {
            setviewupgradeplanstatus(res.data['message'])
            setplancreatedstatus(res.statusText)
          }
        }),
      )
    }
  }
  useEffect(() => {}, [])
  return (
    <div className="modalpopups">
      {showproplanupgradeview ? (
        <div>
          <button
            onClick={closeproplanupgradeview}
            style={{
              color: 'white',
              border: 'none',
              width: '50%',
              backgroundColor: 'white',
              marginTop: '10px',
              marginLeft: '0%',
              textAlign: 'left',
              background: 'rgba(19, 19, 19, 0.45)',
              //   borderRadius: '16px',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(10.3px)',
              WebkitBackdropFilter: 'blur(10.3px)',
            }}
          >
            X
          </button>
          <div
            style={{
              border: 'none',
              width: '50%',
              background: 'rgba(19, 19, 19, 0.45)',
              //   borderRadius: '16px',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(10.3px)',
              WebkitBackdropFilter: 'blur(10.3px)',
              marginTop: -'820px',
              marginLeft: '0%',
              textAlign: 'left',
              padding: '10px',
            }}
          >
            <h1
              style={{ color: 'white', fontSize: '18px', marginBottom: '30px' }}
            >
              Upgrade Status
            </h1>

            {userselectedplan === 'Pro Plan' &&
            userselectedplanperiod === 'month' ? (
              <div>
                {/* <h1>{viewupgraderesults}</h1> */}
                {viewupgraderesults === 'Not upgraded your plan ' ? (
                  <>
                    <h1 style={{ color: 'white', fontSize: '14px' }}>
                      {viewupgraderesults}
                    </h1>
                  </>
                ) : (
                  <>
                    {viewupgraderesults !==
                      'Unbale to load details you are not payed the amount check the email and complete your payment.' &&
                    viewupgraderesults !== 'Not upgraded your plan ' ? (
                      <>
                        <h1 style={{ color: 'white', fontSize: '14px' }}>
                          Pro Plan Subscription Monthly To Yearly Subscription
                          Is Active
                        </h1>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )}

                {viewupgraderesults ===
                  'Unbale to load details you are not payed the amount check the email and complete your payment.' &&
                viewalert === '' ? (
                  <>
                    <h1 style={{ color: 'white', fontSize: '14px' }}>
                      {viewupgraderesults}
                    </h1>
                    <button
                      className="btn btn-primary"
                      style={{ color: 'white' }}
                      onClick={upgradebaseplanmonthlyalert}
                    >
                      Upgrade
                    </button>
                  </>
                ) : (
                  <></>
                )}
                {viewalert ===
                'Check the email to complete the payment then only view the upgraded details' ? (
                  <>
                    <h1 style={{ color: 'white', fontSize: '14px' }}>
                      {viewalert ===
                        'Check the email to complete the payment then only view the upgraded details' &&
                      viewupgradeplanstatus === '' ? (
                        <>
                          <h1 style={{ color: 'white', fontSize: '14px' }}>
                            {viewalert}
                            {navigate('/')}
                          </h1>
                        </>
                      ) : (
                        <></>
                      )}
                    </h1>
                  </>
                ) : (
                  <>
                    {/* <button
                      className="btn btn-primary"
                      style={{ color: 'white' }}
                      onClick={viewupgradedetails}
                    >
                      View Upgrade details
                    </button> */}
                  </>
                )}
                {viewupgraderesults !== 'Not upgraded your plan ' ||
                viewupgraderesults !==
                  'Unbale to load details you are not payed the amount check the email and complete your payment.' ||
                viewalert !==
                  'Check the email to complete the payment then only view the upgraded details' ? (
                  <></>
                ) : (
                  <>
                    <button
                      className="btn btn-primary"
                      style={{ color: 'white' }}
                      onClick={viewupgradedetails}
                    >
                      View Upgrade details
                    </button>
                  </>
                )}
              </div>
            ) : (
              <>
                {userselectedplan === '' && userselectedplanperiod === '' ? (
                  <h6 style={{ color: 'white' }}>
                    No subscription is selected. Please select a subscription.
                  </h6>
                ) : (
                  <>
                    <h6 style={{ color: 'white' }}>
                      Pro Plan Subscription Upgraded To Monthly To yearly Is
                      Active
                    </h6>
                  </>
                )}
              </>
            )}

            <div className="table-responsive"></div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
export default Upgradeproplanviewmodal
