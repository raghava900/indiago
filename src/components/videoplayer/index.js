import ReactPlayer from 'react-player'

import './index.css'

const videoURL = 'https://youtu.be/XvRTxMBdBxQ'
const VideoPlayer = () => (
  <div className="video-container">
    <div className="responsive-container">
      <ReactPlayer url={videoURL} />
    </div>
  </div>
)

export default VideoPlayer
