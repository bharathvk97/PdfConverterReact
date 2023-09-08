import React from "react";

function SuggestionModal({setSuggest}) {
  const closeSuggest = () => setSuggest(false)
  return (
    <div className="contact-support-main">
      <div className="contact-support">
      <i className="fa-solid fa-xmark" onClick={closeSuggest} style={{color:'white',cursor:'pointer'}}></i>
        <h5 style={{ color: "white", textAlign:'center' }}>Suggest Your Ideas</h5>
        <hr style={{ color: "white" }} />

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

          <div className="form-outline mb-2">
            <label className="form-label contact-label" for="form4Example2">
              Subject
            </label>
            <input type="email" id="form4Example2" className="form-control" />
          </div>

          {/* <!-- Suggestions input --> */}
          <div className="form-outline mb-2">
            <label className="form-label contact-label" for="form4Example3">
              Suggestions
            </label>
            <textarea
              className="form-control"
              id="form4Example3"
              rows="4"
            ></textarea>
          </div>

          {/* <!-- Checkbox --> */}
          {/* <div className="form-check d-flex justify-content-center mb-2">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="form4Example4"
              checked
            />
            <label className="form-check-label" for="form4Example4">
            </label>
          </div> */}

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-block mb-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SuggestionModal;
