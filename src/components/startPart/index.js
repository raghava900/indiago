import {AiOutlineMenu} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import './index.css'

const StartPart = () => (
  <div>
    <div className="header">
      <p className="header-heading">
        <span>
          <AiOutlineMenu className="header-icons" />
        </span>
        IndigoLearn
      </p>
      <div>
        <div className="dropdown">
          <button type="button" className="dropbtn">
            BUY COURSES
          </button>
          <div className="dropdown-content">
            <button type="button">
              <p className="dropdown-list">CA Foundation</p>
              <hr />
              <p>CA Inter</p>
              <hr />
              <p>CA Final</p>
              <hr />
              <p>ACCA - Knowledge Level(L1)</p>
              <hr />
              <p>ACCA - Skills Level (L2)</p>
              <hr />
              <p>CMA Foundation (old)</p>
              <hr />
              <p>CMA Inter (Old)</p>
              <hr />
              <p>CMA Final (Old)</p>
              <hr />
              <p>Cs Exec</p>
              <hr />
              <p>CS Professional</p>
              <hr />
              <p>CBSE</p>
              <hr />
              <p>Mock Test Services</p>
              <hr />
              <p>Mentorship</p>
              <hr />
              <p>Upskilling</p>
            </button>
          </div>
        </div>

        <div className="dropdown">
          <button type="button" className="dropbtn">
            PROGRAMS
          </button>
          <div className="dropdown-content">
            <button type="button">
              <p className="dropdown-list">CA</p>
              <hr />
              <p>CFA</p>
              <hr />
              <p>ACCA</p>
            </button>
          </div>
        </div>
      </div>

      <div>
        <p type="button" className="dropbtn">
          SCHOLARSHIPS
        </p>
      </div>

      <div>
        <p type="button" className="dropbtn">
          FREE COURSES
        </p>
      </div>

      <button type="button" className="header-button">
        <span>
          <BsPersonCircle className="header-icons" />
        </span>
        Log In/Sign Up
      </button>
    </div>

    <div className="brochure">
      <div>
        <h1 className="brochure-heading">Get Ready to be a Global CA</h1>
        <p className="brochure-para">
          Acquire the ACCA qualification to join the league of Global Accounting
          & Finance Professionals
        </p>
        <div className="brochure-buttons">
          <button type="button" className="button1">
            Download Brochure
          </button>
          <button type="button" className="button2">
            SLIVER LEARNING PARTNER
          </button>
        </div>
      </div>
      <div className="register">
        <h5>Aspiring to be an ACCA? Get in touch with us!</h5>
        <input type="text" placeholder="Email ID" className="input" />
        <input type="text" placeholder="Phone Number" className="input" />
        <button type="button" className="request-button">
          Request Call Back
        </button>
      </div>
    </div>
  </div>
)

export default StartPart
