import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import TransparentLayout from '../components/TransparentLayout'
import { HTMLContent } from '../components/Content'
import CompanyBar from '../components/CompanyBar'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import CoreTeamRoll from '../components/CoreTeamRoll'
import YouTubeVideo from '../components/YouTubeVideo'
import JobPostings from '../components/JobPostings'


export const CompanyPageTemplate = ({
  sectiontitle,
  content,
  missionImage,
  missionHeading,
  missionSubheading,
  aboutUsTitle,
  aboutUsHeaderImage,
  aboutUsSubtitle,
  aboutUsSection1,
  aboutUsSection1Image,
  aboutUsSection2,
  aboutUsSection2Image,
  aboutUsSection3,
  aboutUsSection3Logo1,
  aboutUsSection3Logo2,
  aboutUsSection3Logo3,
  aboutUsIntroVideo,
  aboutUsLocationHeading,
  aboutUsLocationImage1,
  aboutUsAddress,
  teamTitle,
  teamBlurb,
  careersTitle,
  careersJobPostings,
  contentComponent,
}) => {
  return (
    <div className="content">
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
                  className="has-text-white is-size-2-mobile is-size-1-tablet is-size-1-desktop is-flowactive-font"
                >
                  {missionHeading}
                </h2>
                <br/>
                <h3
                  className="has-text-white is-size-6-mobile is-size-6-tablet is-size-4-desktop"
                  style={{lineHeight: '1.2'}}
                >
                  {missionSubheading}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompanyBar />
      <div className="container" style={{ position: 'relative' }}>
        <section className="section section--gradient" style={{position: 'relative', paddingTop: '1rem'}}>
          <div className="container">
            <div className="columns">
              <div id="about-us" className="column is-10 is-offset-1">
                <div className="section">
                  <h1 className="title has-text-centered has-text-weight-bold is-bold-light">
                    {aboutUsTitle}
                  </h1>
                  <div className="columns is-multiline is-centered">
                    <div className="column is-four-fifths" style={{marginBottom: '2.5rem'}}>
                      <PreviewCompatibleImage imageInfo={aboutUsHeaderImage} />
                    </div>
                    <div className="column is-half has-vcentered-text" >
                      <p className="is-size-6-mobile is-size-6-tablet is-size-5-desktop">
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

                      <p className="is-size-6-mobile is-size-6-tablet is-size-5-desktop">
                        {aboutUsSection2}
                      </p>
                      
                    </div>
                    <div className="column is-half is-size-6-mobile is-size-6-tablet is-size-5-desktop" style={{paddingTop: '2rem'}}  dangerouslySetInnerHTML={{
                      __html: aboutUsSection3
                    }}>
                      
                    </div>
                    <div className="column is-half ">
                      <div style={{paddingLeft: '35%', paddingRight: '35%', paddingTop: '2rem'}}>
                        <PreviewCompatibleImage imageInfo={aboutUsSection3Logo1} />
                      </div>
                      <br />
                      <br />
                      <div style={{paddingLeft: '15%', paddingRight: '15%'}}>
                        <PreviewCompatibleImage imageInfo={aboutUsSection3Logo2} />
                      </div>          
                      <br />
                      <br />
                      <div style={{paddingLeft: '15%', paddingRight: '15%'}}>
                        <PreviewCompatibleImage imageInfo={aboutUsSection3Logo3} />
                      </div>
                    </div>

                    <div className="column is-full has-text-centered " style={{paddingTop: '5rem'}}>
                      <YouTubeVideo videoInfo={aboutUsIntroVideo} />
                    </div>
                    <div className="column is-full has-text-centered " style={{paddingTop: '5rem'}}>
                      <p className="title has-text-centered has-text-weight-bold is-bold-light is-size-4-mobile is-size-3-tablet is-size-3-desktop">
                        {aboutUsLocationHeading}
                      </p>
                    </div>
                    
                    <div className="column is-half has-text-centered " >
                      <p className="is-size-4-mobile is-size-3-tablet is-size-3-desktop " style={{paddingTop: '0.5rem', paddingBottom: '1rem', whiteSpace: 'pre-line'}}>
                        {aboutUsAddress}
                      </p>
                      <PreviewCompatibleImage imageInfo={aboutUsLocationImage1} />
                    </div>
                    <div className="column is-half has-text-centered " >
                      <div style={{position: 'relative', paddingBottom: '56.25%', height: '100%', overflow: 'hidden', maxWidth: '100%'}}>
                        <iframe title="Google Maps Embed" frameborder="0" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} 
                          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJz9Svc6gP3okReatCJ8lo90M&key=AIzaSyBBKJtqXSKlPlywdj_TgmD91iiFZPpcXm4" allowfullscreen>
                        </iframe>
                      </div>
                      
                    </div>
                    
                    <div id="our-team" className="column is-full has-text-centered " style={{paddingTop: '3rem', paddingBottom: '2rem'}}>
                      <h2 className="title has-text-centered has-text-weight-bold is-bold-light is-size-3-mobile is-size-3-tablet is-size-2-desktop">
                      {teamTitle}
                      </h2>
                      <p className="is-size-6-mobile is-size-6-tablet is-size-4-desktop">
                        {teamBlurb}
                      </p>
                    </div>
                    <CoreTeamRoll />
                    <div id="careers" className="column is-full has-text-centered " style={{paddingTop: '3rem'}}>
                      <h3 className="title has-text-centered has-text-weight-bold is-bold-light is-size-3-mobile is-size-3-tablet is-size-2-desktop">
                        {careersTitle}
                      </h3>
                      
                    </div>
                    
                    <JobPostings jobPostings={careersJobPostings} />
                  </div>                
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

CompanyPageTemplate.propTypes = {
  sectiontitle: PropTypes.string.isRequired,
  missionImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  missionHeading: PropTypes.string,
  missionSubheading: PropTypes.string,
  aboutUsTitle: PropTypes.string,
  aboutUsHeaderImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  aboutUsSubtitle: PropTypes.string,
  aboutUsSection1: PropTypes.string,
  aboutUsSection1Image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  aboutUsSection2: PropTypes.string,
  aboutUsSection2Image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  aboutUsSection3: PropTypes.string,
  aboutUsSection3Logo1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  aboutUsSection3Logo2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  aboutUsSection3Logo3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  aboutUsIntroVideo: PropTypes.shape({
    ytid: PropTypes.string,
    alttext: PropTypes.string,
  }),
  aboutUsLocationHeading: PropTypes.string,
  aboutUsLocationImage1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  aboutUsAddress: PropTypes.string,
  teamTitle: PropTypes.string,
  teamBlurb: PropTypes.string,
  careersTitle: PropTypes.string,
  careersJobPostings: PropTypes.array,
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
        aboutUsHeaderImage={post.frontmatter.aboutUs.headerImage}
        aboutUsSubtitle={post.frontmatter.aboutUs.subtitle}
        aboutUsSection1={post.frontmatter.aboutUs.section1}
        aboutUsSection1Image={post.frontmatter.aboutUs.section1Image}
        aboutUsSection2={post.frontmatter.aboutUs.section2}
        aboutUsSection2Image={post.frontmatter.aboutUs.section2Image}
        aboutUsSection3={post.frontmatter.aboutUs.section3}
        aboutUsSection3Logo1={post.frontmatter.aboutUs.section3Logo1}
        aboutUsSection3Logo2={post.frontmatter.aboutUs.section3Logo2}
        aboutUsSection3Logo3={post.frontmatter.aboutUs.section3Logo3}
        aboutUsIntroVideo={post.frontmatter.aboutUs.introVideo}
        aboutUsLocationHeading={post.frontmatter.aboutUs.locationHeading}
        aboutUsLocationImage1={post.frontmatter.aboutUs.locationImage1}
        aboutUsAddress={post.frontmatter.aboutUs.address}
        teamTitle={post.frontmatter.team.title}
        teamBlurb={post.frontmatter.team.blurb}
        careersTitle={post.frontmatter.careers.title}
        careersJobPostings={post.frontmatter.careers.jobPostings}
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
          headerImage {
            childImageSharp {
              fluid(maxWidth: 900, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
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
          section3
          section3Logo1 {
            childImageSharp {
              fluid(maxWidth: 400, quality: 40) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          section3Logo2 {
            childImageSharp {
              fluid(maxWidth: 400, quality: 40) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          section3Logo3 {
            childImageSharp {
              fluid(maxWidth: 400, quality: 40) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          introVideo {
            ytid
            alttext
          }
          locationHeading
          locationImage1 {
            childImageSharp {
              fluid(maxWidth: 480, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          address
        }
        team {
          title
          blurb
        }
        careers {
          title
          jobPostings {
            role
            description
            location
            link
          }
        }
      }
    }
  }
`
