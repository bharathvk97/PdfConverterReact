import Commonsidebar from './Commonsidebar'
import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import AvatarSubMenu from '../AvatarAndSubMenus'
import UserDrag_drop from './Userfile_drag_drop'
import { storageRunningOut } from '../../../Redux/Action/ActionCreator'
import { useDispatch } from 'react-redux'
import StorageRunningOutModal from '../StorageRunningOutModal'

function Uploadfiles() {
  const onFilechange = (files) => {
    // console.log(files)
  }
   // storage space api code
   const dispatch = useDispatch()
   let accessToken = localStorage.getItem('accesstoken');
      const [isModalOpen,setIsModalOpen]= useState(false);
      
  //  const [userselectedplan, setuserselectedplan] = useState('')
  //  const [userselectedplanperiod, setuserselectedplanperiod] = useState('')
 
   const checkStorage = () => {
       // console.log(access_token,"access");
       // console.log("access token",accessToken);
       if (accessToken !== '') {
         dispatch(
           storageRunningOut((res) => {
             if ('data' in res && res.status === 200 && res.data === "your storage space has reached 90%, upgrade to any higher plan if you need more space, click on this link http://0.0.0.0:81membership_api/base-plan-subscription-creation-view/") {
               console.log(res,"storageResponse")
               setIsModalOpen(true);
               // navigate('/standardplanchangepage')
             }
           }),
         )
       }
     }
     useEffect(()=>{
       checkStorage();
     },[])
  //
  return (
    <div className="main-container">
      <Commonsidebar />
      <div className="main">
        <div style={{ width: '100%', marginTop: '150px',}}>
          {isModalOpen?<StorageRunningOutModal setIsModalOpen={setIsModalOpen}/>:
          <UserDrag_drop onFilechange={(files) => onFilechange(files)} />
          }
          <AvatarSubMenu />
        </div>
      </div>
    </div>
  )
}
Uploadfiles.propTypes = {
  onFilechange: propTypes.func,
}

export default Uploadfiles
