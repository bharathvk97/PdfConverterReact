import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import {
  getuserdetailsforupdate,
  baseplanmonthlysessionid,
  baseplanmonthlytostandardplanmonthly,
  baseplanmonthlytoproplanmonthly,
  baseplanyearlytostandardplanyearly,
  baseplanyearlytoproplanyearly,
 
} from "../../Redux/Action/ActionCreator";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Commonsidebar from "./SidebarAndMenus/Commonsidebar";
import AvatarSubMenu from "./AvatarAndSubMenus";
import { addFile } from "../../Redux/Reducer/UploadFileReducer";
// import { Store } from "../../Redux/Store/Store.js";
// import { baseplanmonthlytostandardplanmonthly } from "../../Redux/Reducer/CommonReducer";

function ChangeplanConfirmationYear() {
  const navigate = useNavigate();

  let userdetails = JSON.parse(localStorage.getItem("userdetails"));
  const [statename, setName] = useState({
    firstname: userdetails.firstname,
    lastname: userdetails.lastname,
    phonenumber: userdetails.phonenumber,
    username: userdetails.username,
    country: userdetails.country,
    email: userdetails.email,
    countryobj: [],
    gender: userdetails.gender,
    pdfconverter_dp: userdetails.profileimage,
    profile_image: "",
    subscription_name: userdetails.subscription_name,
    subscription_status: userdetails.subscription_status,
    subscription_period: userdetails.subscription_period,
    
  });

  sessionStorage.setItem("statename", statename);
  sessionStorage.setItem("setName", setName);
  const dispatch = useDispatch();
  const [userselectedplan, setuserselectedplan] = useState("");
  const [userselectedplanperiod, setuserselectedplanperiod] = useState("");

  let normaluserlogindetails = JSON.parse(
    localStorage.getItem("normaluserlogindetails")
  );

  useEffect(() => {  
    dispatch(
      getuserdetailsforupdate((res) => {
        if (res?.data) {
          const userdetails = {
            username: res.data.data["username"],
            firstname: res.data.data["firstname"],
            lastname: res.data.data["lastname"],
            country: res.data.data["country"],
            phonenumber: res.data.data["phonenumber"],
            email: res.data.data["email"],
            profileimage: res.data.data["image"],
            gender: res.data.data["gender"],
            subscription_name: res.data["subscription_name"],
            subscription_status: res.data["subscription_status"],
            subscription_period: res.data["subscribtion_period"],
            fbname: "",
            fbuserid: "",
          };
          setuserselectedplan(res.data["subscription_name"]);
          setuserselectedplanperiod(res.data["subscribtion_period"]);
          localStorage.setItem("userdetails", JSON.stringify(userdetails));
        }
      })
    );
  });

  const baseplanToStandardPlanYearly = () => {
    console.log('cliked');
    if (
      userselectedplan === "Base Plan" &&
      userselectedplanperiod === "year"
    ) {
      const access_token = normaluserlogindetails.normaluser_accesstoken;
      if (access_token !== '') {
        dispatch(
            baseplanyearlytostandardplanyearly((res) => {
            console.log("dispatch response", res);
            if (res.status === 200) {
              navigate("/baseplanyeartostandardplanyear");
            }
          })
        );
      }
    }
  };

  const baseplanToProplanYearly = () => {
    if (
      userselectedplan === 'Base Plan' &&
      userselectedplanperiod === 'year'
    ) {
      const access_token = normaluserlogindetails.normaluser_accesstoken
      if(access_token !== ''){
        dispatch(
            baseplanyearlytoproplanyearly((res) => {
            console.log('proplan',res);
            if(res.status === 200) {
              navigate("/baseplanyeartoproplanyearsuccess")
            }
          })
        )
      }
    }
  }
  return (
    <div className="main-container">
      <div className="main-container">
        <Commonsidebar />
        <div className="main">
          <div
            className="subscriptionreport-container-change"
            style={{
              marginTop: "80px",
              // marginLeft: "-10px",
              paddingBottom: "50px",
            }}
          >
            <p
              id="message-success"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              Which Plan Should You Change To?{" "}
            </p>{" "}
            <div className="planchange-btn-div">
              <Button
                id="changeplan-btn"
                onClick={baseplanToStandardPlanYearly}
                variant="outline-info"
                style={{
                  color: "white",
                  fontSize: "18px",
                  borderRadius: "30px",
                  padding: "0.6rem 1rem",
                }}
                className="btn-for-stnd"
              >
                Standard Plan Yearly{" "}
              </Button>{" "}
              <Button
                id="changeplan-btn"
                 onClick={baseplanToProplanYearly}
                variant="outline-info"
                style={{
                  color: "white",
                  fontSize: "18px",
                  borderRadius: "30px",
                  padding: "0.6rem 1rem",
                }}
              >
                Pro Plan Yearly
              </Button>{" "}
            </div>
          </div>{" "}
        </div>
        <AvatarSubMenu />
      </div>
    </div>
  );
}
export default ChangeplanConfirmationYear;
