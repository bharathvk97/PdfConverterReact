import React from "react";
import whatsapp from "../../../img/whatsapp.png";
import facebook from "../../../img/fb.png";
import skype from "../../../img/skype.png";
import linkedin from "../../../img/linked-in.png";
import email from "../../../img/email.png";

function SharedFileModal({setShareModal}) {

    const handleCloseShare = () => setShareModal(false)
  return (
    <div
      className="shareModals"
      style={{
        backgroundColor: "rgba(19, 19, 19, 0.80)",
        WebkitBackdropFilter: 'blur(10.3px)',
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        marginTop:'-8rem'
      }}
    >
      <i class="fa-solid fa-xmark" onClick={handleCloseShare} style={{color:'white',cursor:'pointer', fontSize:'20px',padding:'1rem 1rem'}}></i>
        <div className="share-heading" style={{ backgroundColor: "rgba(19, 19, 19, 0.20)", color: "white", WebkitBackdropFilter: 'blur(10.3px)', padding:'1rem 2rem 0rem 2rem'}}>
        <h4 className="share-head" >
        Share via:
      </h4>
      <p style={{paddingTop:'10px'}}>
      Quickly share your converted PDF files with just a few clicks! Choose from various sharing options to effortlessly send your documents to different platforms.
      </p>
        </div>
    
      <div
        className="share-file-modal"
        style={{ backgroundColor: "rgba(19, 19, 19, 0.40)",paddingBottom:'10px' }}
      >
        <img src={whatsapp} alt="https://icons8.com/icon/16713/whatsapp" />
        <img src={facebook} alt="https://icons8.com/icon/16713/whatsapp" />
        <img src={skype} alt="https://icons8.com/icon/16713/whatsapp" />
        <img src={linkedin} alt="https://icons8.com/icon/16713/whatsapp" />
        {/* <img src={email} alt="https://icons8.com/icon/16713/whatsapp" /> */}
        <i class="fa-solid fa-envelope" style={{color:'white',fontSize:'44px'}}></i>
        
      </div>
    </div>
  );
}

export default SharedFileModal;
