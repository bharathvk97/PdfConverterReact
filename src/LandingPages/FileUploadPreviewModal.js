import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'

function PreviewModal(props) {
  const { closePreviewModal, show, previewfile } = props
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }
  return (
    <div className="modalpopups">
      {show ? (
        <div>
          <p style={{ color: 'white' }}>
            {' '}
            Pages {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button
            onClick={closePreviewModal}
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
          <Document file={previewfile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <div className="buttonc">
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
              className="Pre"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
export default PreviewModal
