import React, { useState } from 'react'
import FileViewer from 'react-file-viewer'

const RecentFileRecords = ({ data,handleDeleteClick }) => {
  const [file, setfile] = useState('')
  // console.log(data[0].split('http://0.0.0.0:81')[1])
  const baseurl = process.env.REACT_APP_API_BASE_URL
  const fileurl = process.env.REACT_APP_FILE_URL

  const handleClick = (e) => {
    // console.log(e.currentTarget)
    e.preventDefault()
    // console.log(e.currentTarget.getAttribute('data-value'))
    if (e.currentTarget.getAttribute('data-value') !== '') {
      setfile(e.currentTarget.getAttribute('data-value'))
    }
  }
  const closedocModal = (e) => {
    e.preventDefault()
    setfile('')
  }
  //
  const [shareModal, setShareModal] = useState(false)
  const handleShareModal = () => setShareModal(true)
  // const 
  const sortedData = [...data].sort((a, b) => a.id - b.id).reverse();

  // console.log(sortedData);
  return (
    <div className="table-responsive">
      <table
        className="table recentfilerecords"
        style={{
          color: 'white',
        }}
      >
        <thead>
          <tr
            style={{
              color: 'white',
            }}
          >
            <th
              scope="col"
              style={{
                color: 'white',
                background: 'none',
                // borderRadius: '16px',
                // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                // backdropFilter: ' blur(10.3px)',
                WebkitBackdropFilter: 'blur(10.3px)',
              }}
            >
              Input File
            </th>
            <th
              scope="col"
              style={{
                color: 'white',
                background: 'none',
                // borderRadius: '16px',
                // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                // backdropFilter: ' blur(10.3px)',
                WebkitBackdropFilter: 'blur(10.3px)',
              }}
            >
              Converted File
            </th>
            <th
              scope="col"
              style={{
                color: 'white',
                background: 'none',
                // borderRadius: '16px',
                // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                // backdropFilter: ' blur(10.3px)',
                WebkitBackdropFilter: 'blur(10.3px)',
              }}
            >
              Uploaded Date
            </th>
            {/* <th
              scope="col"
              style={{
                color: 'white',
                background: 'none',
                // borderRadius: '16px',
                // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                // backdropFilter: ' blur(10.3px)',
                WebkitBackdropFilter: 'blur(10.3px)',
              }}
            >
              Deleted Info
            </th> */}
            <th
              scope="col"
              style={{
                color: 'white',
                background: 'none',
                // borderRadius: '16px',
                // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                // backdropFilter: ' blur(10.3px)',
                WebkitBackdropFilter: 'blur(10.3px)',
              }}
            >
              Preview
            </th>
            <th
              scope="col"
              style={{
                color: 'white',
                background: 'none',
                // borderRadius: '16px',
                // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                // backdropFilter: ' blur(10.3px)',
                WebkitBackdropFilter: 'blur(10.3px)',
              }}
            >
              Download
            </th>
            {/* <th
              scope="col"
              style={{
                color: 'white',
                background: 'none',
                // borderRadius: '16px',
                // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                // backdropFilter: ' blur(10.3px)',
                WebkitBackdropFilter: 'blur(10.3px)',
              }}
            >
              Delete
            </th> */}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
                         !item.c_file_status || item.converted_file===null?<></>:
            <tr style={{ borderColor: 'none', borderStyle: 'none' }}>
              <td
                style={{
                  color: 'white',
                  background: 'none',
                  // borderRadius: '16px',
                  // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  // backdropFilter: ' blur(10.3px)',
                  WebkitBackdropFilter: 'blur(10.3px)',
                }}
              >
                <i
                  className="fa fa-file-pdf-o"
                  style={{
                    fontSize: '20px',
                    color: 'white',
                    cursor:'pointer'
                  }}
                ></i>
                &nbsp;
                {item.uploaded_file===null?'no data' : item.uploaded_file.split("/").at(-1).slice(2)}{' '}
              </td>
              <td
                style={{
                  color: 'white',
                  background: 'none',
                  // borderRadius: '16px',
                  // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  // backdropFilter: ' blur(10.3px)',
                  WebkitBackdropFilter: 'blur(10.3px)',
                }}
              >
                <i
                  className="fa fa-file-image-o"
                  style={{
                    fontSize: '20px',
                    color: 'white',
                  }}
                ></i>
                &nbsp;
                {item.converted_file!==null?item.converted_file.split("/").at(-1):(<>no data</>)}{' '}

              </td>
              <td
                style={{
                  color: 'white',
                  background: 'none',
                  // borderRadius: '16px',
                  // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  // backdropFilter: ' blur(10.3px)',
                  WebkitBackdropFilter: 'blur(10.3px)',
                }}
              >
                {' '}
                <i
                  className="fas fa-storage"
                  style={{
                    fontSize: '15px',
                    color: 'white',
                  }}
                ></i>
                &nbsp;
                {item.created_at.split(" ")[0]}{' '}
              </td>
              {/* <td
                style={{
                  color: 'white',
                  background: 'none',
                  // borderRadius: '16px',
                  // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  // backdropFilter: ' blur(10.3px)',
                  WebkitBackdropFilter: 'blur(10.3px)',
                }}
              >
                {!item.file_status ? item.deleted_at.split(" ")[0] : 
                <>
                <i className="fa-solid fa-circle" style={{color: "#1dc948",marginRight:"10px"}}></i>
                <span>Active</span>
                </>
                }
              </td> */}
              <td
                style={{
                  color: 'white',
                  background: 'none',
                  // borderRadius: '16px',
                  // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  // backdropFilter: ' blur(10.3px)',
                  WebkitBackdropFilter: 'blur(10.3px)',
                }}
              >
                {' '}
                <a
                  href="#"
                  // data-value={baseurl + item.split(fileurl)[1]}
                  data-value={item.converted_file.replace(fileurl,baseurl)}
                  onClick={handleClick}
                  style={{ color: 'white' }}>

                <i
                title='preview'
                  className="fa fa-eye"
                  style={{
                    fontSize: '15px',
                    color: 'white',
                    paddingLeft:'10px',
                    cursor:'pointer'
                  }}
                  ></i>
                  </a>
                
                &nbsp;
                
                <a
                  href="#"
                  style={{
                    color: 'white',
                    borderColor: 'none',
                    borderStyle: 'none',

                  }}
                >
                  {/* Preview */}
                </a>
              </td>
              <td
                style={{
                  color: 'white',
                  background: 'none',
                  // borderRadius: '16px',
                  // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  // backdropFilter: ' blur(10.3px)',
                  WebkitBackdropFilter: 'blur(10.3px)',
                }}
              >
                <a href={item.converted_file.replace(fileurl,baseurl)} style={{textDecoration:"none", color: 'white' }} target='_blank'>
                <i
                title='Download'
                  className="fa fa-download"
                  style={{
                    fontSize: '15px',
                    color: 'white',
                    paddingLeft:'15px',
                    cursor:'pointer'
                  }}
                ></i>
                &nbsp;
                  {/* Download */}
                </a>
              </td>
              {/* <td
                style={{
                  color: 'white',
                  background: 'none',
                  // borderRadius: '16px',
                  // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  // backdropFilter: ' blur(10.3px)',
                  WebkitBackdropFilter: 'blur(10.3px)',
                }}
              >
                <i
                onClick={()=>{handleDeleteClick(item.id)}}
                title='delete'
                  className="fa fa-trash"
                  style={{
                    fontSize: '15px',
                    color: 'white',
                    paddingLeft:'10px',
                  }}
                ></i>
                &nbsp;
                <a href="#" style={{ color: 'white' }}>
                  //
                </a>
              </td> */}
            </tr>
          ))}
            <br></br>
          {file !== '' ? (
            <div>
              <button
                onClick={closedocModal}
                style={{
                  border: 'none',
                  width: '100%',
                  backgroundColor: 'white',
                  marginTop: -'820px',
                  marginLeft: '0%',
                  textAlign: 'left',
                }}
              >
                X
              </button>
              <FileViewer fileType="docx" filePath={file} />
            </div>
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default RecentFileRecords
