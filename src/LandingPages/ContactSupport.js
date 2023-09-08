import React from "react";

function ContactSupport({setContact}) {

  const closeContact = () => setContact(false)
  return (
    <div className="contact-support-main">    
      <div className="contact-support">
      <i className="fa-solid fa-xmark" onClick={closeContact} style={{color:'white',cursor:'pointer'}}></i>
        <h3>Contact Us</h3>
        <hr style={{color:'white'}}/>
        <form className="form">
          {/* <!-- Name input --> */}
          <div className="form-outline mb-2">
            <label className="form-label contact-label" for="form4Example1">
              Name
            </label>
            <input type="text" id="form4Example1" className="form-control" />
          </div>

          {/* <!-- Email input --> */}
          <div className="form-outline mb-2">
            <label className="form-label contact-label" for="form4Example2">
              Email address
            </label>
            <input type="email" id="form4Example2" className="form-control" />
          </div>

           {/* <!-- subject input --> */}
           <div className="form-outline mb-2">
            <label className="form-label contact-label" for="form4Example2">
              Subject
            </label>
            <input type="email" id="form4Example2" className="form-control" />
          </div>

          {/* <!-- Message input --> */}
          <div className="form-outline mb-2">
            <label className="form-label contact-label" for="form4Example3">
              Message
            </label>
            <textarea
              className="form-control"
              id="form4Example3"
              rows="4"
            ></textarea>
          </div>

          {/* <!-- Checkbox --> */}
          <div className="form-check d-flex justify-content-center mb-2">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="form4Example4"
              checked
            />
            <label className="form-check-label contact-label" for="form4Example4">
              {/* Send me a copy of this message */}
            </label>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-block mb-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSupport;
