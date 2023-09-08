import React, { useEffect, useState } from "react";
import Commonsidebar from "./SidebarAndMenus/Commonsidebar";
import AvatarSubMenu from "./AvatarAndSubMenus";
import UploadedPagination from "./SidebarAndMenus/UploadedPagination";
import axios from "axios";
import { useDispatch } from "react-redux";
import { subscriptionactive } from "../../Redux/Action/ActionCreator";


function Notifications() {
    const dispatch = useDispatch();
    const [apiResponse, setApiResponse] = useState({});


useEffect(()=> {
    dispatch(
        subscriptionactive((res)=> {
          // console.log(res);
            setApiResponse(res.data)
        }))
},[])


  return (
    <div className="main-container">
      <Commonsidebar />
      <div className="main">
        <div className="notification-report">
          <div className="d-flex">
            <h5
              className="notify-text"
              style={{
                color: "white",
                marginBottom: "10px",
                paddingTop: "10px",
              }}
            >
              Notifications
            </h5>
            <div className="notify-icon">
                <h6>1-50</h6>
              <i class="fa-sharp fa-solid fa-less-than less-than"></i>
              <i class="fa-solid fa-greater-than greater"></i>
            </div>
          </div>
          {/* //  contents */}
          <div>
            <div className="notify-collabsible"> 
              <input id="collapsible1" className="toggle" type="checkbox" />
                <label htmlFor="collapsible1" className="notify-toggle">
                <input type="checkbox" name="" id="checkbox-notify"  style={{display:'inline-block',padding:'3rem'}}/>           
                  <i class="fa-solid fa-star star"></i> &nbsp; 
                  {apiResponse.message ? apiResponse.message : ""} 
                </label>

              <div className="message-content">
                <div className="content-inner">
                  <p style={{ color: "white",paddingLeft:'3.5rem' }}>
                    {apiResponse.subscription_plan && (
                       
                         <h6 style={{fontWeight:'200'}}>Subscription Plan : {apiResponse.subscription_plan} </h6>
                    )}
                       {apiResponse.subscription_period && (
                          <h6 style={{fontWeight:'200'}}>Subscription Period : {apiResponse.subscription_period}</h6>

                       )}
                                    
                  </p>
                </div>
              </div>
                <div className="icon-message">
                  <i className="fa-solid fa-message trash "></i>
                  <i className="fa-solid fa-trash trash"></i>
                </div>
            </div>
          </div>
        </div>
      </div>
      <AvatarSubMenu />
    </div>
  );
}

export default Notifications;
