import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const postHeaderStyle = {
  paddingLeft: '1.33rem', 
  paddingRight: '1.33rem', 
  paddingBottom: '0rem',
}

const postLocationStyle = {
  paddingLeft: '1.33rem', 
  paddingRight: '1.33rem', 
  paddingBottom: '0rem',
  paddingTop: '0'
}

const postBodyStyle = {
  paddingLeft: '1.33rem', 
  paddingRight: '1.33rem', 
  paddingBottom: '1.2rem',
}

const JobPostings = ({ jobPostings }) => (
  jobPostings.map((posting) => (
    <a key={v4()} className="column box tile is-info notification is-three-fifths-fullhd is-three-quarters-desktop is-four-fifths-tablet is-full-mobile" target="_blank" rel="noopener noreferrer" href={posting.link}>
      <div className="columns is-multiline">
        <div className="column is-three-quarters has-text-left-desktop has-text-left-tablet-only has-text-centered-mobile" style={postHeaderStyle}>
          <p 
            className="is-size-5-mobile is-size-4-tablet is-size-4-desktop has-text-weight-bold is-bold-light" >
              {posting.role}
          </p>
        </div>
        <div className="column is-one-quarter has-text-right-desktop has-text-right-tablet-only has-text-centered-mobile has-vcentered-text" style={postLocationStyle}>
          <p 
            className="is-size-6-mobile is-size-6-tablet is-size-5-desktop has-text-weight-semibold" >
              {posting.location}
          </p>
        </div>
        <div className="is-full" style={postBodyStyle}>
          {posting.description}
          <a href={posting.link}>  Learn More</a>
        </div>

      </div>
      
    </a>
  ))
)

JobPostings.propTypes = {
  jobPostings: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string,
      description: PropTypes.string,
      location: PropTypes.string,
      link: PropTypes.link,
    })
  ),
}

export default JobPostings
