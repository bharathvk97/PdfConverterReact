import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userprofiledelete } from "../../../Redux/Action/ActionCreator";

function AccountDeleteModal({setAccountDelete}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteaccount = (e) => {
    e.preventDefault();
    dispatch(
      userprofiledelete((res) => {
        console.log(res);
        if ("data" in res) {
          navigate("/");
        }
      })
    );
  };

  const cancelDeleteAcc = () =>{
    setAccountDelete(false)
  }
  return (
      <div className="mainss">
        <div
          className="delete-modal"
          style={{
            marginTop: "80px",
            // marginLeft: "-10px",
            paddingBottom: "50px",
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p
          className="message-success"
            id="message-success"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              color:'rgb(243, 111, 111)'
            }}
          >
            {" "}
            Are you sure you want to delete your account?{" "}
          </p>{" "}
          <div style={{ paddingTop: "25px", paddingLeft: "10px" }}>
            <p
              id="message"
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              This action cannot be undone and you will be unable to recover any
              data{" "}
            </p>{" "}
          </div>
          <div
            className="cancelplan-btn-div"
            style={{ display: "flex", gap: "40px" }}
          >
            <button
              id="cancelplan-btn"
              onClick={cancelDeleteAcc}
              variant="outline-info"
              style={{
                color: "white",
                // backgroundColor:"#0099cc",
                // fontSize: "10px",
                borderRadius: "30px",
                padding: "0.8rem 3rem",
              }}
              className="btn-for-stnd"
            >
              Cancel{" "}
            </button>{" "}
            <button
              id="cancelplan-btn"
              onClick={deleteaccount}
              variant="outline-info"
              style={{
                color: "white",
                // backgroundColor:"#ff4d4d",
                // fontSize: "10px",
                borderRadius: "30px",
                padding: "0.8rem 3rem",
              }}
              className="btn-for-stnd"
            >
              Yes, Confirm
            </button>{" "}
          </div>
        </div>{" "}
      </div>
  );
}

export default AccountDeleteModal;
