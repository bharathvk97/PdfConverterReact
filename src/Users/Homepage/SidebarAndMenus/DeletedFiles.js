import React, { useState, useEffect } from "react";
import AvatarSubMenu from "../AvatarAndSubMenus";
import axios from "axios";
import UploadedPagination from "./UploadedPagination";
import Commonsidebar from "./Commonsidebar";
import RecentFileRecords from "./RecentFileRecords";
import DeletedRecords from "./DeletedRecords";
import { ConfirmDeleteFile, convertedFileConfirmDeletion, convertedFilerestore, fileList, restoreFile } from "../../../Redux/Action/ActionCreator";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";

function DeletedFiles() {


  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(7);

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(
      fileList((res) => {
        if ('data' in res) {
          // console.log(data);
          setData(res.data);
        }
      })
    )

  }, [count])

  const handleRestoreClick = (fileId) => {
    console.log(fileId)
    const someCallback = (responseOrError) => {
      // console.log(responseOrError)
      if ('data' in responseOrError) {
        setCount(count + 1);
        // alert('Successfully Restored');
      } else {
        alert('Restore failed');
      }
    };

    dispatch(restoreFile(fileId, someCallback));
  }

  const handleDeleteClick = (fileId) => {
    const someCallback = (responseOrError) => {
      if ('data' in responseOrError) {
        setCount(count + 1);
      }
      else {
        alert("Failed to delete")
      }
    };

    dispatch(ConfirmDeleteFile(fileId, someCallback));

  }
  const handleConvertedFileRestore = (fileId) => {
    // console.log(fileId)
    const someCallback = (responseOrError) => {
      // console.log(responseOrError)
      if ('data' in responseOrError) {
        setCount(count+1);
        // alert('Successfully Restored');
      } else {
        alert('Restore failed');
      }
    };
  
    dispatch(convertedFilerestore(fileId, someCallback));
  }
// confirm deletion converted file
const handleConvertedFileConfirmDeletion = (fileId) => {
  // console.log(fileId)
  const someCallback = (responseOrError) => {
    // console.log(responseOrError)
    if ('data' in responseOrError) {
      setCount(count+1);
      // alert('Successfully Restored');
    } else {
      alert('Restore failed');
    }
  };

  dispatch(convertedFileConfirmDeletion(fileId, someCallback));
}

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  // btn states for deleted items
  const [isDeleted,setIsDeleted]= useState(1);
  return (
    <div className="main-container">
      <Commonsidebar />
      <div className="main">
        {/* btn */}
        <div className='btnContainer' style={{ marginBottom: "40px" ,display:"flex",gap:"20px"}}>
          <div>
            <Button
            
              id="cancelplan-btn"
              onClick={() => {setIsDeleted(1)}}
              variant="outline-info"
              style={{
                color: "white",
                backgroundColor:`${isDeleted===1?"#0d0d0d":"rgba(19, 19, 19, 0.45)"}`,
                // fontSize: "10px",
                borderRadius: "30px",
                padding: "0.8rem 3rem",
              }}
              className="btn-for-stnd"
            >
              Uploaded{" "}
            </Button>{" "}
          </div>
          <div>
            <Button
              id="cancelplan-btn"
              onClick={() => { setIsDeleted(2) }}
              variant="outline-info"
              style={{
                color: "white",
                backgroundColor:`${isDeleted===2?"#0d0d0d":"rgba(19, 19, 19, 0.45)"}`,
                // fontSize: "10px",
                borderRadius: "30px",
                padding: "0.8rem 3rem",
              }}
              className="btn-for-stnd"
            >
              Converted{" "}
            </Button>{" "}
          </div>
        </div>
        {/* btn */}
        <div className="report-container" style={{ marginTop: "45px" }}>
          <h5
            style={{ color: "white", marginBottom: "10px", paddingTop: "10px" }}
          >
            Deleted Files
          </h5>
          {/* <RecentFileRecords data={currentRecords} /> */}
          <DeletedRecords data={data} handleRestoreClick={handleRestoreClick} handleDeleteClick={handleDeleteClick} isDeleted={isDeleted} handleConvertedFileRestore={handleConvertedFileRestore} handleConvertedFileConfirmDeletion={handleConvertedFileConfirmDeletion}/>
          <UploadedPagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <AvatarSubMenu />
    </div>
  );
}
export default DeletedFiles;
