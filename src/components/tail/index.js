import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'

import './index.css'

const Tail = () => (
  <div className="tt">
    <div>
      <div className="tail-main">
        <div>
          <h1 className="tail-heading">Indigo Learn</h1>
          <div>
            <AiFillFacebook color="white" className="tail-icons" />
            <AiFillYoutube color="white" className="tail-icons" />
            <AiFillInstagram color="white" className="tail-icons" />
            <AiFillLinkedin color="white" className="tail-icons" />
            <AiOutlineTwitter color="white" className="tail-icons" />
          </div>
        </div>
        <div>
          <h4 className="tail-text">Connect With US</h4>
          <p>
            <BsFillTelephoneFill color="#90d1d5" />
            <span className="tail-para">Sales</span>
          </p>
          <p className="tail-text">964-011-1110 / 913-331-0549</p>

          <p>
            <BsFillTelephoneFill color="#90d1d5" />
            <span className="tail-para">Support</span>
          </p>
          <p className="tail-text">915-491-1196</p>
          <p>
            <AiOutlineWhatsApp color="#90d1d5" />{' '}
            <span className="tail-text">964-011-1110</span>
          </p>
          <p>
            <AiOutlineMail color="#90d1d5" />
            <span className="tail-text">support@indigolearn.com</span>
          </p>
        </div>
        <div>
          <h4 className="tail-text">Company</h4>
          <p className="tail-text">About Us</p>
          <p className="tail-text">Contact</p>
          <p className="tail-text">Career</p>
        </div>
        <div>
          <h4 className="tail-text">Information</h4>
          <p className="tail-text">FAQ</p>
          <p className="tail-text">Terms & Conditions</p>
          <p className="tail-text">Privacy Policy</p>
        </div>
      </div>
      <div className="tail-info">
        <h4 className="tail-para">Courses</h4>
        <p className="tail-text">
          CA Foundation| CA Inter| CA Final| CFA| ACCA - Knowledge Level (L1)|
          ACCA - Skills Level (L2)| CMA Foundation (Old)| CMA Inter (Old)| CMA
          Final (Old)| CS Exec| CS Professional| CBSE| Mock Test Series|
          Mentorship| Upskilling
        </p>
        <h4 className="tail-para">Courses Guide</h4>
        <p className="tail-text">
          CA Foundation Course - A Complete Guide| CA Course Guide - Here Is How
          To Become a CA| CA Inter - A Complete Guide| CMA Course - A Complete
          Guide| CA Final - A Complete Guide| ACCA - A Comprehensive course
          guide| CFA - Chartered Financial Analyst| CMA -US- A Course guide
          Offerings
        </p>
        <h4 className="tail-para">Offerings</h4>
        <p className="tail-text">
          By Courses| Free Courses| Free Resources| Free videos| Forums| News
          and Updates| Blogs| APP 1FIN
        </p>
      </div>
    </div>
  </div>
)

export default Tail
