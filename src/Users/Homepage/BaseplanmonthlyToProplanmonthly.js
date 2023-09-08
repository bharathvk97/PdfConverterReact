import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import AvatarSubMenu from "./AvatarAndSubMenus";
import {
  // getuserdetailsforupdate,
  baseplanmonthlysessionid,
} from "../../Redux/Action/ActionCreator";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Commonsidebar from "./SidebarAndMenus/Commonsidebar";
import { getuserdetailsforupdate } from "../../Redux/Reducer/CommonReducer";

function BaseplanmonthlyToProplanmonthly() {
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
  const { planName } = useParams();
  sessionStorage.setItem("statename", statename);
  sessionStorage.setItem("setName", setName);

  let normaluserlogindetails = JSON.parse(
    localStorage.getItem("normaluserlogindetails")
  );
  return (
    <div className="main-container">
      <div className="main-container">
        <Commonsidebar />
        <div className="main">
          <div
            className="subscriptionreport-container"
            style={{
              marginTop: "15px",
              marginLeft: "-10px",
              paddingBottom: "50px",
            }}
          >
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
            <h3
              id="status"
              style={{
                color: "white",
                fontStyle: "bold",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              Hi {normaluserlogindetails.username}
            </h3>{" "}
            <p
              id="message-success-plan"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              {" "}
              Successfully changed Base plan monthly to Pro plan Monthly
            </p>{" "}
            <Link
              to="/homepageuser"
              id="successemailcontinue"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "20%",
              }}
            >
              <b>Continue</b>
            </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
export default BaseplanmonthlyToProplanmonthly;
