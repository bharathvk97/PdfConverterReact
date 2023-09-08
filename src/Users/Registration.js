import React, { useState, useMemo, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import countryList from 'react-select-country-list'
import Header from '../LandingPages/Header'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { signUpUser } from '../Redux/Action/ActionCreator'

function App() {
  const navigate = useNavigate()

  const [statename, setName] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    phone_no: '',
    password: '',
    confirm_password: '',
    gender: '',
    country: '',
    countryobj: [],
    time_zone: '',
    user_type: '1',
  })
  const options = useMemo(() => countryList().getData(), [])
  const [country, setCountry] = useState('')
  const [errors, setErrors] = useState({})
  const [resData, setResData] = useState("");

  const dispatch = useDispatch()
  const [passwordType, setPasswordType] = useState('password')

  const handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    const currentdate = new Date()
    let utc = currentdate.toUTCString()
    statename.time_zone = utc
    setName({ ...statename, [name]: value })
  }
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      return
    }
    setPasswordType('password')
  }
  function insertobject(arr, obj) {
    arr.push(obj.label)
    arr.splice(1)
    arr[0] = obj.label
    statename.country = arr[0]
  }

  const changeHandler = (country) => {
    setCountry(country)
    const value = country.label
    const name = country.value
    sessionStorage.setItem('name', name)
    setCountry({ ...country, value })
    insertobject(statename.countryobj, country)
  }

  const formHandler = (ev) => {

    ev.preventDefault()

    var formData = new FormData()
    formData.append('first_name', statename.first_name)
    formData.append('last_name', statename.last_name)
    formData.append('username', statename.username)
    formData.append('password', statename.password)
    formData.append('confirm_password', statename.confirm_password)
    formData.append('country', statename.country)
    formData.append('gender', statename.gender)
    formData.append('time_zone', statename.time_zone)
    formData.append('phone_no', statename.phone_no)
    formData.append('email', statename.email)
    formData.append('user_type', statename.user_type)


    dispatch(
      signUpUser(formData, (res) => {
        // console.log(res)
        // console.log(Object.keys(res.data)[0]);
        let message = res.data['message']
        let status = res.status
        if (
          message ===
          'Registered successfully and an email has been sent to your account.' &&
          status === 200
        ) {
          navigate('/registrationsuccess')
        }
        if (res) {
          const key = Object.keys(res.data)[0];
          const msg = res.data[key][0];
          const errors = {};
          errors.field_error = `${msg}`
          setErrors(errors);

        }

      }),
    )

  }


return (

  <div className="registration-wrap">
    <Header />
    <div className="">
      <Container>
        <form className="formreg" onSubmit={formHandler}>
          <div className="">
            <div className="" style={{ marginTop: '28px' }}>
              <header
                className="registrationheader"
                style={{ marginTop: '10px', paddingTop: '10px' }}
              >
                Registration
              </header>
              {errors.field_error ? (
                <div>
                  <p
                    style={{
                      color: 'red',
                      marginTop: 'auto',
                      backgroundColor: '#FFDEAD',
                      padding: '10px',
                    }}
                  >
                    <small>{errors.field_error}</small>
                  </p>
                </div>
              ) : (
                <></>
              )}

              <div className="fields" style={{ marginTop: '-10px' }}>
                <div className="input-field">
                  <label style={{ fontWeight: 'bold' }}>
                    Firstname<sup className="text-danger">*</sup>
                  </label>
                  <input
                    name="first_name"
                    type="text"
                    value={statename.first_name}
                    onChange={handleInputChange}
                    placeholder="Enter your firstname"
                  />
                </div>
                <div className="input-field">
                  <label style={{ fontWeight: 'bold' }}>
                    Lastname<sup className="text-danger">*</sup>
                  </label>
                  <input
                    name="last_name"
                    type="text"
                    value={statename.last_name}
                    onChange={handleInputChange}
                    placeholder="Enter your lastname"
                  />
                </div>

                <div className="input-field">
                  <label style={{ fontWeight: 'bold' }}>
                    Username<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={statename.username}
                    onChange={handleInputChange}
                    placeholder="Enter your username"
                  />
                </div>
                <div className="input-field">
                  <label style={{ fontWeight: 'bold' }}>
                    Email<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={statename.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="input-field">
                  <label style={{ fontWeight: 'bold' }}>
                    Phone Number<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="text"
                    name="phone_no"
                    placeholder="Enter your number"
                    value={statename.phone_no}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-field">
                  <label style={{ fontWeight: 'bold' }}>
                    Password<sup className="text-danger">*</sup>
                  </label>
                  {/* <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={statename.password}
                      onChange={handleInputChange}
                    /> */}
                  <input
                    type={passwordType}
                    onChange={handleInputChange}
                    value={statename.password}
                    name="password"
                    className="modalfields"
                    placeholder="Enter your password"
                    required
                  />
                  {passwordType === 'password' ? (
                    <i
                      onClick={togglePassword}
                      className="fa fa-eye-slash"
                      style={{
                        marginTop: '-30px',
                        display: 'flex',
                        position: 'relative',
                        backgroundColor: 'transparent',
                        marginLeft: '220px',
                      }}
                    ></i>
                  ) : (
                    <i
                      onClick={togglePassword}
                      className="fa fa-eye"
                      style={{
                        marginTop: '-30px',
                        display: 'flex',
                        position: 'relative',
                        backgroundColor: 'transparent',
                        marginLeft: '220px',
                      }}
                    ></i>
                  )}
                </div>
                <div className="input-field">
                  <label style={{ fontWeight: 'bold' }}>
                    Confirm Password<sup className="text-danger">*</sup>
                  </label>
                  {/* <input
                      type="password"
                      name="confirm_password"
                      placeholder="Confirm your password"
                      value={statename.confirm_password}
                      onChange={handleInputChange}
                    /> */}
                  <input
                    type={passwordType}
                    onChange={handleInputChange}
                    value={statename.confirm_password}
                    name="confirm_password"
                    className="modalfields"
                    placeholder="Confirm your password"
                    required
                  />
                  {passwordType === 'password' ? (
                    <i
                      onClick={togglePassword}
                      className="fa fa-eye-slash"
                      style={{
                        marginTop: '-30px',
                        display: 'flex',
                        position: 'relative',
                        backgroundColor: 'transparent',
                        marginLeft: '220px',
                      }}
                    ></i>
                  ) : (
                    <i
                      onClick={togglePassword}
                      className="fa fa-eye"
                      style={{
                        marginTop: '-30px',
                        display: 'flex',
                        position: 'relative',
                        backgroundColor: 'transparent',
                        marginLeft: '220px',
                      }}
                    ></i>
                  )}
                </div>
                {/* <div className="input-field">
                      <label style={{ fontWeight: 'bold' }}>
                        Country<sup className="text-danger">*</sup>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={statename.country}
                        onChange={handleInputChange}
                        placeholder="Choose your country"
                      />
                    </div> */}
                <div className="input-field">
                  <label style={{ fontWeight: 'bold' }}>
                    Country<sup className="text-danger">*</sup>
                  </label>
                  <Select
                    options={options}
                    value={country}
                    onChange={changeHandler}
                  />
                  {/* <Select  options={options} value={statename.country} onChange={handleInputChange} /> */}
                </div>
                <div className="genderlabel">
                  <label
                    style={{
                      fontWeight: 'bold',
                      fontSize: '14px',
                      marginLeft: '-10px',
                    }}
                  >
                    Gender
                    {/* Gender<sup className="text-danger">*</sup> */}
                  </label>
                  <div className="radiobuttons">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      id="regular"
                      style={{ backgroundColor: '#ddd' }}
                      checked={statename.gender === 'Male'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="regular" className="radioalign">
                      Male
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      id="regular"
                      checked={statename.gender === 'Female'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="regular" className="radioalign">
                      Female
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      value="Prefer not to say"
                      id="regular"
                      checked={statename.gender === 'Prefer not to say'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="regular" className="radioalign">
                      Prefer not to say
                    </label>
                  </div>
                </div>
              </div>

              <div className="buttonsignup" style={{ paddingBottom: '20px' }}>
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary button-block"
                />
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  </div>
)
 }
export default App
