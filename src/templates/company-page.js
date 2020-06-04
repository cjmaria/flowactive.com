import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import TransparentLayout from '../components/TransparentLayout'
import Content, { HTMLContent } from '../components/Content'
import CompanyBar from '../components/CompanyBar'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


export const CompanyPageTemplate = ({
  sectiontitle,
  content,
  missionImage,
  missionHeading,
  missionSubheading,
  aboutUsTitle,
  aboutUsSubtitle,
  aboutUsSection1,
  aboutUsSection1Image,
  aboutUsSection2,
  aboutUsSection2Image,
  aboutUsLogo1,
  aboutUsLogo2,
  aboutUsLogo3,
  aboutUsLocationHeading,
  aboutUsLocationImage1,
  aboutUsLocationImage2,
  aboutUsLocationImage3,
  aboutUsAddress,
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
                <h2
                  className="has-text-weight-semibold has-text-white is-size-2-mobile is-size-1-tablet is-size-1-widescreen"
                >
                  {missionHeading}
                </h2>
                <br/>
                <h3
                  className="has-text-white is-size-6-mobile is-size-6-tablet is-size-4-widescreen"
                >
                  {missionSubheading}
                </h3>
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
                <h1 className="title has-text-centered has-text-weight-bold is-bold-light">
                  {aboutUsTitle}
                </h1>
                <div className="columns is-multiline">
                  <div className="column is-half has-vcentered-text" >
                    <p className="is-size-6-mobile is-size-6-tablet is-size-4-widescreen">
                      {aboutUsSection1}
                    </p>
                  </div>
                  <div className="column is-half">
                    <div style={{paddingLeft: '17%', paddingRight: '25%'}}>
                      <PreviewCompatibleImage imageInfo={aboutUsSection1Image} />
                    </div>
                    
                  </div>
                  <div className="column is-half " >
                    <div style={{paddingLeft: '5%', paddingRight: '5%'}}>
                      <PreviewCompatibleImage imageInfo={aboutUsSection2Image} />
                    </div>
                  </div>
                  <div className="column is-half has-vcentered-text">

                    <p className="is-size-6-mobile is-size-6-tablet is-size-4-widescreen">
                      {aboutUsSection2}
                    </p>
                    
                  </div>
                  <div className="column is-half has-vcentered-text" >
                    <PageContent className="content" content={content} />
                  </div>
                  <div className="column is-half ">
                    <div style={{paddingLeft: '35%', paddingRight: '35%', paddingTop: '2rem'}}>
                      <PreviewCompatibleImage imageInfo={aboutUsLogo1} />
                    </div>
                    <br />
                    <br />
                    <div style={{paddingLeft: '15%', paddingRight: '15%'}}>
                      <PreviewCompatibleImage imageInfo={aboutUsLogo2} />
                    </div>          
                    <br />
                    <br />
                    <div style={{paddingLeft: '15%', paddingRight: '15%'}}>
                      <PreviewCompatibleImage imageInfo={aboutUsLogo3} />
                    </div>
                  </div>
                  
                  <div className="column is-full has-text-centered " style={{paddingTop: '5rem'}}>
                    <p className="is-size-3-mobile is-size-3-tablet is-size-2-widescreen has-text-weight-bold is-bold-light">
                      {aboutUsLocationHeading}
                    </p>
                    <div style={{paddingLeft: '32%', paddingRight: '32%'}}>
                      <PreviewCompatibleImage imageInfo={aboutUsLocationImage1} />
                    </div>
                  </div>
                  <div className="column is-half  has-text-centered">
                    <div style={{paddingLeft: '4%', paddingRight: '4%'}}>
                      <PreviewCompatibleImage imageInfo={aboutUsLocationImage2} />
                    </div>
                    <br />
                    <p className="is-size-3-mobile is-size-3-tablet is-size-3-widescreen has-text-weight-bold is-bold-light">
                    {aboutUsAddress}
                    </p>
                  </div>
                  <div className="column is-half">
                    <div style={{paddingLeft: '4%', paddingRight: '4%'}}>
                      <PreviewCompatibleImage imageInfo={aboutUsLocationImage3} />
                    </div>
                  </div>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

CompanyPageTemplate.propTypes = {
  sectiontitle: PropTypes.string.isRequired,
  missionImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  missionHeading: PropTypes.string,
  missionSubheading: PropTypes.string,
  aboutUsTitle: PropTypes.string,
  aboutUsSubtitle: PropTypes.string,
  aboutUsSection1: PropTypes.string,
  aboutUsSection1Image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  aboutUsSection2: PropTypes.string,
  aboutUsSection2Image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  aboutUsLogo1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  aboutUsLogo2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  aboutUsLogo3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  aboutUsLocationHeading: PropTypes.string,
  aboutUsLocationImage1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  aboutUsLocationImage2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  aboutUsLocationImage3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  aboutUsAddress: PropTypes.string,
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
        aboutUsTitle={post.frontmatter.aboutUs.title}
        aboutUsSubtitle={post.frontmatter.aboutUs.subtitle}
        aboutUsSection1={post.frontmatter.aboutUs.section1}
        aboutUsSection1Image={post.frontmatter.aboutUs.section1Image}
        aboutUsSection2={post.frontmatter.aboutUs.section2}
        aboutUsSection2Image={post.frontmatter.aboutUs.section2Image}
        aboutUsLogo1={post.frontmatter.aboutUs.logo1}
        aboutUsLogo2={post.frontmatter.aboutUs.logo2}
        aboutUsLogo3={post.frontmatter.aboutUs.logo3}
        aboutUsLocationHeading={post.frontmatter.aboutUs.locationHeading}
        aboutUsLocationImage1={post.frontmatter.aboutUs.locationImage1}
        aboutUsLocationImage2={post.frontmatter.aboutUs.locationImage2}
        aboutUsLocationImage3={post.frontmatter.aboutUs.locationImage3}
        aboutUsAddress={post.frontmatter.aboutUs.address}
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
        aboutUs {
          title
          subtitle
          section1
          section1Image {
            childImageSharp {
              fluid(maxWidth: 512, quality: 60) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          section2
          section2Image {
            childImageSharp {
              fluid(maxWidth: 512, quality: 60) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          logo1 {
            childImageSharp {
              fluid(maxWidth: 400, quality: 40) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          logo2 {
            childImageSharp {
              fluid(maxWidth: 400, quality: 40) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          logo3 {
            childImageSharp {
              fluid(maxWidth: 400, quality: 40) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          locationHeading
          locationImage1 {
            childImageSharp {
              fluid(maxWidth: 480, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          locationImage2 {
            childImageSharp {
              fluid(maxWidth: 400, quality: 40) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          locationImage3 {
            childImageSharp {
              fluid(maxWidth: 720, quality: 60) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          address
        }
        
      }
    }
  }
`
