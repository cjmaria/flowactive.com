import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const ProductFeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline is-centered">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '90%',
                display: 'inline-block',
                justifyContent: 'center',
                boxShadow: '0px 0px 4px #333',
                borderRadius: '5px',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <h3 className="feature-heading has-text-centered">{item.heading}</h3>
          <p className="feature-text has-text-centered">{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

ProductFeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default ProductFeatureGrid
