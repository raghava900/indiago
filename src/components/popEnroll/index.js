import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const PopEnroll = () => (
  <Popup
    modal
    trigger={
      <button type="button" className="button4">
        Enroll Now
      </button>
    }
  >
    <div className="register">
      <h5 className="register-heading">
        Aspiring to be an ACCA? Get in touch with us!
      </h5>
      <input type="text" placeholder="Email ID" className="input" />
      <input type="text" placeholder="Phone Number" className="input" />
      <button type="button" className="request-button">
        Request Call Back
      </button>
    </div>
  </Popup>
)
export default PopEnroll
