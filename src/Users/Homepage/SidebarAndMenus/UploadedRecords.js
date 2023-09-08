import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFile } from '../../../Redux/Action/ActionCreator';

const UploadedRecords = ({ data,count,setCount }) => {
  const sortedData = [...data].sort((a, b) => a.id - b.id).reverse();
  const fileurl = process.env.REACT_APP_FILE_URL
  const baseurl = process.env.REACT_APP_API_BASE_URL

  const dispatch = useDispatch();
  // let fileID = "";

  const handleDeleteClick = (fileId) => {
    const someCallback = (responseOrError) => {
    if('data' in responseOrError){
      setCount(count+1);
    }
    else{
      alert("Failed to delete")
    }
    };

    dispatch(deleteFile(fileId, someCallback));

  }
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
              Converted to
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
              Preview
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
            item.file_status?<>  <tr style={{ borderColor: 'none', borderStyle: 'none' }}>
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
              {/* </a> */}
            {/* </td> */}
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
              <a href={item.uploaded_file.replace(fileurl,baseurl)} style={{textDecoration:"none", color: 'white' }}
              target='_blank'>
              <i
                title='Download'
                className="fa fa-download"
                style={{
                  fontSize: '15px',
                  color: 'white',
                  paddingLeft: '15px',
                  cursor: 'pointer'
                }}
              ></i>
              &nbsp;
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
                  cursor:'pointer',
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
          </tr></>:<></>
           
          
          ))}
        </tbody>
      </table>
    </div>
  )
  // return (
  //   <table className="table-responsive">
  //     <thead>
  //       <tr style={{ color: '#f7403b' }}>
  //         <th scope="col" style={{ color: 'white' }}>
  //           File Name
  //         </th>
  //         <th scope="col" style={{ color: 'white' }}>
  //           Remark
  //         </th>
  //         <th scope="col" style={{ color: 'white' }}>
  //           Uploaded Date
  //         </th>
  //         <th scope="col" style={{ color: 'white' }}>
  //           Deleted Date
  //         </th>
  //         <th scope="col" style={{ color: 'white' }}>
  //           Preview
  //         </th>
  //         <th scope="col" style={{ color: 'white' }}>
  //           Download
  //         </th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {data.map((item) => (
  //         <tr>
  //           <td style={{ color: 'white' }}>{item.uploaded_file} </td>
  //           <td style={{ color: 'white' }}>{item.remark} </td>
  //           <td style={{ color: 'white' }}>{item.created_at} </td>
  //           {item.file_status ? <td style={{ color: 'white' }}>Not Deleted </td>
  //             :  <td style={{ color: 'white' }}>{item.deleted_at} </td>}
  //           {/* <td style={{ color: 'white' }}>{item.deleted_at} </td> */}

  //           <td style={{ color: 'white' }}>
  //             <a href="#" style={{ color: 'white' }}>
  //               Preview
  //             </a>
  //           </td>
  //           <td style={{ color: 'white' }}>
  //             <a href="#" style={{ color: 'white' }}>
  //               Download
  //             </a>
  //           </td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
  // )
}

export default UploadedRecords
