import Header from '../LandingPages/Header'
import { Link } from 'react-router-dom'
function RegistrationSuccess() {
  return (
    <div className="registration-wrap">
      <Header />
      <div id="card" className="animated fadeIn">
        {' '}
        <div id="upper-side">
          {' '}
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
          <h3 id="status"> Email Sent </h3>{' '}
          <p id="message">
            {' '}
            An email has been sent to your account. Please verify the email for
            registration successfully.{' '}
          </p>{' '}
          <Link to="/" id="successemailcontinue">
            <b>Continue</b>
          </Link>
        </div>
        {''}
      </div>
    </div>
  )
}
export default RegistrationSuccess
