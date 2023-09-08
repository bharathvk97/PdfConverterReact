import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Header from './Header'
import Dragdrop from './DragDrop'

function Landingpage() {
  localStorage.clear()
  const onFilechange = (files) => {
    // console.log(files)
  }

  return (
    <div className="landing-wrap">
      <Header />

      <Container>
        <h1>
          <span>Convert your </span> <br />
          document easily{' '}
        </h1>
        <div className="col-sm-5 text-center mx-auto mt-3">
          <p style={{ color: '#E6E6E6' }}>
            Revolutionize PDF to Text Conversion: Harness the Power of AI to
            Effortlessly Transform PDFs into Accurate and Editable Text
            Documents.
          </p>
        </div>
        <Dragdrop onFilechange={(files) => onFilechange(files)} />
      </Container>
    </div>
  )
}

export default Landingpage
