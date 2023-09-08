import React, { useState, useEffect } from 'react'
import AvatarSubMenu from '../AvatarAndSubMenus'
import axios from 'axios'
import UploadedPagination from './UploadedPagination'
import RecentFileRecords from './RecentFileRecords'
import Commonsidebar from './Commonsidebar'
import SharedFilleRecords from"./SharedFilleRecords"
function SharedFiles() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(5)
  useEffect(() => {
    axios.get('https://dummyjson.com/products/').then((response) => {
      setData(response.data.products)
    })
  }, [])
  //   shared files pagination
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(data.length / recordsPerPage)
  return (
    <div className="main-container">
      <Commonsidebar />
      <div className="main">
        <div className="report-container" style={{ marginTop: '45px' }}>
          <h5
            style={{ color: 'white', marginBottom: '10px', paddingTop: '10px' }}
          >
            Shared Files
          </h5>
          <SharedFilleRecords data={currentRecords} />
          <UploadedPagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <AvatarSubMenu />
    </div>
  )
}
export default SharedFiles
