import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function Pricing() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const monthlyplan = () => {
    if (show === false) {
      setShow(true)
    }
    if (show === true) {
      setShow(false)
    }
  }
  function signup() {
    navigate('/signup')
  }
  return (
    <div className="registration-wrap">
      <Header />
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <p style={{ color: 'white', marginTop: '50px' }}>
          Monthly
          <label
            className="switch"
            style={{
              top: '11px',
              marginRight: '8px',
              marginLeft: '8px',
            }}
          >
            <input type="checkbox" onClick={monthlyplan} />
            <span className="slider round"></span>
          </label>
          Annualy
        </p>
      </div>
      {!show ? (
        <div className="pricing-table">
          <div className="ptable-item">
            <div className="ptable-single">
              <div
                className="ptable-header"
                style={{ backgroundColor: '#FFAA33' }}
              >
                <div className="ptable-title">
                  <i
                    className="fa fa-adjust"
                    style={{ fontSize: '50px' }}
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="ptable-price">
                  <h3>$100.0</h3>
                  <h6>
                    <small>per month</small>
                  </h6>
                </div>
              </div>
              <div className="ptable-body">
                <div className="ptable-description">
                  <ul>
                    <div className="ptable-title">
                      <h2 style={{ color: '#FFAA33' }}>BASIC</h2>
                    </div>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        50GB Disk Space
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        50 Email Accounts
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        50GB Monthly Bandwidth
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        10 Subdomains
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>15 Domains</small>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ptable-footer">
                <div className="ptable-action">
                  <button
                    onClick={signup}
                    style={{
                      backgroundColor: '#FFAA33',
                      borderRadius: '20px',
                      border: 'none',
                      color: 'white',
                      padding: '6px 20px',
                    }}
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="ptable-item featured-item">
            <div className="ptable-single">
              <div
                className="ptable-header"
                style={{ backgroundColor: 'rgb(18 199 108)' }}
              >
                <div className="ptable-title">
                  <i
                    className="fa fa-suitcase"
                    style={{ fontSize: '50px' }}
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="ptable-price">
                  <h3>$200.0</h3>
                  <h6>
                    <small>per month</small>
                  </h6>
                </div>
              </div>
              <div className="ptable-body">
                <div className="ptable-description">
                  <ul>
                    <div className="ptable-title">
                      <h2 style={{ color: 'rgb(18 199 108)' }}>STANDARD</h2>
                    </div>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        60GB Disk Space
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        60 Email Accounts
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        60GB Monthly Bandwidth
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        15 Subdomains
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>20 Domains</small>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ptable-footer">
                <div className="ptable-action">
                  <button
                    onClick={signup}
                    style={{
                      backgroundColor: 'rgb(18 199 108)',
                      borderRadius: '20px',
                      border: 'none',
                      color: 'white',
                      padding: '6px 20px',
                    }}
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="ptable-item">
            <div className="ptable-single">
              <div
                className="ptable-header"
                style={{ backgroundColor: '#6495ed' }}
              >
                <div className="ptable-title">
                  {/* <h2>Premium</h2> */}
                  <i
                    className="fa fa-globe"
                    style={{ fontSize: '50px' }}
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="ptable-price">
                  <h3>$300.0</h3>
                  <h6>
                    <small>per month</small>
                  </h6>
                </div>
              </div>
              <div className="ptable-body">
                <div className="ptable-description">
                  <div className="ptable-title">
                    <h2 style={{ color: 'blue' }}>PRO</h2>
                  </div>
                  <ul>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        70GB Disk Space
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        70 Email Accounts
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        70GB Monthly Bandwidth
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        20 Subdomains
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>25 Domains</small>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ptable-footer">
                <div className="ptable-action">
                  <button
                    onClick={signup}
                    style={{
                      backgroundColor: '#6495ed',
                      borderRadius: '20px',
                      border: 'none',
                      color: 'white',
                      padding: '6px 20px',
                    }}
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pricing-table">
          <div className="ptable-item">
            <div className="ptable-single">
              <div
                className="ptable-header"
                style={{ backgroundColor: '#FFAA33' }}
              >
                <div className="ptable-title">
                  <i
                    className="fa fa-adjust"
                    style={{ fontSize: '50px' }}
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="ptable-price">
                  <h3>$1000.0</h3>
                  <h6>
                    <small>per year</small>
                  </h6>
                </div>
              </div>
              <div className="ptable-body">
                <div className="ptable-description">
                  <ul>
                    <div className="ptable-title">
                      <h2 style={{ color: '#FFAA33' }}>BASIC</h2>
                    </div>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        500GB Disk Space
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        50 Email Accounts
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        50GB Yearly Bandwidth
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        10 Subdomains
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>15 Domains</small>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ptable-footer">
                <div className="ptable-action">
                  <button
                    onClick={signup}
                    style={{
                      backgroundColor: '#FFAA33',
                      borderRadius: '20px',
                      border: 'none',
                      color: 'white',
                      padding: '6px 20px',
                    }}
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="ptable-item featured-item">
            <div className="ptable-single">
              <div
                className="ptable-header"
                style={{ backgroundColor: 'rgb(18 199 108)' }}
              >
                <div className="ptable-title">
                  <i
                    className="fa fa-suitcase"
                    style={{ fontSize: '50px' }}
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="ptable-price">
                  <h3>$2000.0</h3>
                  <h6>
                    <small>per year</small>
                  </h6>
                </div>
              </div>
              <div className="ptable-body">
                <div className="ptable-description">
                  <ul>
                    <div className="ptable-title">
                      <h2 style={{ color: 'rgb(18 199 108)' }}>STANDARD</h2>
                    </div>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        600GB Disk Space
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        60 Email Accounts
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        60GB Yearly Bandwidth
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        15 Subdomains
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>20 Domains</small>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ptable-footer">
                <div className="ptable-action">
                  <button
                    onClick={signup}
                    style={{
                      backgroundColor: 'rgb(18 199 108)',
                      borderRadius: '20px',
                      border: 'none',
                      color: 'white',
                      padding: '6px 20px',
                    }}
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="ptable-item">
            <div className="ptable-single">
              <div
                className="ptable-header"
                style={{ backgroundColor: '#6495ed' }}
              >
                <div className="ptable-title">
                  {/* <h2>Premium</h2> */}
                  <i
                    className="fa fa-globe"
                    style={{ fontSize: '50px' }}
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="ptable-price">
                  <h3>$3000.0</h3>
                  <h6>
                    <small>per year</small>
                  </h6>
                </div>
              </div>
              <div className="ptable-body">
                <div className="ptable-description">
                  <div className="ptable-title">
                    <h2 style={{ color: 'blue' }}>PRO</h2>
                  </div>
                  <ul>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        700GB Disk Space
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        70 Email Accounts
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        70GB Yearly Bandwidth
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>
                        20 Subdomains
                      </small>
                    </li>
                    <li>
                      <small style={{ fontSize: '.975em' }}>25 Domains</small>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ptable-footer">
                <div className="ptable-action">
                  <button
                    onClick={signup}
                    style={{
                      backgroundColor: '#6495ed',
                      borderRadius: '20px',
                      border: 'none',
                      color: 'white',
                      padding: '6px 20px',
                    }}
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Pricing
