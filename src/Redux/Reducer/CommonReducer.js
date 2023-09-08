import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  registrationDeatils: {},
  loginDetails: {},
  fileUpload: {},
  googleloginDetails: {},
  getusertypewhilelogin: {},
  monthlybaseplanstripepage: {},
  microsoftlogingeturl: {},
  microsoftloginDetails: {},
  changePassword: {},
  getuserdetailsforupdate: {},
  emailverification: {},
  updateuserprofile: {},
  updateuserprofileimage: {},
  userprofileupdationverification: {},
  baseplanmonthlysessionid: {},
  forgotpasswordforuser: {},
  resetpasswordforuser: {},
  monthlystandardplanstripepage: {},
  standardplanmonthlysessionid: {},
  getgoogleuserdetailsforupdate: {},
  monthlyproplanstripepage: {},
  yearlybaseplanstripepage: {},
  proplanmonthlysessionid: {},
  yearlystandardplanstripepage: {},
  standardplanyearlysessionid: {},
  yearlyproplanstripepage: {},
  proplanyearlysessionid: {},
  linkedinloginDetails: {},
  monthlybaseplantoyearlystripepage: {},
  monthlybaseplantoyearlycreationview: {},
  monthlystandardplantoyearlystripepage: {},
  monthlystandardplantoyearlycreationview: {},
  changemonthlybaseplantostandardmonthly: {},
  viewupgradedetails: {},
  viewupgradedetailsalert: {},
  viewupgradedetailsstanadardplanmonthly: {},
  viewstandardplanmonthlyupgradedetailsalert: {},
  viewproplanmonthlyupgradedetails: {},
  viewproplanmonthlyupgradedetailsalert: {},
  viewbaseplanmonthlyviewupgradedetails: {},
  viewcurrentplanadedetails: {},
  cancelselectedplan: {},
  viewstandardplanmonthlyviewupgradedetails: {},
  viewproplanmonthlyupgradealldetails: {},
  degradebaseplanyearlytobaseplanmonthly: {},
  degradestandardplanyearlytobaseplanmonthly: {},
  baseplanmonthlytostandardplanmonthly: {},
  baseplanmonthlytoproplanmonthly: {},
  baseplanyearlytostandardplanyearly: {},
  baseplanyearlytoproplanyearly: {},
  uploadfile: {},
  subscriptionactive:{},
  userprofiledelete:{},
  convertedfileslist:{},
  storageRunningOut:{},
  filelist:{},
  deletefile:{},
  restorefile:{},
  confirmdeletefile:{},
  googleloginaccesstoken:{},
  convertedfiledeletion:{},
  convertedfileconfirmdeletion:{},
  convertedfilerestore:{},
  linkednuserdetails:{},
  
};

const registerSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateRedux: (state, data) => {
      state[data.payload.key] = data.payload.result
    },
  },
})

export const { updateRedux } = registerSlice.actions
export const registerDetails = (state) => state.user.registrationDeatils
export const userloginDetails = (state) => state.user.loginDetails
export const fileUpload = (state) => state.user.fileUpload
export const googleloginDetails = (state) => state.user.googleloginDetails
export const getusertypewhilelogin = (state) => state.user.getusertypewhilelogin
export const monthlybaseplanstripepage = (state) =>
  state.user.monthlybaseplanstripepage
export const microsoftlogingeturl = (state) => state.user.microsoftlogingeturl
export const microsoftloginDetails = (state) => state.user.microsoftloginDetails
export const changePassword = (state) => state.user.changePassword
export const getuserdetailsforupdate = (state) =>
  state.user.getuserdetailsforupdate
export const emailverification = (state) => state.user.emailverification
export const updateuserprofile = (state) => state.user.updateuserprofile
export const updateuserprofileimage = (state) =>
  state.user.updateuserprofileimage
export const userprofileupdationverification = (state) =>
  state.user.userprofileupdationverification
export const baseplanmonthlysessionid = (state) =>
  state.user.baseplanmonthlysessionid
export const forgotpasswordforuser = (state) => state.user.forgotpasswordforuser
export const resetpasswordforuser = (state) => state.user.resetpasswordforuser
export const monthlyproplanstripepage = (state) =>
  state.user.monthlyproplanstripepage
export const monthlystandardplanstripepage = (state) =>
  state.user.monthlystandardplanstripepage
export const standardplanmonthlysessionid = (state) =>
  state.user.standardplanmonthlysessionid
export const getgoogleuserdetailsforupdate = (state) =>
  state.user.getgoogleuserdetailsforupdate
export const yearlybaseplanstripepage = (state) =>
  state.user.yearlybaseplanstripepage
export const proplanmonthlysessionid = (state) =>
  state.user.proplanmonthlysessionid
export const baseplanyearlylysessionid = (state) =>
  state.user.baseplanyearlylysessionid
export const yearlystandardplanstripepage = (state) =>
  state.user.yearlystandardplanstripepage
export const standardplanyearlysessionid = (state) =>
  state.user.standardplanyearlysessionid
export const yearlyproplanstripepage = (state) =>
  state.user.yearlyproplanstripepage
export const proplanyearlysessionid = (state) =>
  state.user.proplanyearlysessionid
export const monthlybaseplantoyearlystripepage = (state) =>
  state.user.monthlybaseplantoyearlystripepage
export const monthlybaseplantoyearlycreationview = (state) =>
  state.user.monthlybaseplantoyearlycreationview
export const monthlystandardplantoyearlystripepage = (state) =>
  state.user.monthlystandardplantoyearlystripepage
export const monthlystandardplantoyearlycreationview = (state) =>
  state.user.monthlystandardplantoyearlycreationview
export const monthlyproplantoyearlystripepage = (state) =>
  state.user.monthlyproplantoyearlystripepage
export const monthlyproplantoyearlycreationview = (state) =>
  state.user.monthlyproplantoyearlycreationview
export const changemonthlybaseplantostandardmonthly = (state) =>
  state.user.changemonthlybaseplantostandardmonthly
export const viewupgradedetailsalert = (state) =>
  state.user.viewupgradedetailsalert
export const viewupgradedetailsstanadardplanmonthly = (state) =>
  state.user.viewupgradedetailsstanadardplanmonthly
export const viewstandardplanmonthlyupgradedetailsalert = (state) =>
  state.user.viewstandardplanmonthlyupgradedetailsalert
export const viewproplanmonthlyupgradedetails = (state) =>
  state.user.viewproplanmonthlyupgradedetails
export const viewproplanmonthlyupgradedetailsalert = (state) =>
  state.user.viewproplanmonthlyupgradedetailsalert
export const viewbaseplanmonthlyviewupgradedetails = (state) =>
  state.user.viewbaseplanmonthlyviewupgradedetails
export const viewcurrentplanadedetails = (state) =>
  state.user.viewcurrentplanadedetails
export const viewstandardplanmonthlyviewupgradedetails = (state) =>
  state.user.viewstandardplanmonthlyviewupgradedetails
export const viewproplanmonthlyupgradealldetails = (state) =>
  state.user.viewproplanmonthlyupgradealldetails
export const baseplanmonthlytostandardplanmonthly = (state) =>
  state.user.baseplanmonthlytostandardplanmonthly
export const baseplanmonthlytoproplanmonthly = (state) =>
  state.user.baseplanmonthlytoproplanmonthly
export const baseplanyearlytostandardplanyearly = (state) =>
  state.user.baseplanyearlytostandardplanyearly
export const baseplanyearlytoproplanyearly = (state) =>
  state.user.baseplanyearlytoproplanyearly
export const cancelselectedplan = (state) => state.user.cancelselectedplan
export const degradebaseplanyearlytobaseplanmonthly = (state) =>
  state.user.degradebaseplanyearlytobaseplanmonthly
export const degradestandardplanyearlytobaseplanmonthly = (state) =>
  state.user.degradestandardplanyearlytobaseplanmonthly
export const degradeproplanyearlytobaseplanmonthly = (state) =>
  state.user.degradeproplanyearlytobaseplanmonthly;
export const uploadfile = (state) => state.user.uploadfile;
export const viewupgradedetails = (state) => state.user.viewupgradedetails;
export const linkedinloginDetails = (state) => state.user.linkedinloginDetails;
export const subscriptionactive = (state) => state.user.subscriptionactive;
export const userprofiledelete = (state) => state.user.userprofiledelete;

export const convertedfileslist = (state)=> state.user.convertedfileslist;
export const filelist = (state)=> state.user.filelist;
export const deletefile = (state)=> state.user.deletefile;
export const restorefile = (state)=>state.user.restorefile;
export const confirmdeletefile = (state)=>state.user.confirmdeletefile;
export const googleloginaccesstoken = (state)=>state.user.googleloginaccesstoken;
export const convertedfiledeletion = (state)=>state.user.convertedfiledeletion;
export const convertedfileconfirmdeletion = (state)=>state.user.convertedfileconfirmdeletion;
export const convertedfilerestore = (state)=>state.user.convertedfilerestore;
export const linkednuserdetails = (state)=>state.user.linkednuserdetails;
export default registerSlice.reducer

