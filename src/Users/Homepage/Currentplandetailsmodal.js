import React from 'react'
function Currentplanviewdetailsmodal(props) {
  const {
    closecurrentviewdetails,
    showcurrentviewdetails,
    userselectedplan,
    userselectedplanperiod,
    currentsubscription_name,
    subscription_current_start_period,
    subscription_current_end_period,
    currentsubscriptionstatus,
    currentsubscriptionperiod,
  } = props

  return (
    <div className="modalpopups">
      {showcurrentviewdetails ? (
        <div>
          <button
            onClick={closecurrentviewdetails}
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
              View Current Plan Details
            </h1>

            {(userselectedplan === 'Base Plan' && userselectedplan) ||
            userselectedplanperiod === 'month' ||
            userselectedplanperiod === 'year' ? (
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
                          Subscription Start Date
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
                          Subscription End Date
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
                          {currentsubscription_name}
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
                          {currentsubscriptionperiod}
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
                          {subscription_current_start_period}
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
                          {subscription_current_end_period}
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
                          {currentsubscriptionstatus}
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
export default Currentplanviewdetailsmodal
