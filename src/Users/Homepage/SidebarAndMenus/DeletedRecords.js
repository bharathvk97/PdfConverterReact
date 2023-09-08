import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import FileViewer from 'react-file-viewer'


const DeletedRecords = ({ data, handleRestoreClick, handleDeleteClick,isDeleted,handleConvertedFileRestore ,handleConvertedFileConfirmDeletion}) => {
  const fileurl = process.env.REACT_APP_FILE_URL
  const baseurl = process.env.REACT_APP_API_BASE_URL


  const [file, setfile] = useState('')
  const handlePreview = (e) => {
    console.log(e.currentTarget)
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
  return (
    <div>
      {isDeleted===1?<> 
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
                File name
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
                Deleted Date
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
                Restore
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
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              item.file_status || item.uploaded_file===null?<></>:
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
                        cursor: 'pointer'
                      }}
                    ></i>
                    &nbsp;
                    {item.uploaded_file.split("/").at(-1).slice(2)}{' '}
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
                    className="fa fa-file-image-o"
                    style={{
                      fontSize: '20px',
                      color: 'white',
                    }}
                  ></i>
                  &nbsp;
                  {item.title}{' '}
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
                    {item.deleted_at.split(" ")[0]}{' '}
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
                   
                    &nbsp;
                    <a
                      href="#"
                      data-value={item.uploaded_file.replace(fileurl,baseurl)}
                      onClick={handlePreview}
                      style={{
                        color: 'white',
                        borderColor: 'none',
                        borderStyle: 'none',

                      }}
                    >
                      <i
                      title='preview'
                      className="fa fa-eye"
                      style={{
                        fontSize: '15px',
                        color: 'white',
                        paddingLeft: '10px',
                        cursor: 'pointer'
                      }}
                    ></i>
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
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i
                    style={{cursor:'pointer'}}
                      title='restore'
                      className="fa-solid fa-trash-restore"
                      onClick={() => {
                        handleRestoreClick(item.id)
                      }}
                      
                    ></i>                  &nbsp;
                    <a href="#" style={{ color: 'white' }}>
                      {/* Download */}
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
                    <i
                      title='delete'
                      className="fa fa-trash"
                      style={{
                        fontSize: '15px',
                        color: 'white',
                        paddingLeft: '10px',
                        cursor:'pointer'
                      }}
                      onClick={() => {
                        handleDeleteClick(item.id);
                      }}
                    ></i>
                    &nbsp;
                    <a href="#" style={{ color: 'white' }}>
                      {/* Download */}
                    </a>
                  </td>
                </tr>
              
            ))}
            {/* uploaded file downld */}
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
              <FileViewer fileType="pdf" filePath={file} />
            </div>
          ) : (
            <></>
          )}

          {/* end upload */}
          </tbody>
        </table>
      </div>
      </>:
      <>
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
              File name
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
              Deleted Date
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
              Restore
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
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            //converstion deletion
            item.c_file_status || item.converted_file===null?<></>:
              <tr style={{ borderColor: 'none', borderStyle: 'none' }}>
                <td
                  style={{
                    color: 'white',
                    background: 'none',
                    WebkitBackdropFilter: 'blur(10.3px)',
                  }}
                >
                  <i
                    className="fa fa-file-pdf-o"
                    style={{
                      fontSize: '20px',
                      color: 'white',
                      cursor: 'pointer'
                    }}
                  ></i>
                  &nbsp;
                  {item.converted_file.split("/").at(-1).slice(0)}{' '}
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
                  {item.c_deleted_at.split(" ")[0]}{' '}
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
                 
                  &nbsp;
                  <a
                    href="#"
                     data-value={item.converted_file.replace(fileurl,baseurl)}
                     onClick={handlePreview}
                    style={{
                      color: 'white',
                      borderColor: 'none',
                      borderStyle: 'none',

                    }}
                  >
                    <i
                    title='preview'
                    className="fa fa-eye"
                    style={{
                      fontSize: '15px',
                      color: 'white',
                      paddingLeft: '10px',
                      cursor: 'pointer'
                    }}
                  ></i>
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
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i 
                  style={{cursor:'pointer'}}
                  title='restore'
                  className="fa-solid fa-trash-restore"
                  onClick={()=>{
                    handleConvertedFileRestore(item.id)
                  }}
                  ></i>                  &nbsp;
                  <a href="#" style={{ color: 'white' }}>
                    {/* {/ Download /} */}
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
                  <i
                    title='delete'
                    className="fa fa-trash"
                    style={{
                      fontSize: '15px',
                      color: 'white',
                      paddingLeft: '10px',
                      cursor:'pointer'
                    }}
                    onClick={()=>{
                      handleConvertedFileConfirmDeletion(item.id);
                    }}
                  ></i>
                  &nbsp;
                  <a href="#" style={{ color: 'white' }}>
                    {/* {/ Download /} */}
                  </a>
                </td>
              </tr>
            

          ))}
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
      </>}
     
    </div>
  )
}

export default DeletedRecords
