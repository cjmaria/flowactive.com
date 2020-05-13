import React from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'

const YouTubeVideo = ({ videoInfo }) => (
  <div className="YTVideoEmbed">
    <YouTube
      videoId={videoInfo.ytid}
      opts={{ width: '100%', height: '400px', display: 'block' }}
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
