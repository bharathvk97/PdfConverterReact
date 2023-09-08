import React, { useState } from 'react'
import Commonsidebar from './Commonsidebar'
import AvatarSubMenu from '../AvatarAndSubMenus'
import { changePassword } from '../../../Redux/Action/ActionCreator'
import { useDispatch } from 'react-redux'

function ChangePassword() {
  const [statename, setName] = useState({
    old_password: '',
    new_password: '',
  })
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()
  const handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setName({ ...statename, [name]: value })
  }

  const changeProfilePassword = (ev) => {
    ev.preventDefault()
    if (statename !== '') {
      var formData = new FormData()
      formData.append('old_password', statename.old_password)
      formData.append('new_password', statename.new_password)

      dispatch(
        changePassword(formData, (res) => {
          if (res !== null) {
            if (res.data['status'] === 'success') {
              console.log(res.data)
              setMessage(res.data['message'])
              // console.log(message)
            }
          } else {
            
            setMessage('Old password is incorrect')
          }
        }),
      )
    }
  }
  return (
    <div className="main-container">
      <Commonsidebar />
      <div className="main">
        <div className="changepassword-container" style={{ marginTop: '15px' }}>
          <form
            className="formprofileedit"
            style={{ minHeight: '150px' }}
            onSubmit={changeProfilePassword}
          >
            <h5
              style={{ color: 'white', marginTop: '10px', marginLeft: '10px' }}
            >
              Change Password
            </h5>
            <br></br>
            {message ? (
              <h6
                style={{
                  color: `${message==='Password updated successfully'?'#4BB543':'#ff1a1a'}`,
                  marginTop: '-2px',
                  marginLeft: '10px',
                }}
              >
                {message}
              </h6>
            ) : (
              <></>
            )}

            <div className="changepassworddetails">
              <div className="fields" style={{ marginTop: '-10px' }}>
                <div className="input-field">
                  <label style={{ fontWeight: 'bold', color: 'white' }}>
                    Old Password<sup className="text-danger">*</sup>
                  </label>
                  <input
                    name="old_password"
                    type="text"
                    placeholder="Enter your old password"
                    value={statename.old_password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <label style={{ fontWeight: 'bold', color: 'white' }}>
                    New Password<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="text"
                    name="new_password"
                    placeholder="Enter your new password"
                    value={statename.new_password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="buttonsignup">
              <input
                type="submit"
                value="Update Password"
                className="btn btn-success updatepasswordbutton"
              />
            </div>
          </form>
        </div>
      </div>
      <AvatarSubMenu />
    </div>
  )
}
export default ChangePassword
