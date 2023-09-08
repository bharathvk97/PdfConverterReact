import Button from 'react-bootstrap/Button'
import Header from './Header'
import { useState } from 'react'
import ContactSupport from './ContactSupport'
import SuggestionModal from './SuggestionModal'
function Help() {

  const [contact,setContact] = useState(false)
  const [suggest,setSuggest] = useState(false)

const contactSupport = (e) =>{
  e.preventDefault()
  setContact(true)

}
const suggestions = () => {
  setSuggest(true)
}

  return (
    <div>
    <div className="landing-wrap">
      <Header />

      <div className="help-section">
        <h1 style={{ color: 'white', fontSize: '70px', marginTop: '41px' }}>
          Helpdesk
        </h1>
        <p style={{ color: 'white', textAlign: 'center' }}>
          Here you find all solutions to the most common issues. And of course,
          you can also submit a support request or ask for a new feature!
        </p>
      </div>
      <h3
        style={{
          color: 'white',
          textAlign: 'center',
          marginTop: '30px',
          textTransform: 'uppercase',
        }}
      >
        Account
      </h3>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible1" className="toggle" type="checkbox" />
          <label htmlFor="collapsible1" className="lbl-toggle">
            How to register a new account?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                <b> You can go to the registration page in 2 ways.</b>
              </p>
              <br></br>
              <p style={{ color: 'white' }}>
                {' '}
                <b>1. Click 'Sign In' button -> click 'Sign Up' link.</b>
              </p>
              <p style={{ color: 'white' }}>
                {' '}
                <b>2. Click 'Pricing' menu -> click 'Sign Up' button.</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="wrap-collabsible">
          <input id="collapsible2" className="toggle" type="checkbox" />
          <label htmlFor="collapsible2" className="lbl-toggle">
            How do i change my password?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>1. Login to the account first.</b>
              </p>
              <p style={{ color: 'white' }}>
                <b>2. In the sidebar click 'Account' menu.</b>
              </p>
              <p style={{ color: 'white' }}>
                <b>3. Click 'Change Password' button.</b>
              </p>
              <p style={{ color: 'white' }}>
                <b>
                  4. Enter old password and new password, then click 'Update
                  Password' button.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="wrap-collabsible">
          <input id="collapsible3" className="toggle" type="checkbox" />
          <label htmlFor="collapsible3" className="lbl-toggle">
            How do i close my account?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>1. Login to the account first.</b>
              </p>
              <p style={{ color: 'white' }}>
                <b>2. In the sidebar click 'Account' menu.</b>
              </p>
              <p style={{ color: 'white' }}>
                <b>3. Click 'Delete Account' button.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible4" className="toggle" type="checkbox" />
          <label htmlFor="collapsible4" className="lbl-toggle">
            How do i change my username?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>You can't change your username.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible5" className="toggle" type="checkbox" />
          <label htmlFor="collapsible5" className="lbl-toggle">
            Why did I not receive the confirmation of my email address?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  Contact the administrator by clicking 'Contact Support' button
                  in the help page.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible6" className="toggle" type="checkbox" />
          <label htmlFor="collapsible6" className="lbl-toggle">
            What are the benefits of a paid subscription?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  You will get more storage space, domains and domains based on
                  the plan you are selected.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3
        style={{
          color: 'white',
          textAlign: 'center',
          marginTop: '30px',
          textTransform: 'uppercase',
        }}
      >
        Billing & Payments
      </h3>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible7" className="toggle" type="checkbox" />
          <label htmlFor="collapsible7" className="lbl-toggle">
            Which payment methods are supported?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>1. You can choose monthly and annual plan.</b>
              </p>
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  2. Basic, Standard, Pro plans are available in monthly and
                  annually.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible8" className="toggle" type="checkbox" />
          <label htmlFor="collapsible8" className="lbl-toggle">
            How do I update my payment method?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>1. Login to the account first.</b>
              </p>
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  2. By clicking the 'Avatar icon' you can choose 'Upgrade',
                  'Degrade' or 'Change plan' based on your needs.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible9" className="toggle" type="checkbox" />
          <label htmlFor="collapsible9" className="lbl-toggle">
            Is my subscription automatically renewed?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>1. No. You should select your plan manually.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible10" className="toggle" type="checkbox" />
          <label htmlFor="collapsible10" className="lbl-toggle">
            Why was my credit card declined?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  Contact the administrator by clicking 'Contact Support' button
                  in the help page. Thereby you will get the reson.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible11" className="toggle" type="checkbox" />
          <label htmlFor="collapsible11" className="lbl-toggle">
            How do I cancel my subscription?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>1. Login to the page firstly.</b>
              </p>
              <p style={{ color: 'white' }}>
                {' '}
                <b>2. Click the 'Subscriptions' menu in the sidebar.</b>
              </p>
              <p style={{ color: 'white' }}>
                {' '}
                <b>3. Click 'Cancle Subscription' button.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible12" className="toggle" type="checkbox" />
          <label htmlFor="collapsible12" className="lbl-toggle">
            How to request a refund?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  Please contact the administrator by clicking 'Contact Support'
                  button in the help page.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3
        style={{
          color: 'white',
          textAlign: 'center',
          marginTop: '30px',
          textTransform: 'uppercase',
        }}
      >
        Privacy & Safety
      </h3>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible13" className="toggle" type="checkbox" />
          <label htmlFor="collapsible13" className="lbl-toggle">
            Do you keep a copy of my file?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  Yes. You can take copy of the file. The files you are uploaded
                  and converted can be seen in the 'History' page.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible14" className="toggle" type="checkbox" />
          <label htmlFor="collapsible14" className="lbl-toggle">
            Are my files safe? Is Convertle safe to use?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>Yes. 100% safe.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible15" className="toggle" type="checkbox" />
          <label htmlFor="collapsible15" className="lbl-toggle">
            Can anyone else see the files I convert?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  No. Only you can see the files which you are converted. But
                  you can shared the converted files with your friends.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible16" className="toggle" type="checkbox" />
          <label htmlFor="collapsible16" className="lbl-toggle">
            What is your privacy policy?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>1. Donot share your credentials with others.</b>
              </p>
              <p style={{ color: 'white' }}>
                {' '}
                <b>2. Try to change your password every two months.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible17" className="toggle" type="checkbox" />
          <label htmlFor="collapsible17" className="lbl-toggle">
            I have found a security issue. How do I report it?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  Please contact the administrator by clicking 'Contact Support'
                  button in the help page.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3
        style={{
          color: 'white',
          textAlign: 'center',
          marginTop: '30px',
          textTransform: 'uppercase',
        }}
      >
        Troubleshooting
      </h3>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible18" className="toggle" type="checkbox" />
          <label htmlFor="collapsible18" className="lbl-toggle">
            The conversion of my file failed. What's wrong?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  1. Please check you network connection is working properly.
                </b>
              </p>
              <p style={{ color: 'white' }}>
                {' '}
                <b>2. Check your mail if any mail.</b>
              </p>
              <p style={{ color: 'white' }}>
                {' '}
                <b>3. Please check your subscription is expired or not.</b>
              </p>
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  4. Please contact the administrator by clicking 'Contact
                  Support' button in the help page.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible19" className="toggle" type="checkbox" />
          <label htmlFor="collapsible19" className="lbl-toggle">
            I'm experiencing problems during the upload of the file.
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  1. Please check you network connection is working properly.
                </b>
              </p>
              <p style={{ color: 'white' }}>
                {' '}
                <b>2. Check your mail if any mail.</b>
              </p>
              <p style={{ color: 'white' }}>
                {' '}
                <b>3. Please check your subscription is expired or not.</b>
              </p>
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  4. Please contact the administrator by clicking 'Contact
                  Support' button in the help page.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible21" className="toggle" type="checkbox" />
          <label htmlFor="collapsible21" className="lbl-toggle">
            I can not find the downloaded file.
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  1. Please check you network connection is working properly.
                </b>
              </p>
              <p style={{ color: 'white' }}>
                {' '}
                <b>2. Check your mail if any mail.</b>
              </p>
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  4. Please contact the administrator by clicking 'Contact
                  Support' button in the help page.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible22" className="toggle" type="checkbox" />
          <label htmlFor="collapsible22" className="lbl-toggle">
            How long will the converted file be available for download?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>1. You can download your file whenever you needed.</b>
              </p>
              <p style={{ color: 'white' }}>
                {' '}
                <b>2. The file will be available in history also.</b>
              </p>{' '}
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  3. The file will be available whenever you deleted that file.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible23" className="toggle" type="checkbox" />
          <label htmlFor="collapsible23" className="lbl-toggle">
            Are there files that can not be converted?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>1. No. Only PDF files can be converted.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible24" className="toggle" type="checkbox" />
          <label htmlFor="collapsible24" className="lbl-toggle">
            Why has the appearance (or layout) of my document changed?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  Please contact the administrator by clicking 'Contact Support'
                  button in the help page.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrap-collabsible">
          <input id="collapsible25" className="toggle" type="checkbox" />
          <label htmlFor="collapsible25" className="lbl-toggle">
            Why did the fonts in my document change?
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p style={{ color: 'white' }}>
                {' '}
                <b>
                  Please contact the administrator by clicking 'Contact Support'
                  button in the help page.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3
        style={{
          color: 'white',
          textAlign: 'center',
          marginTop: '30px',
          textTransform: 'uppercase',
        }}
      >
        DIDN'T FIND AN ANSWER?
      </h3>
      <div className="buttonhelp">
        <Button
        onClick={contactSupport}
          className="button-help"
          variant="primary"
          style={{ backgroundColor: 'green', border: 'none' }}
        >
          CONTACT SUPPORT
        </Button>
        <Button
        onClick={suggestions}
          className="button-help"
          variant="primary"
          style={{
            backgroundColor: 'green',
            border: 'none',
            marginLeft: '10px',
          }}
        >
          SUGGEST A FEATURE
        </Button>
      </div>
    </div>
    {contact ? <ContactSupport setContact={setContact}/> : <></>}
      {!contact && suggest ? <SuggestionModal setSuggest={setSuggest}/> : <></>}

    </div>
  )
}
export default Help
