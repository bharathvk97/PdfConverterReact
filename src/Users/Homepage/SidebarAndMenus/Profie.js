import React, { useState, useRef, useMemo, useEffect } from "react";
import Commonsidebar from "./Commonsidebar";
import AvatarSubMenu from "../AvatarAndSubMenus";
import { useNavigate } from "react-router-dom";
import {
  updateuserprofile,
  getuserdetailsforupdate,
  updateuserprofileimage,
} from "../../../Redux/Action/ActionCreator";
import { useDispatch } from "react-redux";
import countryList from "react-select-country-list";
import Select from "react-select";
import AccountDeleteModal from "./AccountDeleteModal";
// import avatar from '../../../img/Avatar-Profile-Vector-PNG-Cutout.png'
import avatar from "../../../img/Avatar-Profile-Vector-PNG-Cutout.png";

// 195 to 83 line

function Profile() {
  const [avatarlogo, setavatarlogo] = useState('')
  const dispatch = useDispatch();
  const options = useMemo(() => countryList().getData(), []);
  const [country, setCountry] = useState("");
  const [selectvaluechange, setSelectvaluechange] = useState("");
  let userdetails = JSON.parse(localStorage.getItem("userdetails"));

  const [profileupdatedstatus, setProfileupdatedstatus] = useState("");
  const inputRef = useRef(null);
  const baseurl = process.env.REACT_APP_API_BASE_URL;
  // const [imageurl, setimageurl] = useState('')
  // const [showfirstname, setshowfirstname] = useState(false)
  // const [showlastname, setshowlastname] = useState(false)
  // const [showcountryfield, setshowcountryfield] = useState(false)
  // const [showfbname, setfbname] = useState(false)
  // const [showfbuserid, setshowfbuserid] = useState(false)
  // const [showgender, setshowgender] = useState(false)
  // const [showphonenumber, setshowphonenumber] = useState(false)
  // const [showprofileimage, setshowprofileimage] = useState(false)
  // const [showusername, setshowusername] = useState(false)

  // let normaluserlogindetails = JSON.parse(
  //   localStorage.getItem('normaluserlogindetails'),
  // )
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
    fbname: "",
    fbuserid: "",
  });
  useEffect(() => {
    dispatch(
      getuserdetailsforupdate((res) => {
        console.log(res);
        if (res?.data) {
          const userdetails = {
            username: res.data.data['username'],
            firstname: res.data.data['firstname'],
            lastname: res.data.data['lastname'],
            country: res.data.data['country'],
            phonenumber: res.data.data['phonenumber'],
            email: res.data.data['email'],
            profileimage: res.data.data['image'],
            gender: res.data.data['gender'],
            subscription_name: res.data['subscription_name'],
            subscription_status: res.data['subscription_status'],
            subscription_period: res.data['subscribtion_period'],
            fbname: '',
            fbuserid: '',
          }
          setavatarlogo(res.data.data['image'])
          localStorage.setItem('userdetails', JSON.stringify(userdetails))
        }
      }),
    )
  }, [])
  const [selectedImage, setSelectedImage] = useState(null);
  // if (localStorage.getItem('userdetails')) {
  //   let userdetails = JSON.parse(localStorage.getItem('userdetails'))
  //   sessio
  // }

  // if (localStorage.getItem('accountupdated')) {
  //   let userprofileupdationstatus = JSON.parse(
  //     localStorage.getItem('userdetails'),
  //   )
  // }
  // const [selectedOption, setSelectedOption] = useState('none')
  // const [profileimage, setProfileimage] = useState(null)
  const [selectimagestatus, setselectimagestatus] = useState(false);
  const navigate = useNavigate();
  const changePassword = () => {
    navigate("/changepassword");
  };
  // function menuToggle() {
  //  return(<input type="text" name="file"/>)
  // }
  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setName({ ...statename, [name]: value });
  };
  function insertobject(arr, obj) {
    arr.push(obj.label);
    arr.splice(1);
    arr[0] = obj.label;
    statename.country = arr[0];

    setSelectvaluechange(statename.country);
  }
  const changeHandler = (country) => {
    setCountry(country);

    setSelectvaluechange(country);
    const value = country.label;
    const name = country.value;
    sessionStorage.setItem("name", name);
    setCountry({ ...country, value });
    // setSelecvaluechange()
    insertobject(statename.countryobj, country);
  };
  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    statename.profile_image = fileObj;
    setselectimagestatus(true);
    statename.pdfconverter_dp = fileObj;
    setSelectedImage(URL.createObjectURL(statename.pdfconverter_dp));
    var formData = new FormData();
    formData.append("image_url", statename.profile_image);

    dispatch(
      updateuserprofileimage(formData, (imageres) => {
        setProfileupdatedstatus("profile updated successfully");
        dispatch(
          getuserdetailsforupdate((res) => {
            const userdetails = {
              username: res.data.data["username"],
              firstname: res.data.data["firstname"],
              lastname: res.data.data["lastname"],
              country: res.data.data["country"],
              phonenumber: res.data.data["phonenumber"],
              email: res.data.data["email"],
              profileimage: res.data.data["image"],
              gender: res.data.data["gender"],
              pdfconverter_dp: res.data.data["image"],
              fbname: "",
              fbuserid: "",
            };
            setavatarlogo(res.data.data['image']);
            localStorage.setItem("userdetails", JSON.stringify(userdetails));
          })
        );
      })
    );
  };
  const [accountDelete, setAccountDelete] = useState(false);
  const deleteaccount = (e) => {
    e.preventDefault();
    setAccountDelete(true);
  };
  const updateprofile = (ev) => {
    ev.preventDefault();

    var formData = new FormData();
    formData.append("first_name", statename.firstname);
    formData.append("last_name", statename.lastname);
    formData.append("phone_no", statename.phonenumber);
    formData.append("country", statename.country);

    dispatch(
      updateuserprofile(formData, (datares) => {
        if (datares !== "") {
          // console.log(datares)
        }
        dispatch(
          getuserdetailsforupdate((res) => {
            // console.log(res);
            const userdetails = {
              username: res.data.data["username"],
              firstname: res.data.data["firstname"],
              lastname: res.data.data["lastname"],
              country: res.data.data["country"],
              phonenumber: res.data.data["phonenumber"],
              email: res.data.data["email"],
              profileimage: res.data.data["image"],
              gender: res.data["gender"],
              pdfconverter_dp: res.data.data["image"],
              fbname: "",
              fbuserid: "",
            };
            localStorage.setItem("userdetails", JSON.stringify(userdetails));
          })
        );
        setProfileupdatedstatus("profile updated successfully");
      })
    );
  };
  // console.log(avatarlogo);
  return (
    // console.log("avtar",ava)
    <div className="main-container">
      <Commonsidebar />
      <div className="main">
        <div
          className="profileditreport-container"
          style={{ marginTop: "37px" }}
        >
          {" "}
          {accountDelete ? <AccountDeleteModal setAccountDelete={setAccountDelete} /> : <></>}
          <div style={{ display: "flex", alignItems: "center" }}>
            <h5
              style={{
                color: "white",
                marginLeft: "10px",
                marginTop: "16px",
              }}
            >
              Account Settings
            </h5>
            {selectimagestatus === false ? (
              <div
                className="profile"
                style={{
                  float: "none",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginLeft: "auto",
                  objectFit: "cover",
                  marginTop: "15px",
                  marginRight: "14px",
                }}
              >
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  ref={inputRef}
                />
                <label htmlFor="file">
                  {avatarlogo.includes('90440_') || avatarlogo === '/media/avataar.png' ? (
                    <img alt="" src={avatar} style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }} />
                  ) : (
                    <img alt="" src={baseurl + avatarlogo} style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }} />
                  )}{' '}
                </label>
              </div>
            ) : (
              <div
                className="profile"
                style={{
                  float: "none",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginLeft: "auto",
                  objectFit: "cover",
                  marginTop: "15px",
                  marginRight: "14px",
                }}
              >
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  ref={inputRef}
                />
                <label htmlFor="file">
                  {avatarlogo === '/media/images/90440_GvPfrdv.jpg' || avatarlogo === '/media/avataar.png' ? (
                    <img alt="" src={avatar} style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }} />
                  ) : (
                    <img alt="" src={baseurl + avatarlogo} style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }} />
                  )}{' '}
                  {/* <img
                    src={selectedImage}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }} */}
                  {/* alt="profile image" */}
                  {/* /> */}
                </label>
              </div>
            )}
          </div>
          <form className="formprofileedit" onSubmit={updateprofile}>
            {profileupdatedstatus ? (
              <h6
                style={{
                  color: '#4BB543',
                  marginTop: '-2px',
                  marginLeft: '14px',
                }}
              >
                Profile updated successfully
              </h6>
            ) : (
              <></>
            )}
            {/* <div className="formreg1 first"> */}
            <div className="details">
              <div className="fields" style={{ marginTop: "-10px" }}>
                <div className="input-field">
                  <label style={{ fontWeight: "bold", color: "white" }}>
                    Username<sup className="text-danger">*</sup>
                  </label>
                  {userdetails.fbname !== "" ? (
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      value={userdetails.fbname}
                      onChange={handleInputChange}
                      disabled
                      style={{ backgroundColor: "#ccc" }}
                    />
                  ) : (
                    <>
                      {userdetails.username === "" ? (
                        <input
                          type="text"
                          name="username"
                          placeholder="Enter your username"
                          value={statename.username}
                          onChange={handleInputChange}
                          disabled
                          style={{ backgroundColor: "#ccc" }}
                        />
                      ) : (
                        <>
                          <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            value={statename.username}
                            onChange={handleInputChange}
                            disabled
                            style={{ backgroundColor: "#ccc" }}
                          />
                        </>
                      )}
                    </>
                  )}
                </div>

                <div className="input-field">
                  <label style={{ fontWeight: "bold", color: "white" }}>
                    Email<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={statename.email}
                    onChange={handleInputChange}
                    disabled
                    style={{ backgroundColor: "#ccc" }}
                  />
                </div>

                <div className="input-field">
                  <label style={{ fontWeight: "bold", color: "white" }}>
                    First Name<sup className="text-danger">*</sup>
                  </label>
                  <input
                    name="firstname"
                    type="text"
                    placeholder="Enter your firstname"
                    value={statename.firstname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-field">
                  <label style={{ fontWeight: "bold", color: "white" }}>
                    Last Name<sup className="text-danger">*</sup>
                  </label>
                  <input
                    name="lastname"
                    type="text"
                    placeholder="Enter your lastname"
                    value={statename.lastname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-field">
                  <label style={{ fontWeight: "bold", color: "white" }}>
                    Phone Number<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="text"
                    name="phonenumber"
                    placeholder="Enter your number"
                    value={statename.phonenumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-field">
                  <label style={{ fontWeight: "bold", color: "white" }}>
                    Country<sup className="text-danger">*</sup>
                  </label>
                  {selectvaluechange ? (
                    <Select
                      options={options}
                      value={country}
                      onChange={changeHandler}
                    />
                  ) : (
                    <>
                      <Select
                        options={options}
                        onChange={changeHandler}
                        value={options.filter(function (option) {
                          return option.label === statename.country;
                        })}
                        label="Single select"
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="buttonsignup">
              <input
                type="submit"
                value="Update Profile"
                className="btn btn-success updateprofilebutton"
              />
            </div>
            <div className="buttonsignup">
              <button
                name="signin"
                className="btn btn-primary updateprofilebutton"
                onClick={changePassword}
              >
                Change Password
              </button>
            </div>
            <div className="buttonsignup">
              <button
                name="deleteaccount"
                className="btn btn-danger updateprofilebutton"
                onClick={deleteaccount}
              >
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <AvatarSubMenu />
    </div>
  );
}
export default Profile;
