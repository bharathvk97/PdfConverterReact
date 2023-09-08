import Header from './Header'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()
  function register(e) {
    e.preventDefault()
    navigate('/signup')
  }
  return (
    <div className="landing-wrap">
      <Header />
      <div className="about-section">
        <h1>PDF Converter</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
      <br></br>

      <h2 style={{ textAlign: 'center', color: 'white' }}>Our Services</h2>
      <div
        style={{
          padding: '55px',
          paddingBottom: '-10px',
          textAlign: 'center',
          // width: '800px',
          margin: '0 auto',
          background: 'rgba(19, 19, 19, 0.45)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10.3px)',
          WebkitBackdropFilter: 'blur(10.3px)',
          color: 'white',
          justifyContent: 'left',
        }}
      >
        <p>
          Convert PDF to editable word documents. With just a simple
          drag-and-drop, you can convert PDF to Word within seconds. There’s no
          file size limit nor even the need to register to use our service. The
          best online web app to transform PDFs into high-quality JPG images
          within seconds. No file size limit nor registration is required.
          Simply upload your file and let us work our magic.With this online
          application, you can quickly export PDF documents into Excel files.
          All data will retain its original format, including every sheet,
          table, row, and column.
        </p>
        <center>
          {' '}
          <button name="register" className="about-btn" onClick={register}>
            Register Now
          </button>
        </center>
      </div>
    </div>
  )
}
export default About
