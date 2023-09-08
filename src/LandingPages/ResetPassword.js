import { useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ResetPassword() {
  const [statename, setName] = useState({
    newpassword: '',
  })
  const frontendbaseurl = process.env.REACT_APP_FRONTEND_BASE_URL
  const apibaseurl = process.env.REACT_APP_API_BASE_URL
  const [resetbuttonstatus, setresetbuttonstatus] = useState(false)
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setName({ ...statename, [name]: value })
  }
  const continuetolandingpage = () => {
    navigate('/')
  }
  const [errors, setErrors] = useState({})
  const changenewpassword = () => {
    setErrors(validate(statename))
    if (statename.newpassword.length < 4) {
      setErrors(validate(statename))
    } else {
      var standardbaseplanurl = window.location.href
        .split(frontendbaseurl)
        .pop()
      var formData = new FormData()
      formData.append('password', statename.newpassword)
      axios({
        method: 'patch',
        url: apibaseurl + standardbaseplanurl,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then(function (response) {
          if (
            response.data['message'] === 'Password reset complete' &&
            response.status === 200
          ) {
            setresetbuttonstatus(true)
          }
        })
        .catch(function (response) {
          sessionStorage.setItem('response', response)
        })
    }
  }
  const validate = (items) => {
    const errors = {}
    if (!items.newpassword) {
      errors.newpassword = 'New password cannot be blank'
    } else if (items.newpassword.length < 4) {
      errors.newpassword = 'New password must be more than 4 characters'
    }
    return errors
  }

  return (
    <div className="registration-wrap">
      <Header />
      <div className="modalpopups">
        <div>
          <div className="resetpasswordmodalpopup">
            <button
              style={{
                border: 'none',
                backgroundColor: '#A2D3E2',
                color: 'white',
              }}
            >
              X
            </button>
            <div className="forgotmodalinputfield">
              <center>
                <h5 style={{ color: 'white' }}>
                  <b>Reset password</b>
                </h5>
              </center>
              <br></br>
              <center>
                <h6 style={{ color: '	white' }}>Enter a new password for</h6>
              </center>
              <br></br>
              {resetbuttonstatus ? (
                <center>
                  {' '}
                  <h6 style={{ color: '#008000', marginTop: '-2px' }}>
                    Password is reset successfully.
                  </h6>
                </center>
              ) : (
                <></>
              )}
              <div className="input-field">
                <div className="input-icons">
                  <center>
                    <i className="fa fa-key icon"></i>
                    <input
                      className="inputfieldforgotpassword"
                      name="newpassword"
                      value={statename.newpassword}
                      onChange={handleInputChange}
                      placeholder="New Password"
                      type="text"
                      style={{ border: 'none' }}
                    />
                  </center>
                  <p style={{ color: 'red', textAlign: 'center' }}>
                    <small>{errors.newpassword}</small>
                  </p>
                </div>
              </div>
              <br></br>
              {resetbuttonstatus ? (
                <center>
                  <button
                    style={{
                      backgroundColor: '#15cf65',
                      color: 'white',
                      border: '0',
                      borderRadius: '20px',
                      padding: '6px 20px',
                    }}
                    onClick={continuetolandingpage}
                  >
                    <b>Continue</b>
                  </button>
                </center>
              ) : (
                <>
                  <center>
                    <button
                      style={{
                        backgroundColor: '#15cf65',
                        color: 'white',
                        border: '0',
                        borderRadius: '20px',
                        padding: '6px 20px',
                      }}
                      onClick={changenewpassword}
                    >
                      <b>Reset Password</b>
                    </button>
                  </center>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ResetPassword
