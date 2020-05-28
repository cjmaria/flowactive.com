import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import TransparentLayout from '../components/TransparentLayout'
import Content, { HTMLContent } from '../components/Content'
import CompanyBar from '../components/CompanyBar'



export const CompanyPageTemplate = ({
  title,
  content,
  missionImage,
  missionHeading,
  missionSubheading,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              !!missionImage.childImageSharp
                ? missionImage.childImageSharp.fluid.src
                : missionImage.childImageSharp
            })`,
          }}
        >
          <div className="section" style={{ width: '100%' }}>
            <div className="columns is-centered">
              <div className="column is-three-fifths has-text-centered">
                <p
                  className="has-text-weight-semibold has-text-white is-size-2-mobile is-size-1-tablet is-size-1-widescreen"
                >
                  {missionHeading}
                </p>
                <br/>
                <p
                  className="has-text-white is-size-6-mobile is-size-6-tablet is-size-4-widescreen"
                >
                  {missionSubheading}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompanyBar />
      <section className="section section--gradient" style={{zIndex: '-1', position: 'relative'}}>
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-2 has-text-centered has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

CompanyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  missionImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  missionHeading: PropTypes.string,
  missionSubheading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CompanyPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <TransparentLayout>
      <CompanyPageTemplate
        contentComponent={HTMLContent}
        missionImage={post.frontmatter.missionStatement.backgroundImage}
        missionHeading={post.frontmatter.missionStatement.heading}
        missionSubheading={post.frontmatter.missionStatement.subheading}
        title={post.frontmatter.title}
        content={post.html}
      />
    </TransparentLayout>
  )
}

CompanyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CompanyPage

export const companyPageQuery = graphql`
  query CompanyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        missionStatement {
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 60) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          heading
          subheading
        }
        title
      }
    }
  }
`
