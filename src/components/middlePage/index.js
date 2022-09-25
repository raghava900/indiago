import {
  MdOutlineMenuBook,
  MdOutlinePersonalVideo,
  MdOutlineTimer,
  MdAssignment,
} from 'react-icons/md'
import {BsLaptop, BsCalendarDate, BsShieldFillCheck} from 'react-icons/bs'
import {AiTwotoneLike, AiOutlineUpload} from 'react-icons/ai'
import {BiAlarm} from 'react-icons/bi'
import {IoBulb, IoPerson} from 'react-icons/io5'
import {GiSuitcase} from 'react-icons/gi'
import ReactPopUps from '../popups'
import PopEnroll from '../popEnroll'
import './index.css'

const MiddlePage = () => (
  <div>
    <h1 className="middle-heading">What is ACCA?</h1>
    <hr className="line" />
    <div className="middle">
      <ul>
        <li>
          ACCA (Association of Chartered Certified Accountants) is a globally
          recognized accounting qualification offered by ACCA Global, UK
        </li>
        <li>It provides unlimited career opportunities with MnCs and Big4s</li>
        <li>A course which you can complete along with your graduation</li>
        <li>
          It has 2 lakh + members & 5 lakh + students across 180+ countries
        </li>
      </ul>
    </div>
    <div className="box">
      <div className="boxes">
        <p className="box-para">Levels</p>
        <p>
          <span>
            <MdOutlineMenuBook />
          </span>
          Three (13 papers)
        </p>
      </div>
      <div className="boxes">
        <p className="box-para">Duration</p>
        <p>
          <span>
            <BiAlarm />
          </span>
          6-30 minutes
        </p>
      </div>
      <div className="boxes">
        <p className="box-para">Exams</p>
        <p className="box-icon">
          <span>
            <BsLaptop />
          </span>
          Quarterly(Online)
        </p>
      </div>
      <div className="boxes">
        <p className="box-para">Exemptions</p>
        <p>
          <span>
            <BsCalendarDate />
          </span>
          Available
        </p>
      </div>
    </div>
    <h1 className="middle-heading">Why ACCA @ 1FIN?</h1>
    <hr className="line" />
    <div className="pp">
      <div className="acca-container">
        <div className="acca">
          <IoBulb color="white" />
          <p className="acca-para">Conceptual</p>
        </div>
        <p className="react-para">
          <span className="react-icons">
            <BsLaptop />
          </span>
          Regular Live Classes
        </p>
        <p className="react-para">
          <span className="react-icons">
            <IoPerson />
          </span>
          Expert Faculty
        </p>
        <p className="react-para">
          <span className="react-icons">
            <MdOutlinePersonalVideo />
          </span>
          Dedicated Discussions Forms
        </p>
        <p className="react-para">
          <span className="react-icons">
            <IoPerson />
          </span>
          Continous Support
        </p>
        <p className="react-para">
          <span className="react-icons">
            <GiSuitcase />
          </span>
          Exam Oriented Content
        </p>
      </div>

      <div className="acca-container">
        <div className="acca">
          <IoPerson color="white" />
          <p className="acca-para">Comprehensive</p>
        </div>
        <p className="react-para">
          <span>
            <BsLaptop className="react-icons" />
          </span>
          Exhaustive Q & A Bank
        </p>
        <p className="react-para">
          <span>
            <IoPerson className="react-icons" />
          </span>
          1000s of MCQs for practice
        </p>
        <p className="react-para">
          <MdOutlineTimer className="react-icons" />
          Tests at regular intervals
        </p>
        <p className="react-para">
          <MdAssignment className="react-icons" />
          Mock Exams
        </p>
        <p className="react-para">
          <IoBulb className="react-icons" />
          Analysis of Answer Sheets
        </p>
      </div>

      <div className="acca-container">
        <div className="acca">
          <BsShieldFillCheck color="white" />
          <p className="acca-para">Career Oriented</p>
        </div>
        <p className="react-para">
          <span className="react-icons">
            <BsLaptop />
          </span>
          Business Communication
        </p>
        <p className="react-para">
          <span className="react-icons">
            <GiSuitcase />
          </span>
          Resume Building
        </p>
        <p className="react-para">
          <span className="react-icons">
            <AiTwotoneLike />
          </span>
          Negotiation Skills
        </p>
        <p className="react-para">
          <span className="react-icons">
            <AiOutlineUpload />
          </span>
          Mock Interviews
        </p>
        <p className="react-para">
          <span className="react-icons">
            <MdOutlinePersonalVideo />
          </span>
          Placement Services
        </p>
      </div>
    </div>{' '}
    <div className="middle-sub">
      Live classes start from late September, 2022.{' '}
      <span className="span">
        <ReactPopUps />
      </span>
    </div>
    <p className="button3">
      SLIVER LEARNING PARTNER <span className="span1">ACCA</span>
    </p>
    <div className="acca-eligibility">
      <h1 className="acca-eligibility-heading">ACCA - Eligibility</h1>
      <hr className="line" />
      <h2 className="acca-eligibility-heading1">
        To appear for the ACCA course examination a candidate should have
      </h2>
      <p className="acca-eligibility-para">Qualified the 10+2 exams</p>
      <p className="acca-eligibility-para">
        An aggregate of 65% in Mathematics / Accounts and English and a minimum
        of 50% in other subjects
      </p>
    </div>
    <h1 className="middle-heading">What will you Learn in ACCA?</h1>
    <hr className="line" />
    <div className="pp">
      <div className="acca-container1">
        <div className="acca1">
          <p className="acca-para">Knowledge Level</p>
        </div>
        <ul>
          <li>Business and Technology (BT)</li>
          <li>Management Accounting (MA)</li>
          <li>Financial Accounting (FA)</li>
        </ul>

        <PopEnroll />
      </div>

      <div className="acca-container1">
        <div className="acca1">
          <p className="acca-para">Skill Level</p>
        </div>
        <ul>
          <li>Corporate and Business Law (LW)</li>
          <li>Performance Management (PM)</li>
          <li>Taxation (TX)</li>
          <li>Financial Reporting (FR)</li>
          <li>Audit and Assurance (AA)</li>
          <li>Financial Management (FM)</li>
        </ul>
        <PopEnroll />
      </div>

      <div className="acca-container1">
        <div className="acca1">
          <p className="acca-para">Professional Level</p>
        </div>
        <h5>Compulsory</h5>
        <ul>
          <li>SBL - Strategic Business Leader</li>

          <li>SBR - Strategic Business Reporting</li>
        </ul>
        <h5>Two out of the following</h5>
        <ul>
          <li>Advanced Financial Management (AFM)</li>
          <li>Advanced Performance Management (APM)</li>
          <li>Advanced Taxation (ATX)</li>
          <li>Advanced Audit and Assurance (AAA)</li>
        </ul>
        <PopEnroll />
      </div>
    </div>
  </div>
)

export default MiddlePage
