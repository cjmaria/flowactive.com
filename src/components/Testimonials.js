import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <article key={v4()} className="message">
        <div className="message-body is-size-5">
          {testimonial.quote}
        </div>
      </article>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
    })
  ),
}

export default Testimonials
