import React, { useState, useEffect } from 'react'
import { useNavigate, Link  } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  signInUser,
  googlelogin,
  getusertypewhilelogin,
  microsoftlogingeturl,
  microsoftloginaccesstoken,
  googleloginAccessToken,
  // linkedinloginaccesstoken,
} from '../Redux/Action/ActionCreator'
// import { userloginDetails } from '../Redux/Reducer/CommonReducer'
import FacebookLogin from 'react-facebook-login'
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'
import Forgotpassword from '../LandingPages/ForgotPassword'
import SigninpageHeader from '../LandingPages/SigninpageHeader'
import Linkedinlogin from './Linkedinlogin'
import WelcomePage from './Homepage/WelcomePage'

function Signinpage(props) {
  const [Forgotmodalshow, setForgotmodalshow] = useState(false)
  const openForgotModal = () =>
   setForgotmodalshow(true)
  const closeForgotModal = () => 
  setForgotmodalshow(false)


  const { show, closeModal,welcomeModal,setWelcomeModal} = props
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const details = useSelector(userloginDetails)
    const [passwordType, setPasswordType] = useState('password')
  // const linkedin_client_id = process.env.REACT_APP_LINKEDIN_CLIENT_ID
  // const baseurl = process.env.REACT_APP_FRONTEND_BASE_URL
  const google_client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID
  const facebookappid = process.env.REACT_APP_FACEBOOK_APP_ID
  useEffect(() => {
    if (window.location.href.indexOf('/?code=') > -1) {
      var state = window.location.href.split('state=').pop()
      var beforecode = window.location.href.split('code=').pop()
      var code = beforecode.split('&state=')[0]
      var formData = new FormData()
      formData.append('code', code)
      formData.append('state', state)
      formData.append('user_type', 1)
      dispatch(
        microsoftloginaccesstoken(formData, (res) => {
          // console.log(res)
          //  localStorage.setItem("accesstoken", res.data['token']);
          // if(res.data['token']){
          //   localStorage.setItem("accesstoken", res.data["token"]);
          //   navigate('/')
          // }
        }),
      )
    }
  }, [])
  // useEffect(() => {
  //   if (window.location.href.indexOf('/linkedin?code=') > -1) {
  //     var state = window.location.href.split('state=').pop()
  //     var beforecode = window.location.href.split('code=').pop()
  //     var code = beforecode.split('&state=')[0]
  //     console.log(code, state)
  //     var formData = new FormData()
  //     formData.append('code', code)
  //     formData.append('state', state)
  //     formData.append('user_type', 1)
  //     dispatch(
  //       linkedinloginaccesstoken(formData, (res) => {
  //         console.log(res)
  //         //  localStorage.setItem("accesstoken", res.data['token']);
  //         // if(res.data['token']){
  //         //   localStorage.setItem("accesstoken", res.data["token"]);
  //         //   navigate('/')
  //         // }
  //       }),
  //     )
  //   }
  // }, [])
const [googleRefreshTokens,setGoogleRefreshTokens] = useState("");
  const onSuccess = (res) => {
    // console.log(res.accessToken)
    var formData = new FormData()
    formData.append('access_token', res.accessToken)
    formData.append('provider', 'google-oauth2')

    dispatch(
      googlelogin(formData, (res) => {
        // console.log(res.data.refresh_token);
        console.log(res.data)
        setGoogleRefreshTokens(res.data.refresh_token);
    
        if ('data' in res) {
          localStorage.setItem('refreshtoken', res.data.refresh_token);
          const normaluserlogindetails = {
            email: res.data['email'],
            is_verified: true,
            user_type: 1,
            username: res.data['username'],
          };
    
          localStorage.setItem(
            'normaluserlogindetails',
            JSON.stringify(normaluserlogindetails)
          );
    
          var formDataAccess = new FormData();
          formDataAccess.append('refresh_token', res.data.refresh_token);
    
          dispatch(
            googleloginAccessToken(formDataAccess, (res) => {
              // console.log(res);
              // console.log("rsgsgersd");
    
              if ("data" in res) {
                localStorage.setItem('accesstoken', res.data.access_token);
              }
    
              if (res.status === 200) {
                navigate('/homepageuser');
              }
            })
          );
        }
      }),
    );
    
    // dispatch(
    //   googlelogin(formData, (res) => {
    //     console.log(res)
    //     // if ('data' in res) {
    //     //   localStorage.setItem('googleaccesstoken', res.data['token'])
    //     //   localStorage.setItem('accesstoken', res.data['token'])
    //     //   localStorage.setItem('refreshtoken', res.data['refresh_token'])
    //     //   const normaluserlogindetails = {
    //     //     email: res.data['email'],
    //     //     lastname: res.data['lastname'],
    //     //     firstname: res.data['givenName'],
    //     //     user_type: 1,
    //     //     image: res.data['imageUrl'],
    //     //     username: res.data['username'],
    //     //     useridfb: '',
    //     //     namefb: '',
    //     //   }

    // dispatch(
    //   googlelogin(formData, (res) => {
    //     console.log(res)
    //     // if ('data' in res) {
    //     //   localStorage.setItem('googleaccesstoken', res.data['token'])
    //     //   localStorage.setItem('accesstoken', res.data['token'])
    //     //   localStorage.setItem('refreshtoken', res.data['refresh_token'])
    //     //   const normaluserlogindetails = {
    //     //     email: res.data['email'],
    //     //     lastname: res.data['lastname'],
    //     //     firstname: res.data['givenName'],
    //     //     user_type: 1,
    //     //     image: res.data['imageUrl'],
    //     //     username: res.data['username'],
    //     //     useridfb: '',
    //     //     namefb: '',
    //     //   }

    //     //   localStorage.setItem(
    //     //     'normaluserlogindetails',
    //     //     JSON.stringify(normaluserlogindetails),
    //     //   )
    //     //   // console.log(normaluserlogindetails)
    //     //   if (res.status === 200 && res.data['success'] === 'True') {
    //     //     navigate('/homepageuser')
    //     //   }
    //     // }
    //   }),
    // )
  }
  // const { linkedInLogin } = useLinkedIn({
  //   clientId: linkedin_client_id,
  //   redirectUri: baseurl + '/linkedin',
  //   onSuccess: (code) => {
  //     // Change from `data.code` to `code`
  //     console.log(code)
  //   },
  //   // Change from `onFailure` to `onError`
  //   onError: (error) => {
  //     console.log(error)
  //   },
  // })
  const onFailure = (err) => {
    // sessionStorage.setItem('error', err)
    // console.log('failed:', err);
  }
  useEffect(() => {
    const initClient = () => {
      if (google_client_id !== '') {
        // gapi.client.init({
        //   clientId: google_client_id,
        //   scope: '',
        // })
        gapi.auth2.init({
          clientId: google_client_id,
          scope: '',
        })
      }
    }
    gapi.load('client:auth2', initClient)
  })

  const [statename, setName] = useState({
    password: '',
    userId: '',
    name: '',
    email: '',
    picture: '',
  })
  const [errors, setErrors] = useState({})
  const [data, setData] = useState({})
  const [picture, setPicture] = useState('')
  const [login, setLogin] = useState(false)
  sessionStorage.setItem('data', data)
  sessionStorage.setItem('picture', picture)
  sessionStorage.setItem('login', login)
  // console.log(data, picture, login, closeModal)
  const handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setName({ ...statename, [name]: value })
  }

  const microsoftlogin = () => {
    dispatch(
      microsoftlogingeturl((res) => {
        // console.log(res.data['login_url'])
        window.open(res.data['login_url'], '_self')
        const current_url = window.location.href()
        console.log(current_url)
      }),
    )
  }

  const responseFacebook = (response) => {
    console.log(response)
    setData(response)
    setPicture(response.picture.data.url)
    if (response.accessToken) {
      setLogin(true)
      const normaluserlogindetails = {
        useridfb: response.userID,
        namefb: response.name,
        user_type: 1,
      }
      localStorage.setItem(
        'normaluserlogindetails',
        JSON.stringify(normaluserlogindetails),
      )
      console.log(normaluserlogindetails)
      if (normaluserlogindetails !== '') {
        navigate('/homepageuser')
      }
    } else {
      setLogin(false)
    }
  }
  const notverifiedaccount = (items) => {
    const errors = {}
    if (items.loginerror !== '') {
      errors.loginerror = 'Your account is not verified successfully'
    }
    return errors
  }
  const signin = (ev) => {
    // ev.preventDefault()
    setErrors(validate(statename))
    var formData = new FormData()
    formData.append('email', statename.email)
    formData.append('username', statename.email)
    formData.append('password', statename.password)
    if (statename.password.length < 4) {
      validate(statename.password.length)
    }
    dispatch(
      signInUser(formData, (res) => {
        // console.log(res.data)
        if ('response' in res) {
          if (
            res.response.data['detail'] ===
              'No active account found with the given credentials' &&
            res.response.statusText === 'Unauthorized'
          ) {
            let loginerror =
              'No active account found with the given credentials'
            setErrors(credentialsvalidate(loginerror))
          }
        }
        // console.log(res)
        if ('data' in res) {
          localStorage.setItem('accesstoken', res.data['access'])
          localStorage.setItem('refreshtoken', res.data['refresh'])
        }
        if ('data' in res) {
          if (
            res.status === 200 &&
            res.data['access'] !== '' &&
            res.data['refresh'] !== ''
          ) {
            dispatch(
              getusertypewhilelogin(formData, (res) => {
                console.log(res.data)
                if (
                  res.data['email'] !== '' &&
                  res.data['user_type'] !== '' &&
                  res.data['username'] !== ''
                ) {
                  const normaluserlogindetails = {
                    email: res.data['email'],
                    username: res.data['username'],
                    user_type: res.data['user_type'],
                    userid: res.data['user_id'],
                    is_verified: res.data['is_verified'],
                    microsoft_name: '',
                    microsoft_username: '',
                    useridfb: '',
                    namefb: '',
                  }
                  localStorage.setItem(
                    'normaluserlogindetails',
                    JSON.stringify(normaluserlogindetails),
                  )
                  if (res.data['is_verified'] === true && res.status === 200) {  
                    setWelcomeModal(true);                            
                    navigate('/homepageuser')                  
                   

                  } else if (
                    res.data['is_verified'] === false &&
                    res.status === 200
                  ) {
                    let loginerror = 'Your account is not verified.'
                    setErrors(notverifiedaccount(loginerror))
                  }
                }
              }),
            )
          }
        }
      }),
    )
  }

  useEffect(() => {
    // console.log(errors)
    if (Object.keys(errors).length === 0) {
    }
  }, [errors])

  if (show === false) {
    errors.email = ''
    errors.loginerror = ''
    errors.password = ''
    statename.email = ''
    statename.password = ''
  }
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      return
    }
    setPasswordType('password')
  }
  const credentialsvalidate = (items) => {
    console.log(items)
    const errors = {}
    if (items.loginerror !== '') {
      errors.loginerror = 'Invalid Credentials.Please try again.'
    }
    return errors
  }
  const validate = (items) => {
    const errors = {}
    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // if (!items.email.match(mailformat)) {
    //   errors.email = 'Please enter valid email address'
    // }
    if (!items.email) {
      errors.email = 'Email cannot be blank'
    }

    if (!items.password) {
      errors.password = 'Password cannot be blank'
    } else if (items.password.length < 4) {
      errors.password = 'Password must be more than 4 characters'
    }
    return errors
  }

  // let normaluserlogindetails;
  useEffect(() => {
    const intervalId = setInterval(() => {
      const normaluserlogindetails = JSON.parse(
        localStorage.getItem('normaluserlogindetails')
      );
      // console.log(normaluserlogindetails);

      if (normaluserlogindetails !== null) {
        clearInterval(intervalId); // Cleanup the interval when navigating
        navigate('/homepageuser');
      }
    }, 1000); // 1000 milliseconds = 1 second

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []); 
  // 
  return (
    <div className="login-wrap">
      <SigninpageHeader />
      <div className="row m-0">
        <div className="col-sm-6 p-0">
          <img alt="" src="img/login-left-bg.png" width="100%" />
        </div>
        <div className="col-sm-3 mx-auto d-flex align-items-center">
          <div className="login-content">
            <h2>Hello ! Welocome back.</h2>
            <p>
              Log in with your data that you entered during your registration
            </p>
            <p style={{ color: 'red', textAlign: 'center' }}>
              <small>{errors.loginerror}</small>
            </p>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                required
                className="modalfields"
                value={statename.email}
                onChange={handleInputChange}
              />
              <p style={{ color: 'red' }}>
                <small>{errors.email}</small>
              </p>
            </div>
            <div className="form-group position-relative">
              <label>Password</label>{' '}
              <a href="#" onClick={openForgotModal} className="frgt-pswd">
                Forgot Password
              </a>
              <input
                type={passwordType}
                onChange={handleInputChange}
                value={statename.password}
                name="password"
                className="modalfields"
                placeholder="Password"
                required
              />
              {passwordType === 'password' ? (
                <>
                  <i
                    onClick={togglePassword}
                    className="fa fa-eye-slash"
                    style={{
                      backgroundColor: 'transparent',
                      top: '49px',
                      right: '15px',
                      position: 'absolute',
                    }}
                  ></i>
                </>
              ) : (
                <>
                  <i
                    onClick={togglePassword}
                    className="fa fa-eye"
                    style={{
                      backgroundColor: 'transparent',
                      top: '49px',
                      right: '15px',
                      position: 'absolute',
                    }}
                  ></i>
                </>
              )}
              <p style={{ color: 'red' }}>
                <small>{errors.password}</small>
              </p>
            </div>
            <button onClick={signin}>Sign in</button>
             {/* <button onClick={()=> {signin();openWelcomPage() }}>Sign in</button> */}

            <div className="divider">
              <hr />
              <p>OR</p>
            </div>
            <GoogleLogin
              clientId={google_client_id}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={false}
              className="social-btn google-sl"
            />
            {/* <button className="social-btn google-sl">
              <div className="scl-logo">
                <img src="img/google.svg" style={{ width: 25 }} />
              </div>
              <div>Sign with Google</div>
            </button> */}
            {/* <button className="social-btn facebook-sl">
              <div className="scl-logo">
                {' '}
                <img src="img/facebook.svg" style={{ width: 25 }} />
              </div>
              Sign with Facebook
            </button> */}
            <Linkedinlogin />
            <FacebookLogin
              appId={facebookappid}
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              textButton="&nbsp;&nbsp;Sign in with Facebook"
              cssClass="facebookbutton social-btn facebook-sl"
              icon={
                <i
                  className="fa fa-facebook"
                  style={{
                    float: 'left',
                    fontSize: '19px',
                    marginRight: '15px',
                  }}
                ></i>
              }
            />

            <button
              className="social-btn microsoft-sl"
              onClick={microsoftlogin}
            >
              <img
                src="img/microsoft.svg"
                style={{ width: 25, marginRight: '15px' }}
              />{' '}
              Sign with Microsoft
            </button>
            <p className="mt-3">
              Don't have an account? <Link to="/pricing">Sign Up</Link>
            </p>
          </div>
        </div>
        <Forgotpassword
          closeForgotModal={closeForgotModal}
          Forgotmodalshow={Forgotmodalshow}
        />
      </div>
      {/* <WelcomePage welcomeModal={welcomeModal}/> */}
    </div>
  )
}
export default Signinpage
