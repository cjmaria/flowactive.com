import React from 'react'
import PropTypes from 'prop-types'
import { CompanyPageTemplate } from '../../templates/company-page'

const CompanyPagePreview = ({ entry, widgetFor }) => (
  <CompanyPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

CompanyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CompanyPagePreview
