import { updateRedux } from '../Reducer/CommonReducer'
import axios from '../../Users/utils/AxioInterceptor'
import axiosnormal from 'axios'

// let access_and_refresh_token = JSON.parse(
//   localStorage.getItem('access_and_refresh_token'),
// )
const baseurl = process.env.REACT_APP_API_BASE_URL
const linkedinbaseurl = process.env.REACT_APP_LINKEDIN_BASE_URL

// User registration
export const signUpUser = (body, callback) => (dispatch) => {
  axios
    .post(baseurl + '/account_backend/register/', body)
    .then((response) => {
      console.log('register sign', response)
      dispatch(
        updateRedux({
          key: 'registraionDetails',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {})
}

//api for normal login//
export const signInUser = (body, callback) => (dispatch) => {
  axios
    .post(baseurl + '/token/', body)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'loginDetails',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//api for google social login
export const googlelogin = (body, callback) => (dispatch) => {
  axios
    .post(baseurl + '/social_login/oauth/login/', body)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'googleloginDetails',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//api for upload file
export const uploadFile = (body, callback) => (dispatch) => {
  axios
    .post(baseurl + '/fileupload_backend/Upload/', body)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'fileUpload',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//api for get user type while login
export const getusertypewhilelogin = (body, callback) => (dispatch) => {
  axios
    .post(baseurl + '/account_backend/list-user-details/', body)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'registraionDetails',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {})
}

//base plan monthly subscription
export const monthlybaseplanstripepage = (callback) => (dispatch) => {
  axios
    .get(baseurl + '/membership_api/base-plan-create-monthly-checkout-page/')
    .then((response) => {
      console.log('baseplan checkout', response)
      dispatch(
        updateRedux({
          key: 'monthlybaseplanstripepage',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//base plan yearly subscription
export const yearlybaseplanstripepage = (callback) => (dispatch) => {
  axios
    .get(baseurl + '/membership_api/base-plan-create-yearly-checkout-page/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'yearlybaseplanstripepage',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//standard plan yearly subscription
export const yearlystandardplanstripepage = (callback) => (dispatch) => {
  axios
    .get(baseurl + '/membership_api/standard-plan-yearly-checkout-page/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'yearlystandardplanstripepage',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//standard plan yearly subscription
export const yearlyproplanstripepage = (callback) => (dispatch) => {
  axios
    .get(baseurl + '/membership_api/pro-plan-create-yearly-checkout-page/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'yearlyproplanstripepage',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

// microsoft login get url for code and state
export const microsoftlogingeturl = (callback) => (dispatch) => {
  axiosnormal
    .get(baseurl + '/microsoft/msal/login_urls/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'microsoftlogingeturl',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//microsoft login
export const microsoftloginaccesstoken = (body, callback) => (dispatch) => {
  axiosnormal
    .post(baseurl + '/microsoft/msal/login_with_code/', body)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'microsoftloginDetails',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//linkedin login
export const linkedinloginaccesstoken = (body, callback) => (dispatch) => {
  axiosnormal
    .get(linkedinbaseurl + '/oauth/v2/accessToken/', body)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'linkedinloginDetails',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

// change password
export const changePassword = (payload, callback) => {
  return (dispatch) => {
    axios
      .put(baseurl + `/profile_backend/changepassword/`, payload)
      .then((response) => {
        dispatch(
          updateRedux({
            key: 'changepassword',
            result: response.data,
          }),
        )
        callback(response, null)
      })
      .catch(function (err) {
        callback(null, err?.response?.data)
      })
  }
}

// get userdetails for update profile
export const getuserdetailsforupdate = (callback) => {
  return (dispatch) => {
    axios
      .get(baseurl + `/profile_backend/userprofile/`)
      .then((response) => {
        dispatch(
          updateRedux({
            key: 'getuserdetailsforupdate',
            result: response.data,
          }),
        )
        callback(response, null)
      })
      .catch(function (err) {
        callback(null, err?.response?.data)
      })
  }
}

//email verification after registration
export const emailverification = (body, callback) => (dispatch) => {
  let obj = { token: body }
  axios
    .post(baseurl + '/account_backend/verify_email/', obj)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'emailverification',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {})
}

// update profile
export const updateuserprofile = (payload, callback) => {
  return (dispatch) => {
    axios
      .put(baseurl + `/profile_backend/userprofile/`, payload)
      .then((response) => {
        dispatch(
          updateRedux({
            key: 'updateuserprofile',
            result: response.data,
          }),
        )
        callback(response, null)
      })
      .catch(function (err) {
        callback(null, err?.response?.data)
      })
  }
}

//update user profile image
export const updateuserprofileimage = (payload, callback) => {
  return (dispatch) => {
    axios
      .put(baseurl + `/profile_backend/userprofile/`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        dispatch(
          updateRedux({
            key: 'updateuserprofileimage',
            result: response.data,
          }),
        )
        callback(response, null)
      })
      .catch(function (err) {
        callback(null, err?.response?.data)
      })
  }
}

//user profile updation email verification
export const userprofileupdationverification = (body, callback) => (
  dispatch,
) => {
  let obj = { token: body }
  axios
    .post(baseurl + '/profile_backend/verify-email/', obj)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'userprofileupdationverification',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {})
}

//base plan monthly session id
export const baseplanmonthlysessionid = (body, callback) => (dispatch) => {
  axios
    .post(
      baseurl + '/membership_api/base-plan-subscription-monthly-creation-view/',
      body,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'baseplanmonthlysessionid',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//pro plan yearly subscription
export const proplanyearlysessionid = (body, callback) => (dispatch) => {
  axios
    .post(
      baseurl + '/membership_api/pro-plan-subscription-yearly-creation-view/',
      body,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'proplanyearlysessionid',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//forgot password
export const forgotpasswordforuser = (body, callback) => (dispatch) => {
  axios
    .post(baseurl + '/profile_backend/password_reset/', body)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'forgotpasswordforuser',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//reset password
export const resetpasswordforuser = (body, callback) => (dispatch) => {
  axios
    .patch(baseurl + '/profile_backend/password_reset/', body)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'resetpasswordforuser',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//standard plan monthly subscription
export const monthlystandardplanstripepage = (callback) => (dispatch) => {
  axios
    .get(baseurl + '/membership_api/standard-plan-monthly-checkout-page/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'monthlystandardplanstripepage',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

// pro plan monthly subscription
export const monthlyproplanstripepage = (callback) => (dispatch) => {
  axios
    .get(baseurl + '/membership_api/pro-plan-create-monthly-checkout-page/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'monthlyproplanstripepage',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//session id is passed to standard plan
export const standardplanmonthlysessionid = (body, callback) => (dispatch) => {
  axios
    .post(
      baseurl +
        '/membership_api/standard-plan-monthly-subscription-creation-view/',
      body,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'standardplanmonthlysessionid',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//session id is passed to standard plan yearly
export const standardplanyearlysessionid = (body, callback) => (dispatch) => {
  axios
    .post(
      baseurl +
        '/membership_api/standard-plan-yearly-subscription-creation-view/',
      body,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'standardplanyearlysessionid',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//Session id is passed to pro plan monthly
export const proplanmonthlysessionid = (body, callback) => (dispatch) => {
  axios
    .post(
      baseurl + '/membership_api/pro-plan-subscription-monthly-creation-view/',
      body,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'proplanmonthlysessionid',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//Session id is passing to base plan yearly
export const baseplanyearlylysessionid = (body, callback) => (dispatch) => {
  axios
    .post(
      baseurl + '/membership_api/base-plan-subscription-yearly-creation-view/',
      body,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'baseplanyearlylysessionid',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//google login userdetails
// get userdetails for update profile page
export const getgoogleuserdetailsforupdate = (callback) => {
  return (dispatch) => {
    axios
      .get(baseurl + `/account_backend/user_data/`)
      .then((response) => {
        dispatch(
          updateRedux({
            key: 'getgoogleuserdetailsforupdate',
            result: response.data,
          }),
        )
        callback(response, null)
      })
      .catch(function (err) {
        callback(null, err?.response?.data)
      })
  }
}
//upgrade base plan monthly to base plan yearly subscription
export const upgrademonthlybaseplantobaseplanyearlystripepage = (callback) => (
  dispatch,
) => {
  axios
    .get(
      baseurl + '/membership_api/base-plan-subscription-upgrade-invoice-page/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'monthlybaseplantoyearlystripepage',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}
//upgrade base plan monthly to base plan yearly subscription creation
export const upgrademonthlybaseplantobaseplanyearlycreation = (callback) => (
  dispatch,
) => {
  axios
    .get(
      baseurl +
        '/membership_api/base-plan-subscription-monthly-to-yearly-subscription-upgrade-details/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'monthlybaseplantoyearlycreationview',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}
//upgrade standard plan monthly to standard plan yearly subscription
export const upgrademonthlystandardplantostandardplanyearlystripepage = (
  callback,
) => (dispatch) => {
  axios
    .get(
      baseurl +
        '/membership_api/standard-plan-subscription-upgrade-invoice-page/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'monthlystandardplantoyearlystripepage',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}
//upgrade standard plan monthly to standard plan yearly subscription creation
export const upgrademonthlystandardplantostandardplanyearlycreation = (
  callback,
) => (dispatch) => {
  axios
    .get(
      baseurl +
        '/membership_api/standard-plan-subscription-monthly-to-yearly-subscription-upgrade-details/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'monthlystandardplantoyearlycreationview',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}
//upgrade pro plan monthly to standard plan yearly subscription
export const upgrademonthlyproplantoproplanyearlystripepage = (callback) => (
  dispatch,
) => {
  axios
    .get(
      baseurl + '/membership_api/pro-plan-subscription-upgrade-invoice-page/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'monthlyproplantoyearlystripepage',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}
//upgrade pro plan monthly to pro plan yearly subscription creation
export const upgrademonthlyproplantoproplanyearlycreation = (callback) => (
  dispatch,
) => {
  axios
    .get(
      baseurl +
        '/membership_api/pro-plan-subscription-monthly-to-yearly-subscription-upgrade-details/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'monthlyproplantoyearlycreationview',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}
//upgrade base plan monthly to standard plan monthly subscription
export const changemonthlybaseplantostandardmonthly = (callback) => (
  dispatch,
) => {
  axios
    .get(
      baseurl +
        '/membership_api/base-plan-monthly-subscription-upgrade-to-standard-plan-monthly-view/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'changemonthlybaseplantostandardmonthly',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//view base plan monthly upgrade details
export const viewbaseplanmonthlyupgradedetails = (callback) => (dispatch) => {
  axios
    .get(
      baseurl +
        '/membership_api/base-plan-subscription-monthly-to-yearly-subscription-upgrade-details/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'viewupgradedetails',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//view base plan monthly upgrade details alert
export const viewbaseplanmonthlyupgradedetailsalert = (callback) => (
  dispatch,
) => {
  axios
    .get(
      baseurl +
        '/membership_api/base-plan-subscription-invoice-page-upgrade-alert/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'viewupgradedetailsalert',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//view standard monthly upgrade details
export const viewupgradedetailsstanadardplanmonthly = (callback) => (
  dispatch,
) => {
  axios
    .get(
      baseurl +
        '/membership_api/standard-plan-subscription-monthly-to-yearly-subscription-upgrade-details/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'viewupgradedetailsstanadardplanmonthly',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//view standard plan monthly upgrade details alert
export const viewstandardplanmonthlyupgradedetailsalert = (callback) => (
  dispatch,
) => {
  axios
    .get(
      baseurl +
        '/membership_api/standard-plan-subscription-invoice-page-upgrade-alert/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'viewstandardplanmonthlyupgradedetailsalert',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//view pro monthly upgrade details
export const viewproplanmonthlyupgradedetails = (callback) => (dispatch) => {
  axios
    .get(
      baseurl +
        '/membership_api/pro-plan-subscription-monthly-to-yearly-subscription-upgrade-details/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'viewproplanmonthlyupgradedetails',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//view pro monthly upgrade all details
export const viewproplanmonthlyupgradealldetails = (callback) => (dispatch) => {
  axios
    .get(baseurl + '/membership_api/pro-plan-upgraded-details/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'viewproplanmonthlyupgradealldetails',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//view pro plan monthly upgrade details alert
export const viewproplanmonthlyupgradedetailsalert = (callback) => (
  dispatch,
) => {
  axios
    .get(
      baseurl +
        '/membership_api/pro-plan-subscription-invoice-page-upgrade-alert/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'viewproplanmonthlyupgradedetailsalert',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//view base plan monthly upgrade all  details
export const viewbaseplanmonthlyviewupgradedetails = (callback) => (
  dispatch,
) => {
  axios
    .get(baseurl + '/membership_api/base-plan-upgraded-details/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'viewbaseplanmonthlyviewupgradedetails',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//view current plan  details
export const viewcurrentplanadedetails = (callback) => (dispatch) => {
  axios
    .get(baseurl + '/membership_api/list-subscription-view/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'viewcurrentplanadedetails',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//view all details of satndard upgraded plan
export const viewallstandardplanupgradedetails = (callback) => (dispatch) => {
  axios
    .get(baseurl + '/membership_api/subscription-cancel-view/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'cancelselectedplan',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//cancel selected plan
export const cancelselectedplan = (callback) => (dispatch) => {
  axios
    .get(baseurl + '/membership_api/subscription-cancel-view/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'cancelselectedplan',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//Degrade base plan yearly
export const degradebaseplanyearly = (callback) => (dispatch) => {
  axios
    .get(baseurl + '/membership_api/base-plan-subscription-downgrade-view/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'degradebaseplanyearly',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//change base plan monthly to standard plan monthly
export const baseplanmonthlytostandardplanmonthly = (callback) => (
  dispatch,
) => {
  axios
    .get(
      baseurl +
        '/membership_api/base-plan-monthly-subscription-changes-to-standard-plan-monthly-view/',
    )
    .then((response) => {
      console.log('Api', response)
      dispatch(
        updateRedux({
          key: 'baseplanmonthlytostandardplanmonthly',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

// change base-plan-monthly to pro-plan-monthly

export const baseplanmonthlytoproplanmonthly = (callback) => (dispatch) => {
  axios
    .get(
      baseurl +
        '/membership_api/base-plan-monthly-subscription-changes-to-pro-plan-monthly-view/',
    )
    .then((response) => {
      //  console.log('data',response);
      dispatch(
        updateRedux({
          key: 'baseplanmonthlytoproplanmonthly',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}
//change standard plan monthly to pro plan monthly
export const standardplanmonthlytoproplanmonthly = (callback) => (dispatch) => {
  axios
    .get(
      baseurl +
        '/membership_api/standard-plan-monthly-subscription-changes-to-pro-plan-monthly-view/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'standardplanmonthlytoproplanmonthly',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

// change base plan year to standard plan year

export const baseplanyearlytostandardplanyearly = (callback) => (dispatch) => {
  axios
    .get(
      baseurl +
        '/membership_api/base-plan-yearly-subscription-changes-to-standard-plan-yearly-view/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'baseplanyearlytostandardplanyearly',
          result: response.date,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

// change base plan year to pro plan year
export const baseplanyearlytoproplanyearly = (callback) => (dispatch) => {
  axios
    .get(
      baseurl +
        '/membership_api/base-plan-yearly-subscription-changes-to-pro-plan-yearly-view/',
    )
    .then((response) => {
      console.log(response)
      dispatch(
        updateRedux({
          key: 'baseplanyearlytoproplanyearly',
          result: response.date,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//change standard plan yearly to pro plan yearly
export const standardplanyearlytoproplanyearly = (callback) => (dispatch) => {
  axios
    .get(
      baseurl +
        '/membership_api/standard-plan-yearly-subscription-changes-to-pro-plan-yearly-view/',
    )
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'standardplanyearlytoproplanyearly',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//change base plan monthly to standard plan monthly
export const degradebaseplanyearlytobaseplanmonthly = (callback) => (
  dispatch,
) => {
  axios
    .get(baseurl + '/membership_api/base-plan-subscription-downgrade-view/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'degradebaseplanyearlytobaseplanmonthly',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//Degrade standard plan yearly
export const degradestandardplanyearlytobaseplanmonthly = (callback) => (
  dispatch,
) => {
  axios
    .get(baseurl + '/membership_api/standard-plan-subscription-downgrade-view/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'degradestandardplanyearlytobaseplanmonthly',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//Degrade pro plan yearly
export const degradeproplanyearlytobaseplanmonthly = (callback) => (
  dispatch,
) => {
  axios
    .get(baseurl + '/membership_api/pro-plan-subscription-downgrade-view/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'degradeproplanyearlytobaseplanmonthly',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//api for upload file//
export const uploadfile = (body, callback) => (dispatch) => {
  axios
    .post(baseurl + '/fileupload_backend/upload_pdfs/', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'uploadfile',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

// notification api for subscription activation

export const subscriptionactive = (callback) => (dispatch) => {
  axios
    .get(baseurl + '/notifications/notification-subscription-activated/')
    .then((response) => {
      console.log(response,'subscription notification');
      dispatch(
        updateRedux({
          key: 'subscriptionactive',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}
//converted files list api
export const convertedfileslist = (callback) => (dispatch) => {
  axios
    .get(baseurl + '/ai_integration/converted_files_list/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'convertedfileslist',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

// api for notification when storage is 90 %
export const storageRunningOut = (callback) => (dispatch) => {
  axios
    .get(baseurl + '/notifications/notification-storage-space/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'storageRunningOut',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}


// user profile delete api

export const userprofiledelete = (callback) => (dispatch) => {
  axios
    .delete(baseurl + '/backend_converted_files/user-account-deletion/')
    .then((response) => {
      console.log('delete',response);
      dispatch(
        updateRedux({
          key: 'userprofiledelete',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

// List File details

export const fileList = (callback) => (dispatch) => {
  axios
    .get(baseurl + '/fileupload_backend/list_uploaded_file/')
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'filelist',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

// Delete file

export const deleteFile = (id,callback) => (dispatch) => {
  axios
    .delete(baseurl + `/fileupload_backend/delete_file/${id}/`)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'deletefile',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}
// Restore File

export const restoreFile = (id,callback) => (dispatch) => {
  axios
    .get(baseurl + `/backend_converted_files/restore-files/${id}/`)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'restorefile',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

// Delete File

export const ConfirmDeleteFile = (id,callback) => (dispatch) => {
  axios
    .delete(baseurl + `/backend_converted_files/file-permanently-deletion-confirmation-view/${id}/`)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'confirmdeletefile',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

// Refresh Token For google social login

export const googleloginAccessToken = (body, callback) => (dispatch) => {
  axios
    .post(baseurl + '/social_login/token/refresh/', body)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'googleloginaccesstoken',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//
// converted file restore api

export const convertedFilerestore = (id,callback) => (dispatch) => {
  axios
    .get(baseurl + `/backend_converted_files/file-converted-restore-view/${id}/`)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'convertedfilerestore',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}
//
// converted file deletion api

export const convertedFileDeletion = (id,callback) => (dispatch) => {
  axios
    .delete(baseurl + `/backend_converted_files/converted-file-delete/${id}/`)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'convertedfiledeletion',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}

//

// converted file confirm deletion

export const convertedFileConfirmDeletion = (id,callback) => (dispatch) => {
  axios
    .delete(baseurl + `/backend_converted_files/file-converted-permanently-deletion-confirmation-view/${id}/`)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'convertedfileconfirmdeletion',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}
// Linkedn User Details api

export const linkednUserDetails = (body,callback) => (dispatch) => {
  axios
    .post(baseurl + `/profile_backend/oauth/acesstoken/linkedin/`,body)
    .then((response) => {
      dispatch(
        updateRedux({
          key: 'linkednuserdetails',
          result: response.data,
        }),
      )
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}