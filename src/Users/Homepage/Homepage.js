import React, { useState, useEffect } from "react";
import Commonsidebar from "./SidebarAndMenus/Commonsidebar";
import UploadedPagination from "./SidebarAndMenus/UploadedPagination";
import RecentFileRecords from "./SidebarAndMenus/RecentFileRecords";
import {
  getuserdetailsforupdate,
  getgoogleuserdetailsforupdate,
  viewbaseplanmonthlyviewupgradedetails,
  viewupgradedetailsstanadardplanmonthly,
  viewcurrentplanadedetails,
  viewproplanmonthlyupgradealldetails,
  degradestandardplanyearlytobaseplanmonthly,
  degradebaseplanyearlytobaseplanmonthly,
  degradeproplanyearlytobaseplanmonthly,
  fileList,
  deleteFile,
  storageRunningOut,
} from "../../Redux/Action/ActionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AvatarSubMenu from "./AvatarAndSubMenus";
import Upgradeviewmodal from "./UpgradeviewdetailsModal";
import Upgradeviewdetailsmodal from "./Upgradeviewmodal";
import Currentplanviewdetailsmodal from "./Currentplandetailsmodal";
import Upgradestandardplanviewmodal from "./UpgradeStandardPlanViewModal";
import Upgradeproplanviewmodal from "./Upgradeproplanmodal";
import WelcomePage from "./WelcomePage";

function Homepageuser({ welcomeModal, setWelcomeModal }) {


  let normaluserlogindetails = JSON.parse(
    localStorage.getItem("normaluserlogindetails")
  );
  // console.log(normaluserlogindetails);
  const degradeplan = (e) => {
    e.preventDefault();
    const access_token = normaluserlogindetails.normaluser_accesstoken;
    if (access_token !== "") {
      if (userselectedplan === "Base Plan") {
        dispatch(
          degradebaseplanyearlytobaseplanmonthly((res) => {
            // console.log(res);
            if ("data" in res) {
              if (res.data["sucess_url"] !== "") {
                navigate("/planyearlytoplanmonthly");
              }
            }
          })
        );
      }
      if (userselectedplan === "Standard Plan") {
        dispatch(
          degradestandardplanyearlytobaseplanmonthly((res) => {
            // console.log(res);
            if ("data" in res) {
              if (res.data["sucess_url"] !== "") {
                navigate("/planyearlytoplanmonthly");
              }
            }
          })
        );
      }
      if (userselectedplan === "Pro Plan") {
        dispatch(
          degradeproplanyearlytobaseplanmonthly((res) => {
            // console.log(res);
            if ("data" in res) {
              if (res.data["sucess_url"] !== "") {
                navigate("/planyearlytoplanmonthly");
              }
            }
          })
        );
      }
    }
  };
  // console.log(normaluserlogindetails)
  const [userselectedplan, setuserselectedplan] = useState("");
  const [subscriptionstatus, setsubscriptionstatus] = useState("");
  const [userselectedplanperiod, setuserselectedplanperiod] = useState("");
  const [showupgradeview, setshowupgradeview] = useState(false);
  const [showproplanupgradeview, setshowproplanupgradeview] = useState(false);
  const [showupgradeviewdetails, setshowupgradeviewdetails] = useState(false);
  const [showcurrentviewdetails, setshowcurrentviewdetails] = useState(false);
  const [subscriptionperiod, setsubscriptionperiod] = useState("");
  const [currentsubscriptionstatus, setcurrentsubscriptionstatus] =
    useState("");
  const [currentsubscriptionperiod, setcurrentsubscriptionperiod] =
    useState("");
  const closeupgradeview = () => setshowupgradeview(false);
  const [showstandardplanupgradeview, setshowstandardplanupgradeview] =
    useState(false);
  const closestandardplanupgradeview = () =>
    setshowstandardplanupgradeview(false);
  const closeproplanupgradeview = () => setshowproplanupgradeview(false);
  const closeupgradeviewdetails = () => setshowupgradeviewdetails(false);
  const closecurrentviewdetails = () => setshowcurrentviewdetails(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  // const degradeplanyearly = (e) => {
  //   e.preventDefault()
  //   const access_token = normaluserlogindetails.normaluser_accesstoken
  //   if (access_token !== '') {
  //     if (userselectedplan === 'Base Plan') {
  //       dispatch(
  //         degradebaseplanyearly((res) => {
  //           // console.log(res)
  //           // setcurrentsubscription_name(
  //           //   res.data['Subscription Details']['subscription_name'],
  //           // )
  //           // setsubscription_current_end_period(
  //           //   res.data['Subscription Details']['subscription_end_date'],
  //           // )
  //           // setsubscription_current_start_period(
  //           //   res.data['Subscription Details']['subscription_start_date'],
  //           // )
  //           // setcurrentsubscriptionstatus(
  //           //   res.data['Subscription Details']['subscription_status'],
  //           // )
  //           // setcurrentsubscriptionperiod(
  //           //   res.data['Subscription Details']['subscription_period'],
  //           // )
  //         }),
  //       )
  //     }
  //   }
  // }
  const viewupgradedetail = (e) => {
    e.preventDefault();
    setshowupgradeview(true);
  };
  const viewstandardupgradedetail = (e) => {
    e.preventDefault();
    setshowstandardplanupgradeview(true);
  };
  const viewproplanupgradedetail = (e) => {
    e.preventDefault();
    setshowproplanupgradeview(true);
  };
  const [
    subscription_upgraded_end_period,
    setsubscription_upgraded_end_period,
  ] = useState("");
  const [
    subscription_upgraded_start_period,
    setsubscription_upgraded_start_period,
  ] = useState("");
  const [subscription_current_end_period, setsubscription_current_end_period] =
    useState("");
  const [
    subscription_current_start_period,
    setsubscription_current_start_period,
  ] = useState("");
  const [subscription_name, setsubscription_name] = useState("");
  const [currentsubscription_name, setcurrentsubscription_name] = useState("");
  const viewcurrentplandetail = (e) => {
    e.preventDefault();
    localStorage.setItem("userselectedpreviousplan", userselectedplan);
    const access_token = normaluserlogindetails.normaluser_accesstoken;
    if (access_token !== "") {
      if (
        userselectedplan === "Base Plan" ||
        userselectedplanperiod === "month" ||
        userselectedplan === "Base Plan" ||
        userselectedplanperiod === "year"
      ) {
        dispatch(
          viewcurrentplanadedetails((res) => {
            // console.log(res)
            setcurrentsubscription_name(
              res.data["Subscription Details"]["subscription_name"]
            );

            setsubscription_current_end_period(
              res.data["Subscription Details"]["subscription_end_date"]
            );
            setsubscription_current_start_period(
              res.data["Subscription Details"]["subscription_start_date"]
            );
            setcurrentsubscriptionstatus(
              res.data["Subscription Details"]["subscription_status"]
            );
            setcurrentsubscriptionperiod(
              res.data["Subscription Details"]["subscription_period"]
            );
          })
        );
      }
      if (
        userselectedplan === "Standard Plan" ||
        userselectedplanperiod === "month" ||
        userselectedplan === "Standard Plan" ||
        userselectedplanperiod === "year"
      ) {
        dispatch(
          viewcurrentplanadedetails((res) => {
            // console.log(res)
            setcurrentsubscription_name(
              res.data["Subscription Details"]["subscription_name"]
            );

            setsubscription_current_end_period(
              res.data["Subscription Details"]["subscription_end_date"]
            );
            setsubscription_current_start_period(
              res.data["Subscription Details"]["subscription_start_date"]
            );
            setcurrentsubscriptionstatus(
              res.data["Subscription Details"]["subscription_status"]
            );
            setcurrentsubscriptionperiod(
              res.data["Subscription Details"]["subscription_period"]
            );
          })
        );
      }
    }
    setshowcurrentviewdetails(true);
  };
  const viewupgradeplandetails = (e) => {
    e.preventDefault();
    const access_token = normaluserlogindetails.normaluser_accesstoken;
    if (access_token !== "") {
      if (
        userselectedplan === "Base Plan" ||
        userselectedplanperiod === "month" ||
        userselectedplan === "Base Plan" ||
        userselectedplanperiod === "year"
      ) {
        dispatch(
          viewbaseplanmonthlyviewupgradedetails((res) => {
            // console.log(res.hasOwnProperty('subscription_upgrade_details'))
            if (res?.statusText) {
              if (res.statusText === "Bad Request") {
                navigate("/homepageuser");
              }
              if (res.statusText !== "Bad Request") {
                if (
                  res.statusText !== "Internal Server Error" ||
                  res.statusText === "OK"
                ) {
                  if ("subscription_upgrade_details" in res.data) {
                    // console.log(res.data.subscription_upgrade_details.subscription_name)
                    setsubscription_name(
                      res.data.subscription_upgrade_details.subscription_name
                    );

                    setsubscription_upgraded_end_period(
                      res.data.subscription_upgrade_details
                        .subscription_upgrade_end_date
                    );
                    setsubscription_upgraded_start_period(
                      res.data.subscription_upgrade_details
                        .subscription_upgrade_start_date
                    );
                    setsubscriptionstatus(
                      res.data.subscription_upgrade_details.subscription_status
                    );
                    setsubscriptionperiod(
                      res.data.subscription_upgrade_details
                        .subscription_upgrade_period
                    );
                  }
                }
              }
            }
          })
        );
        setshowupgradeviewdetails(true);
      }
      if (
        userselectedplan === "Standard Plan" ||
        userselectedplanperiod === "month" ||
        userselectedplan === "Standard Plan" ||
        userselectedplanperiod === "year"
      ) {
        dispatch(
          viewupgradedetailsstanadardplanmonthly((res) => {
            // console.log(res.response.statusText)
            // console.log(res.data.subscription_upgrade_details.subscription_name)
            if (res?.statusText) {
              if (res.statusText === "Bad Request") {
                navigate("/homepageuser");
              }
              if (res.statusText !== "Bad Request") {
                if (
                  res.statusText !== "Internal Server Error" ||
                  res.statusText === "OK"
                ) {
                  if ("subscription_upgrade_details" in res.data) {
                    setsubscription_name(
                      res.data.subscription_upgrade_details.subscription_name
                    );

                    setsubscription_upgraded_end_period(
                      res.data.subscription_upgrade_details
                        .subscription_upgrade_end_date
                    );
                    setsubscription_upgraded_start_period(
                      res.data.subscription_upgrade_details
                        .subscription_upgrade_start_date
                    );
                    setsubscriptionstatus(
                      res.data.subscription_upgrade_details.subscription_status
                    );
                    setsubscriptionperiod(
                      res.data.subscription_upgrade_details
                        .subscription_upgrade_period
                    );
                  }
                }
              }
            }
          })
        );
        setshowupgradeviewdetails(true);
      }
      if (
        userselectedplan === "Pro Plan" ||
        userselectedplanperiod === "month" ||
        userselectedplan === "Pro Plan" ||
        userselectedplanperiod === "year"
      ) {
        // alert('hi')
        dispatch(
          viewproplanmonthlyupgradealldetails((res) => {
            // console.log(res)
            // console.log(res.data.subscription_upgrade_details in res)
            // console.log(res.hasOwnProperty('subscription_upgrade_details'))
            if (res?.statusText) {
              if (res.statusText === "Bad Request") {
                navigate("/homepageuser");
              }
              if (res.statusText !== "Bad Request") {
                if (
                  res.statusText !== "Internal Server Error" ||
                  res.statusText === "OK"
                ) {
                  if ("subscription_upgrade_details" in res.data) {
                    setsubscription_name(
                      res.data.subscription_upgrade_details.subscription_name
                    );

                    setsubscription_upgraded_end_period(
                      res.data.subscription_upgrade_details
                        .subscription_upgrade_end_date
                    );
                    setsubscription_upgraded_start_period(
                      res.data.subscription_upgrade_details
                        .subscription_upgrade_start_date
                    );
                    setsubscriptionstatus(
                      res.data.subscription_upgrade_details.subscription_status
                    );
                    setsubscriptionperiod(
                      res.data.subscription_upgrade_details
                        .subscription_upgrade_period
                    );
                  }
                }
              }
            }
          })
        );
        setshowupgradeviewdetails(true);
      }
    }
    // setshowupgradeviewdetails(true)
  };
  // useEffect(() => {
  //   axios.get("https://dummyjson.com/products/").then((response) => {
  //     // console.log(response)
  //     setData(response.data.products);
  //   });
  // }, []);

  //   shared files pagination
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);
  const googleauthlogindetails = localStorage.getItem("googleaccesstoken");
  if (googleauthlogindetails !== "") {
    dispatch(
      getgoogleuserdetailsforupdate((res) => {
        // console.log(res)
        sessionStorage.setItem("response", res);
      })
    );
  }

  //
  if (normaluserlogindetails.is_verified === true) {
    dispatch(
      getuserdetailsforupdate((res) => {
        // console.log(res)
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
      })
    );
  } else {
    const userdetails = {
      username: normaluserlogindetails.username,
      firstname: normaluserlogindetails.Firstname,
      lastname: normaluserlogindetails.Lastname,
      country: "",
      phonenumber: "",
      email: normaluserlogindetails.email,
      profileimage: "",
      gender: "",
      fbname: normaluserlogindetails.namefb,
      fbuserid: normaluserlogindetails.useridfb,
    };
    localStorage.setItem("userdetails", JSON.stringify(userdetails));
    // console.log('count',welcomeModal);
  }

  //
  // storage space
  let totalSpace = 53687091200;
  // let spaceOcc;
  const [spaceOcc,setSpaceOcc] = useState(536870912);
  console.log(userselectedplan);
  console.log(userselectedplanperiod);
  if(userselectedplan==='Base Plan' && userselectedplanperiod === 'month'){
    totalSpace =  53687091200;
  }
  else if(userselectedplan==='Standard Plan' && userselectedplanperiod === 'month'){
    totalSpace =  64798136320;
  }
  else if(userselectedplan==='Pro Plan' && userselectedplanperiod === 'month'){
    totalSpace =  75161927680;
  }
  else if(userselectedplan==='Base Plan' && userselectedplanperiod === 'year'){
    totalSpace =  536870912000;
  }
  else if(userselectedplan==='Standard Plan' && userselectedplanperiod === 'year'){
    totalSpace =  644245094400;
  }
  else if(userselectedplan==='Pro Plan' && userselectedplanperiod === 'year'){
    totalSpace =  751619276800;
  }

  // storage space
  // handle delete func for recent files.
  const [count, setCount] = useState(0);
  useEffect(() => {
    dispatch(
      fileList((res) => {
        if ('data' in res) {
          // console.log(res.data);
          setData(res.data);
        }
      })
    )
    dispatch(
      storageRunningOut((res) => {
        if ('data' in res && res.status === 200) {
          console.log(res)
          // const tempValue= Math.round(((res.data.converted_file_size+res.data.uploaded_file_size)/totalSpace)*100);
          const tempValue = Math.round(100- ((totalSpace/res.data.remaining_space)*100))
          console.log(tempValue)
          setSpaceOcc(tempValue);
          // navigate('/standardplanchangepage')
        }
      }),
    )
  }, [count])

  const handleDeleteClick = (fileId) => {
    const someCallback = (responseOrError) => {
      if ('data' in responseOrError) {
        setCount(count + 1);
      }
      else {
        alert("Failed to delete")
      }
    };

    dispatch(deleteFile(fileId, someCallback));

  }
  //

  
  return (
    // console.log(userselectedplan),
    <div style={{ position: 'relative' }}>
      {welcomeModal && (
        <WelcomePage
          setWelcomeModal={setWelcomeModal}
        />
      )}
      <div className="main-container">
        <Commonsidebar />

        <div className="main">
          {normaluserlogindetails.user_type === 1 ? (
            <h3
              style={{
                fontSize: "30px",
                cursor: "pointer",
                color: "white",
                marginTop: "-25px",
              }}
            >
              Dashboard
            </h3>
          ) : (
            <></>
          )}
          {normaluserlogindetails.user_type === 2 ? (
            <h3
              style={{
                fontSize: "30px",
                cursor: "pointer",
                color: "white",
              }}
            >
              Admin User Dashboard
            </h3>
          ) : (
            <></>
          )}
          {normaluserlogindetails.user_type === 3 ? (
            <h3
              style={{
                fontSize: "30px",
                cursor: "pointer",
                color: "white",
              }}
            >
              Business User Dashboard
            </h3>
          ) : (
            <></>
          )}

          <div className="box-container">
            <div className="box box1">
              <div className="text">
                <h2 className="topic-heading">102</h2>
                <h2 className="topic">Input Files</h2>
              </div>
              <i
                className="fa fa-file-pdf-o"
                style={{ fontSize: "30px", color: "white" }}
              ></i>
            </div>

            <div className="box box2">
              {userselectedplan ? (
                <div className="text">
                  <h2 className="topic-heading">
                    {" "}
                    {userselectedplan}
                    <br></br>
                    {userselectedplanperiod}
                  </h2>
                  <h2 className="topic">
                    <a
                      href="#"
                      onClick={viewcurrentplandetail}
                      target="dashboard"
                      className="topic"
                      style={{ color: "white" }}
                    >
                      <h2 className="topic">View Current Plan Details</h2>
                    </a>
                  </h2>
                </div>
              ) : (
                <div className="text">
                  <h2 className="topic-heading isDisabled">0</h2>
                  <h2 className="topic isDisabled">Subscription</h2>
                </div>
              )}
              {userselectedplan ? (
                <i
                  className="fa fa-money "
                  style={{ fontSize: "30px", color: "white" }}
                ></i>
              ) : (
                <i
                  className="fa fa-money isDisabled"
                  style={{ fontSize: "30px", color: "white" }}
                ></i>
              )}
            </div>
            <div className="box box3">
              <div className="text">
                {userselectedplan === "Base Plan" &&
                  userselectedplanperiod === "month" ? (
                  <div className="text">
                    <a
                      href="#"
                      // onClick={sharedfilepage}
                      onClick={viewupgradedetail}
                      target="dashboard"
                      className="topic-heading"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <h2 className="topic-heading">Upgrade Details</h2>
                    </a>
                    <a
                      href="#"
                      // onClick={deletedfilepage}
                      onClick={viewupgradeplandetails}
                      target="dashboard"
                      className="topic "
                      style={{ color: "white" }}
                    >
                      <h2 className="topic">View Upgrade Details</h2>
                    </a>
                  </div>
                ) : (
                  <></>
                )}
                {userselectedplan === "Standard Plan" &&
                  userselectedplanperiod === "month" ? (
                  <div className="text">
                    <a
                      href="#"
                      // onClick={sharedfilepage}
                      onClick={viewstandardupgradedetail}
                      target="dashboard"
                      className="topic-heading"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <h2 className="topic-heading">Upgrade Details</h2>
                    </a>
                    <a
                      href="#"
                      // onClick={deletedfilepage}
                      onClick={viewupgradeplandetails}
                      target="dashboard"
                      className="topic "
                      style={{ color: "white" }}
                    >
                      <h2 className="topic">View Upgrade Details</h2>
                    </a>
                  </div>
                ) : (
                  <></>
                )}

                {userselectedplan === "Pro Plan" &&
                  userselectedplanperiod === "month" ? (
                  <div className="text">
                    <a
                      href="#"
                      // onClick={sharedfilepage}
                      onClick={viewproplanupgradedetail}
                      target="dashboard"
                      className="topic-heading"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <h2 className="topic-heading">Upgrade Details</h2>
                    </a>
                    <a
                      href="#"
                      // onClick={deletedfilepage}
                      onClick={viewupgradeplandetails}
                      target="dashboard"
                      className="topic "
                      style={{ color: "white" }}
                    >
                      <h2 className="topic">View Upgrade Details</h2>
                    </a>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              {userselectedplan && userselectedplanperiod === "month" ? (
                <i
                  className="fa fa-money "
                  style={{ fontSize: "30px", color: "white" }}
                ></i>
              ) : (
                <>
                  <a
                    href="#"
                    // onClick={sharedfilepage}
                    onClick={viewupgradedetail}
                    target="dashboard"
                    className="topic-heading isDisabled"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <h2 className="topic-heading">Upgrade Details</h2>
                  </a>
                  <i
                    className="fa fa-money isDisabled"
                    style={{ fontSize: "30px", color: "white" }}
                  ></i>
                </>
              )}
              {/* {upgradestatus ? (
                <>
                  <a
                    href="#"
                    // onClick={sharedfilepage}
                    onClick={viewupgradedetail}
                    target="dashboard"
                    className="topic-heading isDisabled"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    <h2 className="topic-heading">Upgrade Details</h2>
                  </a>
                  <i
                    className="fa fa-money isDisabled"
                    style={{ fontSize: '30px', color: 'white' }}
                  ></i>
                </>
              ) : (
                <></>
              )} */}
            </div>
            <div className="box box4">
              <div className="text">
                {userselectedplan && userselectedplanperiod === "year" ? (
                  <div className="text">
                    <a
                      href="#"
                      // onClick={sharedfilepage}
                      onClick={degradeplan}
                      target="dashboard"
                      className="topic-heading"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <h2 className="topic-heading">Degrade Details</h2>
                    </a>
                    <a
                      href="#"
                      // onClick={deletedfilepage}
                      onClick={viewupgradeplandetails}
                      target="dashboard"
                      className="topic "
                      style={{ color: "white" }}
                    >
                      <h2 className="topic">View Degrade Details</h2>
                    </a>
                  </div>
                ) : (
                  <div className="text">
                    <a
                      href="#"
                      // onClick={sharedfilepage}
                      // onClick={viewupgradedetail}
                      target="dashboard"
                      className="topic-heading isDisabled"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <h2 className="topic-heading isDisabled">
                        Degrade Details
                      </h2>
                    </a>
                  </div>
                )}
              </div>
              {userselectedplan && userselectedplanperiod === "year" ? (
                <i
                  className="fa fa-money "
                  style={{ fontSize: "30px", color: "white" }}
                ></i>
              ) : (
                <i
                  className="fa fa-money isDisabled"
                  style={{ fontSize: "30px", color: "white" }}
                ></i>
              )}
            </div>
          </div>
          <div className="skills">
            <div className="storagebar" style={{
              width:`${spaceOcc}%`,
              // width:'77%',
              maxWidth:'100%'
            }}>
              <div style={{ color: "white",marginRight:"10px" }}>Storage</div>
              <div style={{ color: "white" }}>{spaceOcc}%</div>   
            </div>
            <div className="bar">
              <div id="html-bar" style={{
                width: `${spaceOcc}%`,
                // width:'84%',
                maxWidth:'100%',
                animation: "html-fill 2s ease-in-out forwards"
              }}></div>
            </div>
          </div>
          <div>
            <Currentplanviewdetailsmodal
              closecurrentviewdetails={closecurrentviewdetails}
              showcurrentviewdetails={showcurrentviewdetails}
              userselectedplan={userselectedplan}
              userselectedplanperiod={userselectedplanperiod}
              currentsubscription_name={currentsubscription_name}
              subscription_current_start_period={
                subscription_current_start_period
              }
              subscription_current_end_period={subscription_current_end_period}
              currentsubscriptionstatus={currentsubscriptionstatus}
              currentsubscriptionperiod={currentsubscriptionperiod}
            ></Currentplanviewdetailsmodal>
          </div>
          <div>
            <Upgradeviewmodal
              planname={"Base Plan"}
              closeupgradeview={closeupgradeview}
              showupgradeview={showupgradeview}
              userselectedplan={userselectedplan}
              userselectedplanperiod={userselectedplanperiod}
            ></Upgradeviewmodal>
          </div>
          <Upgradestandardplanviewmodal
            planname={"Standard Plan"}
            closestandardplanupgradeview={closestandardplanupgradeview}
            showstandardplanupgradeview={showstandardplanupgradeview}
            userselectedplan={userselectedplan}
            userselectedplanperiod={userselectedplanperiod}
          ></Upgradestandardplanviewmodal>
          <Upgradeproplanviewmodal
            planname={"Pro Plan"}
            userselectedplan={userselectedplan}
            userselectedplanperiod={userselectedplanperiod}
            closeproplanupgradeview={closeproplanupgradeview}
            showproplanupgradeview={showproplanupgradeview}
          ></Upgradeproplanviewmodal>
          <div>
            <Upgradeviewdetailsmodal
              closeupgradeviewdetails={closeupgradeviewdetails}
              showupgradeviewdetails={showupgradeviewdetails}
              userselectedplan={userselectedplan}
              userselectedplanperiod={userselectedplanperiod}
              subscription_name={subscription_name}
              subscription_upgraded_start_period={
                subscription_upgraded_start_period
              }
              subscription_upgraded_end_period={subscription_upgraded_end_period}
              subscriptionstatus={subscriptionstatus}
              subscriptionperiod={subscriptionperiod}
            ></Upgradeviewdetailsmodal>
          </div>

          <div className="report-container" style={{ marginTop: "15px" }}>
            <h5
              style={{
                color: "white",
                marginBottom: "10px",
                paddingTop: "10px",
              }}
            >
              Recent Files
            </h5>
            <RecentFileRecords data={currentRecords} handleDeleteClick={handleDeleteClick} />
            {/* <UploadedPagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          /> */}
          </div>
        </div>
        <AvatarSubMenu />
      </div>
    </div>

  );
}
export default Homepageuser;
