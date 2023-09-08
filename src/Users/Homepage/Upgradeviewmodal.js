import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {
//   viewbaseplanmonthlyupgradedetails,
//   viewbaseplanmonthlyupgradedetailsalert,
// } from '../../Redux/Action/ActionCreator'

function Upgradeviewdetailsmodal(props) {
  const {
    closeupgradeviewdetails,
    showupgradeviewdetails,
    userselectedplan,
    userselectedplanperiod,
    subscription_name,
    subscription_upgraded_start_period,
    subscription_upgraded_end_period,
    subscriptionstatus,
    subscriptionperiod,
  } = props
  sessionStorage.setItem('userselectedplan', userselectedplan)
  sessionStorage.setItem('userselectedplanperiod', userselectedplanperiod)
  // const dispatch = useDispatch()
  // let normaluserlogindetails = JSON.parse(
  //   localStorage.getItem('normaluserlogindetails'),
  // )
  // const [
  //   subscription_amount_reamining,
  //   setsubscription_amount_reamining,
  // ] = useState('')
  // const [
  //   subscription_amount_paid_status,
  //   setsubscription_amount_paid_status,
  // ] = useState('')
  // const [subscription_amount_paid, setsubscription_amount_paid] = useState('')
  // const [
  //   subscription_amount_paid_time,
  //   setsubscription_amount_paid_time,
  // ] = useState('')
  // const [subscription_amount, setsubscription_amount] = useState('')
  // const [subscription_due_amount, setsubscription_due_amount] = useState('')
  // // const [subscription_name, setsubscription_name] = useState('')
  // const [subscription_status, setsubscription_status] = useState('')
  // const [plancreatedstatus, setplancreatedstatus] = useState('')
  // const [subscription_unused_amount, setsubscription_unused_amount] = useState(
  //   '',
  // )
  // const [
  //   subscription_upgraded_period,
  //   setsubscription_upgraded_period,
  // ] = useState('')

  return (
    <div className="modalpopups">
      {showupgradeviewdetails ? (
        <div>
          <button
            onClick={closeupgradeviewdetails}
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
              style={{
                color: 'white',
                fontSize: '18px',
                marginBottom: '30px',
              }}
            >
              View Upgrade Details
            </h1>

            {subscription_name ? (
              <div>
                <div className="table-responsive">
                  <table className="table recentfilerecords">
                    <thead>
                      <tr>
                        <th
                          style={{
                            color: 'white',
                            background: 'none',
                            // borderRadius: '16px',
                            // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            // backdropFilter: ' blur(10.3px)',
                            WebkitBackdropFilter: 'blur(10.3px)',
                          }}
                        >
                          Subscription Name
                        </th>
                        <th
                          style={{
                            color: 'white',
                            background: 'none',
                            // borderRadius: '16px',
                            // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            // backdropFilter: ' blur(10.3px)',
                            WebkitBackdropFilter: 'blur(10.3px)',
                          }}
                        >
                          Subscription Period
                        </th>
                        <th
                          style={{
                            color: 'white',
                            background: 'none',
                            // borderRadius: '16px',
                            // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            // backdropFilter: ' blur(10.3px)',
                            WebkitBackdropFilter: 'blur(10.3px)',
                          }}
                        >
                          Upgradation Start Date
                        </th>
                        <th
                          style={{
                            color: 'white',
                            background: 'none',
                            // borderRadius: '16px',
                            // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            // backdropFilter: ' blur(10.3px)',
                            WebkitBackdropFilter: 'blur(10.3px)',
                          }}
                        >
                          Upgradation End Date
                        </th>
                        <th
                          style={{
                            color: 'white',
                            background: 'none',
                            // borderRadius: '16px',
                            // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            // backdropFilter: ' blur(10.3px)',
                            WebkitBackdropFilter: 'blur(10.3px)',
                          }}
                        >
                          Subscription Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            color: 'white',
                            background: 'none',
                            // borderRadius: '16px',
                            // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            // backdropFilter: ' blur(10.3px)',
                            WebkitBackdropFilter: 'blur(10.3px)',
                          }}
                        >
                          {subscription_name}
                        </td>
                        <td
                          style={{
                            color: 'white',
                            background: 'none',
                            // borderRadius: '16px',
                            // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            // backdropFilter: ' blur(10.3px)',
                            WebkitBackdropFilter: 'blur(10.3px)',
                          }}
                        >
                          {subscriptionperiod}
                        </td>
                        <td
                          style={{
                            color: 'white',
                            background: 'none',
                            // borderRadius: '16px',
                            // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            // backdropFilter: ' blur(10.3px)',
                            WebkitBackdropFilter: 'blur(10.3px)',
                          }}
                        >
                          {subscription_upgraded_start_period}
                        </td>
                        <td
                          style={{
                            color: 'white',
                            background: 'none',
                            // borderRadius: '16px',
                            // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            // backdropFilter: ' blur(10.3px)',
                            WebkitBackdropFilter: 'blur(10.3px)',
                          }}
                        >
                          {subscription_upgraded_end_period}
                        </td>
                        <td
                          style={{
                            color: 'white',
                            background: 'none',
                            // borderRadius: '16px',
                            // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            // backdropFilter: ' blur(10.3px)',
                            WebkitBackdropFilter: 'blur(10.3px)',
                          }}
                        >
                          {subscriptionstatus}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <>
                <h6 style={{ color: 'white' }}>No records found</h6>
              </>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
export default Upgradeviewdetailsmodal
