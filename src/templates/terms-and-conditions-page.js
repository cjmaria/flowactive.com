import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TermsPageTemplate = ({
  title,
  termsOfServiceLink,
  termsOfPurchaseLink,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-2 has-text-centered has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <div className="columns is-centered">
                <div className="btn-box is-12">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={termsOfServiceLink}
                    className="btn-product"
                  >
                    {' '}
                    Terms of Service{' '}
                  </a>
                </div>
                <div className="btn-box is-12" style={{ marginLeft: '1rem' }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={termsOfPurchaseLink}
                    className="btn-product"
                  >
                    {' '}
                    Terms of Purchase{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

TermsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TermsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TermsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        termsOfServiceLink={post.frontmatter.termsOfServiceLink}
        termsOfPurchaseLink={post.frontmatter.termsOfPurchaseLink}
        content={post.html}
      />
    </Layout>
  )
}

TermsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TermsPage

export const termsPageQuery = graphql`
  query TermsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        termsOfServiceLink
        termsOfPurchaseLink
      }
    }
  }
`
