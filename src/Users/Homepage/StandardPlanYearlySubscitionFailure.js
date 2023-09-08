import { Link } from 'react-router-dom'
import Commonsidebar from './SidebarAndMenus/Commonsidebar'
import AvatarSubMenu from './AvatarAndSubMenus'

function StandardPlanYearlySubscitionFailure() {
  let normaluserlogindetails = JSON.parse(
    localStorage.getItem('normaluserlogindetails'),
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '40px',
            }}
          >
            <div
              className="icon-box"
              style={{
                maxWidth: '15%',
                backgroundColor: 'red',
                display: 'flex',
                justifyContent: 'center',
                borderRadius: '60px',
                marginTop: '10px',
                // maxWidth: '60px',
              }}
            >
              <i className="material-icons" style={{ fontSize: '80px' }}>
                &#xE5CD;
              </i>
            </div>
          </div>
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
            Hi {normaluserlogindetails.username}, Subscription Failed
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
            oops!!! Something went wrong. Please Try again.{' '}
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
export default StandardPlanYearlySubscitionFailure
