import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import TransparentLayout from '../components/TransparentLayout'
import Content, { HTMLContent } from '../components/Content'
import CompanyHeader from '../components/CompanyHeader'

export const AboutPageTemplate = ({
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
      <CompanyHeader
        containerClass="companyheader"
        heading={missionHeading}
        subheading={missionSubheading}
        backgroundImage={missionImage}
      />
      <section className="section section--gradient">
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

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  missionImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  missionHeading: PropTypes.string,
  missionSubheading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <TransparentLayout>
      <AboutPageTemplate
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

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        missionStatement {
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 60) {
                ...GatsbyImageSharpFluid
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
