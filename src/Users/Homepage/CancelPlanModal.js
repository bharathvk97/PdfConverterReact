import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import AvatarSubMenu from './AvatarAndSubMenus'
import { Link, json } from 'react-router-dom'
import Commonsidebar from './SidebarAndMenus/Commonsidebar'
import {
    cancelselectedplan,
    getuserdetailsforupdate,
    viewcurrentplanadedetails
} from '../../Redux/Action/ActionCreator'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function CancelPlanModal() {
    const [subDetails, setSubDetails] = useState("");
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    let normaluserlogindetails = JSON.parse(
        localStorage.getItem('normaluserlogindetails'),
    )
    const [userPlan, setUserPlan] = useState({ name: "", period: "" });

    //
    const dispatch = useDispatch()
    let accessToken = localStorage.getItem('accesstoken');
    useEffect(() => {

        dispatch(
            viewcurrentplanadedetails((res) => {
                // console.log(res.data['Subscription Details']);
                if ('data' in res) {
                    setSubDetails(res.data['Subscription Details'])
                }

            }
            )
        )
    }, [])
    const cancelplan = (e) => {
        e.preventDefault()
        // const access_token = normaluserlogindetails.normaluser_accesstoken
        if (accessToken !== '') {
            dispatch(
                cancelselectedplan((res) => {
                    if ('data' in res) {
                        if (res.data['sucess_url'] !== '') {
                            navigate('/cancelsubscription')
                        }
                    }
                }),
            )
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
                            // maxWidth:"1000px"
                        }}
                    >
                        {/*  */}
                        {/*  */}
                        <p
                            id="message-success"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                textAlign: "center"
                            }}
                        >
                            {" "}
                            Cancellation of Subscription Plan{" "}
                        </p>{" "}
                        <div style={{ paddingTop: "25px", paddingLeft: "10px" }}>

                            <p
                                id="message"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                Hi {normaluserlogindetails.username}, we appreciate your continued support as a valued subscriber of our {subDetails.subscription_name}.
                                We understand that circumstances change, and we want to make sure you have the flexibility to manage your subscription as needed. If you wish to cancel your subscription plan, please review the following details:

                            </p>{' '}
                        </div>
                        {/* sub details */}
                        <div style={{ paddingTop: "25px", paddingLeft: "10px" }}>
                            <p
                                id="message"
                                style={{
                                    // display: 'flex',
                                    // justifyContent: 'center',
                                }}
                            >
                                Subscription Details:
                                <ul>
                                    <li>Subscription Name: {subDetails.subscription_name}</li>
                                    <li>Subscription Plan Period: {subDetails.subscription_period}</li>
                                    <li>Plan Taken Date: {subDetails.subscription_start_date}</li>
                                    <li>Plan End Date: {subDetails.subscription_end_date}</li>
                                    <li>Plan Status: {subDetails.subscription_status}</li>
                                </ul>
                            </p>{' '}
                        </div>

                        <div style={{ paddingTop: "25px", paddingLeft: "10px" }}>

                            <p
                                id="message"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                Please be aware that cancelling your subscription means that you will lose access to all the benefits and features of the {subDetails.subscription_name} after the plan end date.

                            </p>{' '}
                        </div>
                        <div style={{ paddingTop: "25px", paddingLeft: "10px" }}>

                            <p
                                id="message"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                If there's anything we can do to improve your experience with our service or if you're considering a different plan that might better suit your needs, please let us know. We're here to help!
                            </p>{' '}
                        </div>
                        <div style={{ paddingTop: "25px", paddingLeft: "10px" }}>

                            <p
                                id="message"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                If there's anything we can do to improve your experience with our service or if you're considering a different plan that might better suit your needs, please let us know. We're here to help!
                            </p>{' '}
                        </div>
                        <div style={{ paddingTop: "25px", paddingLeft: "10px" }}>

                            <p
                                id="message"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                Once again, thank you for choosing Convertle. We hope to serve you again in the future.
                            </p>{' '}
                        </div>
                        {/* are you sure container */}
                        <div className="mains">
                            <div
                                className="subscriptionreport-container-change"
                                style={{
                                    marginTop: "80px",
                                    // marginLeft: "-10px",
                                    paddingBottom: "50px",
                                    maxWidth: "1000px",
                                    marginLeft: "auto",
                                    marginRight: "auto"
                                }}
                            >
                                <p
                                    id="message-success"
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        textAlign: "center"
                                    }}
                                >
                                    {" "}
                                    Are you sure you want to cancel the current Plan?{" "}
                                </p>{" "}
                                <div style={{ paddingTop: "25px", paddingLeft: "10px" }}>

                                    <p
                                        id="message"
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            textAlign:"center",
                                        }}
                                    >
                                        This action cannot be undone and you will be unable to recover any data </p>{' '}
                                </div>


                                <div className="cancelplan-btn-div" style={{display:"flex",
                                gap:"40px"
                                
                            }}>
                                    <Button
                                        id="cancelplan-btn"
                                        onClick={() => { navigate('/homepageuser') }}
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
                                    </Button>{" "}
                                    <Button
                                        id="cancelplan-btn"
                                        onClick={cancelplan}
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
                                    </Button>{" "}
                                </div>
                            </div>{" "}
                        </div>
                        {/*  */}
                    </div>{" "}
                </div>

                <AvatarSubMenu />
            </div>
        </div>
    )
}
export default CancelPlanModal
