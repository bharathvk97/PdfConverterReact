import React, { useEffect, useState } from 'react'
import FileViewer from 'react-file-viewer'
import SharedFileModal from './SharedFileModal'
import { useDispatch } from 'react-redux';
import { convertedFileDeletion } from '../../../Redux/Action/ActionCreator';
const ConvertedRecords = ({ data,setCount,count }) => {
  const sortedData = [...data].sort((a, b) => a.id - b.id).reverse();


  const [file, setfile] = useState('')
  // console.log(data[0].split('http://0.0.0.0:81')[1])
  const baseurl = process.env.REACT_APP_API_BASE_URL
  const fileurl = process.env.REACT_APP_FILE_URL

  const handleClick = (e) => {
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
  //
  const [shareModal, setShareModal] = useState(false)
  const handleShareModal = (fileId) =>{
    //console.log(fileId);
    setShareModal(true)
   
  }
  const dispatch = useDispatch()

const handleConvertedFileDelete = (fileId) => {
  const someCallback = (responseOrError) => {
  if('data' in responseOrError){
    setCount(count+1);
  }
  else{
    alert("Failed to delete")
  }
  };

  dispatch(convertedFileDeletion(fileId, someCallback));
}

  return (
    <div className="table-responsive">
              {shareModal ? <SharedFileModal setShareModal={setShareModal}/> : <></>}
      <table className="table recentfilerecords" style={{ background: 'none' }}>
        <thead>
          <tr style={{ color: '#f7403b' }}>
            <th
              scope="col"
              style={{
                color: 'white',
                background: 'none',

                WebkitBackdropFilter: 'blur(10.3px)',
              }}
            >
              File Name
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
              Share
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
              Deleted Date
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
              Restore
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
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            // console.log(item.converted_file.replace("http://0.0.0.0:81",fileurl)),
            // console.log(baseurl+item.split(fileurl)[1]),
            !item.c_file_status || item.converted_file===null?<></>:
            <tr>
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
                  className="fa fa-file-word-o"
                  style={{
                    color: 'white',
                    background: 'none',
                    // borderRadius: '16px',
                    // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    // backdropFilter: ' blur(10.3px)',
                    WebkitBackdropFilter: 'blur(10.3px)',
                    marginRight:"7px"
                  }}
                ></i>
                 {item.converted_file!==null?item.converted_file.split("/").at(-1):(<>no data</>)}{' '}

                {/* {/ {/ &nbsp;{baseurl + item.split(fileurl)[1]}{' '} /} /} */}
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
                {/* <i
                  className="fa fa-eye"
                  style={{
                    fontSize: '15px',
                    color: 'white',
                  }}
                ></i> */}
                &nbsp;&nbsp;&nbsp;
                <a
                  href="#"
                  // data-value={baseurl + item.split(fileurl)[1]}
                  data-value={item.converted_file.replace(fileurl,baseurl)}
                  onClick={handleClick}
                  style={{ color: 'white' }}
                >
                  <i
                  title='preview'
                  className="fa fa-eye"
                  style={{
                    fontSize: '15px',
                    color: 'white',
                  }}
                ></i>
                </a>
              </td>
              <td
                style={{
                  color: 'white',
                  background: 'none',
                  WebkitBackdropFilter: 'blur(10.3px)',
                }}
              >
                {' '}
                &nbsp;&nbsp;&nbsp;
                <a
                  // href={baseurl + item.split(fileurl)[1]}
                  style={{ color: 'white' }}
                >
                  <i
                  // onClick={handleShareModal}
                  onClick={()=>{handleShareModal(item.id)}}
                  title='share'
                  className="fa fa-share-nodes"                
                  style={{
                    fontSize: '15px',
                    color: 'white',
                    cursor:'pointer',
                  }}
                ></i>
                </a>
              </td>
              {/* <td
                style={{
                  color: 'white',
                  background: 'none',
                  WebkitBackdropFilter: 'blur(10.3px)',
                }}
              >
                {!item.c_file_status ? item.c_deleted_at.split(" ")[0] : 
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
                  WebkitBackdropFilter: 'blur(10.3px)',
                }}
              >
                {' '}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                href={item.converted_file.replace(fileurl,baseurl)}
                  // href={baseurl + item.split(fileurl)[1]}
                  style={{ color: 'white' }}
                >
                  <i                 
                  title='download'
                  className="fa fa-download"
                  style={{
                    fontSize: '15px',
                    color: 'white',
                    cursor:'pointer',
                  }}
                ></i>
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
                {' '}
                &nbsp;&nbsp;&nbsp;
                <a
                  // href={baseurl + item.split(fileurl)[1]}
                  style={{ color: 'white' }}
                >
                  <i
                  title='delete'
                  className="fa-solid fa-trash-restore"
                  style={{
                    fontSize: '15px',
                    color: 'white',
                  }}
                ></i>
                </a>
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
                &nbsp;&nbsp;&nbsp;
                <a
                  // href={baseurl + item.split(fileurl)[1]}
                  style={{ color: 'white' }}
                >
                  <i
                  onClick={()=>{handleConvertedFileDelete(item.id)}}
                  title='delete'
                  className="fa fa-trash"
                  style={{
                    fontSize: '15px',
                    color: 'white',
                    cursor:'pointer',
                  }}
                ></i>
                </a>
              </td>
              <br></br>
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

export default ConvertedRecords
