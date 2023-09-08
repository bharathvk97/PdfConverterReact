import React, { useRef, useState } from 'react'
import propTypes from 'prop-types'
import dcloudicn from './../img/icon _cloud-download_.svg'
import { ImageConfig } from '../ImageConfig'
import { Icon } from '@iconify/react'
import { pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import PreviewModal from './FileUploadPreviewModal'
import { useNavigate } from 'react-router-dom'

function Drag_drop(props) {
  const [fileList, setFileList] = useState([])
  const wrapperRef = useRef(null)
  const onDragEnter = () => wrapperRef.current.classList.add('dradover')
  const onDragLeave = () => wrapperRef.current.classList.remove('dradover')
  const onDrop = () => wrapperRef.current.classList.remove('dradover')
  const [registerpage, setRegisterpage] = useState(false)
  const navigate = useNavigate()
  function register(e) {
    e.preventDefault()
    navigate('/signup')
  }
  const onFileDrop = (e) => {
    const newFile = e.target.files[0]
    if (newFile) {
      const updatedList = [...fileList, newFile]
      setFileList(updatedList)
      props.onFilechange(updatedList)
    }
  }
  const uploadfiles = (e) => {
    if (fileList) {
      const data = new FormData()
      fileList.forEach((file, i) => {
        data.append(`file-${i}`, file)
        if (file !== '') {
          setRegisterpage(true)
        }
      })
    }
  }
  const Removeitem = (item) => {
    setShow(false)
    const updatedList = [...fileList]
    updatedList.splice(fileList.indexOf(item), 1)
    setFileList(updatedList)
    props.onFilechange(updatedList)
  }

  const formatSizeUnits = (bytes) => {
    if (bytes >= 1073741824) {
      bytes = (bytes / 1073741824).toFixed(2) + ' GB'
    } else if (bytes >= 1048576) {
      bytes = (bytes / 1048576).toFixed(2) + ' MB'
    } else if (bytes >= 1024) {
      bytes = (bytes / 1024).toFixed(2) + ' KB'
    } else if (bytes > 1) {
      bytes = bytes + ' bytes'
    } else if (bytes === 1) {
      bytes = bytes + ' byte'
    } else {
      bytes = '0 bytes'
    }
    return bytes
  }

  const [fileitem, setItem] = useState([])
  const [show, setShow] = useState(false)
  const closePreviewModal = () => setShow(false)
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  const previewfile = (item) => {
    setShow(true)
    setItem(URL.createObjectURL(item))
  }

  return (
    <div className="col-sm-10 mx-auto drag-wrap">
      <div
        className={fileList.length ? 'drag-inner active' : 'drag-inner'}
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <img alt="" className="cld-remove" src={dcloudicn} />
        <h4 className="cld-remove">Drag&Drop file here</h4>
        <h5 className="cld-remove">Or</h5>
        <a href="# " className="choose" style={{ padding: '3px' }}>
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
          {fileList.length > 0 && registerpage === false ? (
            <center>
              {' '}
              <button
                onClick={() => {
                  uploadfiles()
                }}
                disabled
                className="uploadfilebuttonlandingpage"
              >
                <Icon
                  style={{
                    marginRight: '5px',
                    color: 'white',
                    fontStyle: 'bold',
                  }}
                  icon="cil-cloud-upload"
                />{' '}
                Upload Files
              </button>
            </center>
          ) : null}
        </div>
        {fileList.length > 0 && registerpage === false ? (
          <div className="upload-files">
            <p style={{ marginTop: '20px', textAlign: 'center' }}>
              Hi User, You can't upload the file now. Please register your
              account firstly, then signin to your account and try to upload the
              file.
            </p>
            {fileList.map((item, index) => (
              <div key={index} className="ready-files">
                <div className="ready-img">
                  <img
                    alt=""
                    src={
                      ImageConfig[item.type.split('/')[1]] ||
                      ImageConfig['default']
                    }
                  />
                </div>
                <div className="ready-item-d">
                  <p className="item-name">{item.name}</p>{' '}
                  <p className="item-size">{formatSizeUnits(item.size)}</p>
                </div>
                <div className="ml-auto">
                  <button
                    onClick={() => {
                      previewfile(item)
                    }}
                    style={{ border: 'none' }}
                    className="preview-btn"
                  >
                    <Icon
                      style={{ marginRight: '5px' }}
                      icon="ant-design:eye-filled"
                    />{' '}
                    Preview
                  </button>{' '}
                  {/* <a href="# " className="download-btn">
                    {' '}
                    <Icon style={{ marginRight: '5px' }} icon="bxs:download" />
                    Download
                  </a> */}
                </div>
                <a
                  href="# "
                  className="remove-item"
                  onClick={() => {
                    Removeitem(item)
                  }}
                >
                  X
                </a>
              </div>
            ))}
          </div>
        ) : (
          // <div
          //   className="upload-files"
          //   style={{
          //     background: 'rgba(19, 19, 19, 0.45)',
          //     borderRadius: '16px',
          //     boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          //     backdropFilter: 'blur(10.3px)',
          //     WebkitBackdropFilter: 'blur(10.3px)',
          //     borderRadius: '16px',
          //   }}
          // >
          //   <center>
          //     <div className="col-sm-5 text-center mx-auto mt-10">
          //       <p style={{ color: '#E6E6E6', marginTop: '20px' }}>
          //         Hi User, you can't upload the file,without create an account.
          //       </p>
          //       <p>
          //         Please sign up the account first and upload the file by sign
          //         in to your account.
          //       </p>
          //     </div>
          //     {/* <p>
          //       Hi User, you can't upload the file,without create an account.
          //     </p>
          //     <p style={{ marginTop: '20px' }}>
          //       Please sign up the account first and upload the file by sign in
          //       to your account.
          //     </p> */}
          //   </center>
          //   <center>
          //     <button
          //       name="register"
          //       className="fileuploadregister-btn"
          //       onClick={register}
          //     >
          //       Register Now
          //     </button>
          //   </center>
          // </div>
          <></>
        )}
      </div>
      <div>
        <PreviewModal
          closePreviewModal={closePreviewModal}
          show={show}
          previewfile={fileitem}
        ></PreviewModal>
      </div>
    </div>
  )
}
Drag_drop.propTypes = {
  onFilechange: propTypes.func,
}
export default Drag_drop
