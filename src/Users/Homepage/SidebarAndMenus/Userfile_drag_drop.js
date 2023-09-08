import React, { useEffect, useRef, useState } from "react";
import dcloudicn from "./../../../img/icon _cloud-download_.svg";
import { ImageConfig } from "../../../ImageConfig";
import { Icon } from "@iconify/react";
import { pdfjs } from "react-pdf/dist/esm/entry.webpack";
import Fileuserpreview from "./Filepreviewuser";
// import { useDispatch } from 'react-redux'
import {
  storageRunningOut,
  uploadfile,
} from "../../../Redux/Action/ActionCreator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function UserDrag_drop(props) {
  const [fileList, setFileList] = useState([]);
  const [isDisable, setIsDisable] = useState(true);
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  const onDragEnter = () => wrapperRef.current.classList.add("dradover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dradover");
  const onDrop = () => wrapperRef.current.classList.remove("dradover");

  let normaluserlogindetails = JSON.parse(
    localStorage.getItem("normaluserlogindetails")
  );

  let details = JSON.parse(localStorage.getItem("userdetails"));
  // console.log(details);

useEffect(() => {
  if (details.subscription_status === "active") {
    setIsDisable(false);
  }

}, [])

  let accessToken = localStorage.getItem("accesstoken");
  const navigate = useNavigate();
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFilechange(updatedList);
    }
    // fileList.length > 0 ? Setshow(true) : Setshow(false)
  };
  const [isLoading, setIsLoading] = useState(false);
  const [fileUpload , setFileUpload] = useState(false)
  const uploadfiles = () => {
    checkStorage();
    setIsLoading(true);
    // e.preventDefault()
    // alert('uploaded succes

    // alert(fileList)
    // const newFile = e.target.files[0]
    if (fileList) {
      // const updatedList = [...fileList, newFile]
      // setFileList(updatedList)
      // props.onFilechange(updatedList)
      // console.log(updatedList)
      const access_token = normaluserlogindetails.normaluser_accesstoken;

      const data = new FormData();
      fileList.forEach((file, i) => {
        data.append(`file-${i}`, file);
        console.log(data);
        var formData = new FormData();
        formData.append("uploaded_file", file);
        formData.append("remark", "test");
        if (access_token !== "") {
          console.log(`file-${i}`, file);
          dispatch(
            uploadfile(formData, (res) => {
              console.log(res)
              if (res.data) {
                if (
                  res.data[0].status === "File uploaded successfully." &&
                  res.status === 201
                ) {
                  setIsLoading(false);
                  navigate("/fileuploadsuccess");
                }
              }
            })
          );
        }
        // console.log(`file-${i}`, file)
      });
    }
  };
  const Removeitem = (item) => {
    setShow(false);
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(item), 1);
    setFileList(updatedList);
    props.onFilechange(updatedList);
  };

  const formatSizeUnits = (bytes) => {
    if (bytes >= 1073741824) {
      bytes = (bytes / 1073741824).toFixed(2) + " GB";
    } else if (bytes >= 1048576) {
      bytes = (bytes / 1048576).toFixed(2) + " MB";
    } else if (bytes >= 1024) {
      bytes = (bytes / 1024).toFixed(2) + " KB";
    } else if (bytes > 1) {
      bytes = bytes + " bytes";
    } else if (bytes === 1) {
      bytes = bytes + " byte";
    } else {
      bytes = "0 bytes";
    }
    return bytes;
  };
  // const [previewshow, setModalPreviewShow] = useState(false)
  // console.log(previewshow)
  // console.log(setModalPreviewShow)
  // console.log(onDocumentLoadSuccess)
  // console.log(previousPage)
  // console.log(nextPage)
  // const closeModal = () => setModalPreviewShow(false)
  const [fileitem, setItem] = useState([]);
  const [show, setShow] = useState(false);
  const closePreviewModal = () => setShow(false);
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  // const [numPages, setNumPages] = useState(null)
  // const [pageNumber, setPageNumber] = useState(1)
  // console.log(numPages)
  // console.log(pageNumber)

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages)
  //   setPageNumber(1)
  // }

  // function changePage(offset) {
  //   setPageNumber((prevPageNumber) => prevPageNumber + offset)
  // }

  // function previousPage() {
  //   changePage(-1)
  // }

  // function nextPage() {
  //   changePage(1)
  // }

  const previewfile = (item) => {
    setShow(true);
    setItem(URL.createObjectURL(item));
  };

  // storage space api code
  const [userselectedplan, setuserselectedplan] = useState("");
  const [userselectedplanperiod, setuserselectedplanperiod] = useState("");

  const checkStorage = () => {
    // console.log(access_token,"access");
    // console.log("access token",accessToken);
    if (accessToken !== "") {
      dispatch(
        storageRunningOut((res) => {
          if ("data" in res && res.status === 200) {
            // console.log(res, 'res')
            // navigate('/standardplanchangepage')
          }
        })
      );
    }
  };
  //

  return (
    <div className="col-sm-10 mx-auto drag-wrap">
      <div
        className={fileList.length ? "drag-inner active" : "drag-inner"}
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <img alt="" className="cld-remove" src={dcloudicn} />
        <h4 className="cld-remove">Drag&Drop file here</h4>
        <h5 className="cld-remove">Or</h5>
        <a href="# " className="choose" style={{ padding: "3px" }}>
          Choose
        </a>
        <br></br>

        <input
          type="file"
          accept="application/pdf"
          className="file-input"
          onChange={onFileDrop}
        />
        <br></br>
        <div className="ready-uploadfiles">
          {fileList.length > 0 ? (
            <div>
              {" "}
              {!isLoading ? (
                <button
                  onClick={() => {
                    uploadfiles();
                  }}      
                  disabled = {isDisable}       
                  className="uploadfilebutton"
                >
                  <Icon
                    style={{
                      marginRight: "5px",
                      color: "white",
                      fontStyle: "bold",
                    }}
                    icon="cil-cloud-upload"
                  />{" "}
                  Upload Files
                </button>
              ) : (
                <div className="loading-bar" style={{ width: "150px" }}>
                  <div class="lds-facebook">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>{" "}
                  {/* Files */}
                </div>
              )}
              {/* uploading bar*/}
            </div>
          ) : null}
        </div>
        {fileList.length > 0 ? (
          <div className="upload-files">
             {isDisable?
             <>
             <p style={{ marginTop: "20px", color:'red' }}> Hi {details.username} <br></br>You can't upload file without taking subscription.</p>
             </>:
             <>
             <p style={{ marginTop: "20px" }}>Ready to upload</p>
             </>}
            {fileList.map((item, index) => (
              <div key={index} className="ready-files">
                <div className="ready-img">
                  <img
                    alt=""
                    src={
                      ImageConfig[item.type.split("/")[1]] ||
                      ImageConfig["default"]
                    }
                  />
                </div>
                <div className="ready-item-d">
                  <p className="item-name">{item.name}</p>{" "}
                  <p className="item-size">{formatSizeUnits(item.size)}</p>
                </div>
                <div className="ml-auto">
                  <button
                    onClick={() => {
                      previewfile(item);
                    }}
                    style={{ border: "none" }}
                    className="preview-btn"
                  >
                    <Icon
                      style={{ marginRight: "5px" }}
                      icon="ant-design:eye-filled"
                    />{" "}
                    Preview
                  </button>{" "}
                  <a href="# " className="download-btn">
                    {" "}
                    <Icon style={{ marginRight: "5px" }} icon="bxs:download" />
                    Download
                  </a>
                </div>
                <a
                  href="# "
                  className="remove-item"
                  onClick={() => {
                    Removeitem(item);
                  }}
                >
                  X
                </a>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <Fileuserpreview
          closePreviewModal={closePreviewModal}
          show={show}
          previewfile={fileitem}
        ></Fileuserpreview>
      </div>
    </div>
  );
}

export default UserDrag_drop;
