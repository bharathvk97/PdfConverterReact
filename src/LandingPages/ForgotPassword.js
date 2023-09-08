import React, { useState } from 'react'
import { forgotpasswordforuser } from '../Redux/Action/ActionCreator'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Forgotpassword(props) {
  const { Forgotmodalshow, closeForgotModal } = props
  const dispatch = useDispatch()
  const [statename, setName] = useState({
    email: '',
  })
  const navigate = useNavigate()
  const [passwordresetlinkstatus, setpasswordresetlinkstatus] = useState('')
  const [errors, setErrors] = useState({})
  const [emailtatus, setemailtatus] = useState(false)
  const handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setName({ ...statename, [name]: value })
  }
  const continuetolandingpage = () => {
    setpasswordresetlinkstatus(false)
    if (statename.email === '') {
      closeForgotModal()
      setemailtatus(false)
    }
    navigate('/')
  }
  const resetpassword = () => {
    setErrors(validate(statename))

    if (!errors) {
    } else {
      var formData = new FormData()
      formData.append('email', statename.email)
      dispatch(
        forgotpasswordforuser(formData, (res) => {
          if (res.status === 200 && res.data['message'] !== '') {
            setpasswordresetlinkstatus(true)
            setemailtatus(true)
            statename.email = ''
            navigate('/')
          }
        }),
      )
    }
  }
  const validate = (items) => {
    const errors = {}
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!items.email.match(mailformat)) {
      errors.email = 'Please enter valid email address'
    }
    if (!items.email) {
      errors.email = 'Email cannot be blank'
    }

    return errors
  }

  if (Forgotmodalshow === false) {
    statename.email = ''
  }

  return (
    <div className="modalpopups position-relative">
      {Forgotmodalshow ? (
        <div>
          <div className="forgotpasswordmodalpopup right">
            <button
              onClick={closeForgotModal}
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
                  <b>Reset your password</b>
                </h5>
              </center>
              <br></br>
              <center>
                <h6 style={{ color: '	white' }}>Request an email reset link</h6>
              </center>
              <br></br>
              {passwordresetlinkstatus ? (
                <h6
                  style={{
                    color: '#008000',
                    marginTop: '-2px',
                    marginLeft: '39px',
                  }}
                >
                  Password reset link is successfully sent to your email.
                </h6>
              ) : (
                <></>
              )}
              <div className="input-fieldforgotpassword">
                <div className="input-icons">
                  <center>
                    <i className="fa fa-envelope icon"></i>
                    <input
                      className="inputfieldforgotpassword"
                      name="email"
                      placeholder="example@gmail.com"
                      type="text"
                      style={{ border: 'none' }}
                      value={statename.email}
                      onChange={handleInputChange}
                    />
                  </center>
                </div>
              </div>
              <p style={{ color: 'red', textAlign: 'center' }}>
                <small>{errors.email}</small>
              </p>
              <br></br>

              {emailtatus ? (
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
                      onClick={continuetolandingpage}
                    >
                      <b>Continue</b>
                    </button>
                  </center>
                </>
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
                      onClick={resetpassword}
                    >
                      <b>Send Link</b>
                    </button>
                  </center>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
export default Forgotpassword
