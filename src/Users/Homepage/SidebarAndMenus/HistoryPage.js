import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UploadedPagination from './UploadedPagination'
import AvatarSubMenu from '../AvatarAndSubMenus'
import ConvertedRecords from './ConvertedRecords'
import ConvertedPagination from './ConvertedPagination'
import Commonsidebar from './Commonsidebar'
import RecentFileRecords from './RecentFileRecords'
import { convertedfileslist, fileList } from '../../../Redux/Action/ActionCreator'
import { useDispatch } from 'react-redux'
import UploadedRecords from './UploadedRecords'

import FileViewer from 'react-file-viewer'
const baseurl = process.env.REACT_APP_API_BASE_URL


function History() {
  const [data, setData] = useState([])
  const [converteddata, setconverteddata] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(5)
  const dispatch = useDispatch()
  // console.log(localStorage.getItem('converteddocfile'))
  const [convertcurrentPage, setconvertCurrentPage] = useState(1)
  const [convertrecordsPerPage] = useState(5)
  const [count,setCount]=useState(0);
  useEffect(() => {
    // axios.get('https://dummyjson.com/products/').then((response) => {
    //   // setData(response.data.products)
    //   // console.log(data);
    // })
    dispatch(
      convertedfileslist((res) => {
        // console.log(res)
        // console.log(res)
        if ('data' in res) {
          setconverteddata(res.data.data)
        }
      }),
      dispatch(
        fileList((res)=>{
          if('data' in res){
            console.log(res.data);
            setData(res.data);
          }
        })
      )
    )
  }, [count])

  //   uploaded pagination
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  // const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord)
  // const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(data.length / recordsPerPage)
  // converted
  const indexOfLastRecordconvert = convertcurrentPage * convertrecordsPerPage
  const indexOfFirstRecordconvert =
    indexOfLastRecordconvert - convertrecordsPerPage
  const currentRecordsconvert = converteddata.slice(
    indexOfFirstRecordconvert,
    indexOfLastRecordconvert,
  )
  // console.log(currentRecordsconvert);
  // console.log(currentRecordsconvert);
  const convertnPages = Math.ceil(converteddata.length / convertrecordsPerPage)

  return (
    <div className="main-container">
      <Commonsidebar />
      <div className="main">
        <div className="report-container" style={{ marginTop: '45px' }}>
          <h5
            style={{ color: 'white', marginBottom: '10px', paddingTop: '10px' }}
          >
            Uploaded Files
          </h5>
          {/* {/ <RecentFileRecords data={currentRecords} /> /} */}
          {/* {/  /} */}
          <UploadedRecords data={data} count={count} setCount={setCount}/>
          {/* {/  /} */}
          <UploadedPagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="report-container" style={{ marginTop: '45px' }}>
          <h5
            style={{ color: 'white', marginBottom: '10px', paddingTop: '10px' }}
          >
            Converted Files
          </h5>
          {/* {/ <ConvertedRecords data={currentRecordsconvert} /> /} */}
          <ConvertedRecords data={data} setCount={setCount} count={count}/>
          <ConvertedPagination
            nPages={convertnPages}
            currentPage={convertcurrentPage}
            setCurrentPage={setconvertCurrentPage}
          />
        </div>
      </div>
      <AvatarSubMenu />
    </div>
  )
}

export default History
