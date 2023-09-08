import React, { useState } from 'react'
import Landingpage from './LandingPages/LandingPage'
import Pricing from './LandingPages/Pricing'
import About from './LandingPages/About'
import Help from './LandingPages/Help'
import Profile from './Users/Homepage/SidebarAndMenus/Profie'
import Uploadfile from './Users/Homepage/SidebarAndMenus/UploadFile'
import History from './Users/Homepage/SidebarAndMenus/HistoryPage'
import Registration from './Users/Registration'
import Plans from './Users/Homepage/SidebarAndMenus/Plans'
import RegistrationSuccess from './Users/RegistrationSuccess'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DeletedFiles from './Users/Homepage/SidebarAndMenus/DeletedFiles'
import SharedFiles from './Users/Homepage/SidebarAndMenus/SharedFiles'
import SubscriptionSuccess from './Users/Homepage/Subscription_Success'
import SubscriptionFailed from './Users/Homepage/Subscription_Failure'
import ChangePassword from './Users/Homepage/SidebarAndMenus/ChangePassword'
import RegistrationEmailverify from './Users/EmailVerification'
import UpdateProfileVerification from './Users/UpdateProfileVerification'
import ResetPassword from './LandingPages/ResetPassword'
import StandardPlanSubscitionSuccess from './Users/Homepage/StandardPlanSubscription_Success'
import StandardPlanSubscitionFailed from './Users/Homepage/StandardPlanSubscition_Failure'
import Changepricing from './LandingPages/ChangePricing'
import TextFileRead from './LandingPages/TextFileRead'
import ProPlanSubscitionSuccess from './Users/Homepage/ProPlanSubscitionSuccess'
import ProPlanSubscitionFailed from './Users/Homepage/ProPlanSubscitionFailed'
import BasePlanSubscitionSuccessYearly from './Users/Homepage/BasePlanSubscitionSuccessYearly'
import StandardPlanYearlySubscitionSuccess from './Users/Homepage/StandardPlanYearlySubscitionSuccess'
import StandardPlanYearlySubscitionFailure from './Users/Homepage/StandardPlanYearlySubscitionFailure'
import BasePlanSubscitionFailureYearly from './Users/Homepage/BasePlanSubscitionFailureYearly'
import ProPlanSubscitionSuccessYearly from './Users/Homepage/ProPlanSubscitionSuccessYearly'
import ProPlanSubscitionFailureYearly from './Users/Homepage/ProPlanSubscitionFailureYearly'
import LinkedinRedirectPageForCodeState from './Users/LinkedinRedirectPageForCodeState'
import Signinpage from './Users/SignInPage'
import Homepageuser from './Users/Homepage/Homepage'
import BaseplanmonthlytoBaseplanyearly from './Users/Homepage/BaseplanmonthlytoBaseplanyearlySuccess'
import StandardplanmonthlytoStandardplanyearly from './Users/Homepage/StandardplanmonthlytoStandardplanyearly'
import ProplanmonthlytoProplanyearly from './Users/Homepage/ProplanmonthlytoProplanyearly'
import Cancelsubscription from './Users/Homepage/Cancelsubscription'
import PlanYearlytplanmonthly from './Users/Homepage/PlanYearlytoplanmonthly'
import Fileuploadsuccess from './Users/Homepage/SidebarAndMenus/FileUploadSuccess'
import BaseplanmonthlyToStandardplanmonthly from './Users/Homepage/BaseplanmonthlyToStandardplanmonthlySuccess'
import ChangeplanConfirmation from './Users/Homepage/ChangeplanConfirmation'
import BaseplanmonthlyToProplanmonthly from './Users/Homepage/BaseplanmonthlyToProplanmonthly'
import ChangeplanConfirmationYear from './Users/Homepage/ChangeplanConfirmationYearly'
import BaseplanyearlyToStandardplanyearly from './Users/Homepage/BaseplanyearlyToStandardplanyearlySuccess'
import BaseplanyearlyToProplanyearly from './Users/Homepage/BaseplanyearlyToProplanyearlySuccess'
import StandardPlanChangePage from './Users/Homepage/StandardPlanChangePage'
import Notifications from './Users/Homepage/Notifications'
import CancelPlanModal from './Users/Homepage/CancelPlanModal'

function App() {
  const [welcomeModal, setWelcomeModal] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/changepricing" element={<Changepricing />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/help" element={<Help />} />
          <Route path="/userprofile" element={<Profile />} />
          <Route path="/uploadfile" element={<Uploadfile />} />
          <Route path="/history" element={<History />} />
          <Route path="/plans" element={<Plans />} />
          <Route
            path="/baseplanmonthlytobaseplanyearly"
            element={<BaseplanmonthlytoBaseplanyearly />}
          />
          <Route
            path="planyearlytoplanmonthly"
            element={<PlanYearlytplanmonthly />}
          />
          <Route
            path="/registrationsuccess"
            element={<RegistrationSuccess />}
          />
          <Route
            path="/baseplanmonthlysubscriptioncreatesuccess"
            element={<SubscriptionSuccess />}
          />
          <Route
            path="/baseplansubsciptionfailed"
            element={<SubscriptionFailed />}
          />
          {/* <Route path="/convertedfiles" element={<ConvertedFiles />} /> */}
          <Route path="/deletedfiles" element={<DeletedFiles />} />
          <Route path="/sharedfiles" element={<SharedFiles />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route
            path="/emailVerification"
            element={<RegistrationEmailverify />}
          />
          <Route
            path="/updateuserprofileverification"
            element={<UpdateProfileVerification />}
          />
          <Route
            path="/profile_backend/password-reset/:id/:id"
            element={<ResetPassword />}
          />
          <Route
            path="/standardplanmonthlysubscriptionsuccess"
            element={<StandardPlanSubscitionSuccess />}
          />
          <Route
            path="/standardplanyearlysubscriptionsuccess"
            element={<StandardPlanYearlySubscitionSuccess />}
          />
          <Route
            path="/standardplanyearlysubscriptionfailure"
            element={<StandardPlanYearlySubscitionFailure />}
          />
          <Route
            path="/standardplansubsciptionfailed"
            element={<StandardPlanSubscitionFailed />}
          />
          <Route
            path="/proplanmonthlysubscriptioncreatesuccess"
            element={<ProPlanSubscitionSuccess />}
          />
          <Route
            path="/proplansubsciptionfailed"
            element={<ProPlanSubscitionFailed />}
          />
          <Route
            path="/.well-known/pki-validation/78ECADAB77845F03DDE240F57663B246.txt"
            element={<TextFileRead />}
          />
          <Route
            path="/baseplanyearlysubscriptioncreatesuccess"
            element={<BasePlanSubscitionSuccessYearly />}
          />
          <Route
            path="/baseplanyearlysubscriptioncreatefailure"
            element={<BasePlanSubscitionFailureYearly />}
          />
          <Route
            path="/proplanyearlysubscriptioncreatesuccess"
            element={<ProPlanSubscitionSuccessYearly />}
          />
          <Route
            path="/proplanyearlysubscriptioncreatefailure"
            element={<ProPlanSubscitionFailureYearly />}
          />
          <Route
            path="/linkedin"
            element={<LinkedinRedirectPageForCodeState />}
          />
          <Route
            path="/homepageuser"
            element={
              <Homepageuser
                welcomeModal={welcomeModal}
                setWelcomeModal={setWelcomeModal}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Signinpage
                welcomeModal={welcomeModal}
                setWelcomeModal={setWelcomeModal}
              />
            }
          />
          <Route
            path="/standardplanmonthlytostandardplanyearly"
            element={<StandardplanmonthlytoStandardplanyearly />}
          />
          <Route
            path="/proplanmonthlytoproplanyearly"
            element={<ProplanmonthlytoProplanyearly />}
          />
          <Route
            path="/standardplanchangepage"
            element={<StandardPlanChangePage />}
          />

          <Route path="/fileuploadsuccess" element={<Fileuploadsuccess />} />
          <Route path="/cancelplanpage" element={<CancelPlanModal />} />
          <Route path="/cancelsubscription" element={<Cancelsubscription />} />
          <Route
            path="/changeplanconfirmation"
            element={<ChangeplanConfirmation />}
          />
          <Route
            path="/baseplanmonthtostandardplanmonthsuccess"
            element={<BaseplanmonthlyToStandardplanmonthly />}
          />
          <Route
            path="/baseplanmonthtoproplanmonthsuccess"
            element={<BaseplanmonthlyToProplanmonthly />}
          />
          <Route
            path="/changeconfirmationyearly"
            element={<ChangeplanConfirmationYear />}
          />
          <Route
            path="/baseplanyeartostandardplanyear"
            element={<BaseplanyearlyToStandardplanyearly />}
          />
          <Route
            path="/baseplanyeartoproplanyearsuccess"
            element={<BaseplanyearlyToProplanyearly />}
          />
          <Route path="/notificationpage" element={<Notifications />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
