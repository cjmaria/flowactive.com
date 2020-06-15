import React from 'react'
import PropTypes from 'prop-types'

const YouTubeVideo = ({ videoInfo }) => (
  <div style={{position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', maxWidth: '100%'}}>
    <iframe 
    src={'https://www.youtube.com/embed/'.concat(videoInfo.ytid)} 
    alt={videoInfo.alttext}
    title={videoInfo.alttext}
    frameborder='0' allowfullscreen 
    style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} 
    />
  </div>
)

YouTubeVideo.propTypes = {
  videoInfo: PropTypes.shape({
    ytid: PropTypes.string,
    alttext: PropTypes.string,
  }),
}

export default YouTubeVideo
