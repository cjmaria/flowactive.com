import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  intro,
  collaboratorsImage,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div
        style={{
          display: 'flex',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
          backgroundColor: 'rgba(53, 46, 45, 0.4)',
          padding: '0.8rem',
          WebkitBackdropFilter: 'blur(4px)',
          backdropFilter: 'blur(4px)',
          borderRadius: '0.5rem',
        }}
      >
        <div>
          <div>
            <h1
              className="has-text-weight-semibold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered"
              style={{
                color: 'white',
                lineHeight: '1',
                padding: '0.2rem',
              }}
            >
              {title}
            </h1>
            <h3
              className="has-text-weight-semibold is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-centered"
              style={{
                color: 'white',
                lineHeight: '1',
                padding: '0.25em',
              }}
            >
              {subheading}
            </h3>
          </div>
          <div
            className="is-centered"
            style={{ paddingTop: '1.2rem', paddingBottom: '1.2rem' }}
          >
            <div className="columns is-centered has-text-centered">
              <div className="column btn-mainpage-column is-one-fifth">
                <Link className="btn-mainpage" to="/company">
                  ⠀About Us⠀
                </Link>
              </div>
              <div className="column btn-mainpage-column is-one-fifth">
                <Link className="btn-mainpage" to="/products">
                  Our Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile mainpitch-title has-text-centered">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile mainpitch-subtitle has-text-centered">
                    <h3 className="subtitle">{mainpitch.subtitle}</h3>
                  </div>
                  <div className="tile">
                    <p className="index-text">{mainpitch.description}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="intro-titles column is-12 has-text-centered">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {intro.title}
                    </h3>
                    <p className="index-text">{intro.subtitle}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn-product" to="/products">
                      See Product Details
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest Posts
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn-product" to="/blog">
                      Read more posts
                    </Link>
                  </div>
                </div>

                <h3 className="has-text-weight-semibold is-size-2">
                  Collaborators
                </h3>
                <div style={{ width: '100%' }}>
                  <div
                    style={{
                      width: '100%',
                      height: '0',
                      backgroundRepeat: 'no-repeat',
                      paddingTop: '29.507%',
                      backgroundSize: 'contain',
                      backgroundImage: `url(${
                        !!collaboratorsImage.childImageSharp
                          ? collaboratorsImage.childImageSharp.fluid.src
                          : collaboratorsImage
                      })`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    blurbs: PropTypes.array,
  }),
  collaboratorsImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
        collaboratorsImage={frontmatter.collaboratorsImage}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          subtitle
          description
        }
        intro {
          title
          subtitle
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 350, quality: 30) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            text
          }
        }
        collaboratorsImage {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 30) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
