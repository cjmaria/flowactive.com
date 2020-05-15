import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProductFeatures from '../components/ProductFeatures'
import Testimonials from '../components/Testimonials'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import YouTubeVideo from '../components/YouTubeVideo'
import ProductBar from '../components/ProductBar'
import { Link } from 'gatsby'

export const ProductPageTemplate = ({
  productimage,
  smalltitle,
  title,
  subtitle,
  video,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div className="content">
    <div
      style={{
        boxShadow:
          '0.5rem 0 0 rgb(53, 120, 189), -0.5rem 0 0 rgb(53, 120, 189)',
        backgroundColor: '#fff',
      }}
    >
      <h2
        className="product-page-smalltitle has-text-centered is-size-6"
        style={{
          color: '#4a4a4a',
          paddingTop: '3rem',
        }}
      >
        {smalltitle}
      </h2>
      <h1
        className="product-page-title has-text-centered is-size-2"
        style={{
          color: '#4a4a4a',
          paddingTop: '1rem',
          margin: 0,
        }}
      >
        {title} <br />
        {subtitle}
      </h1>
      <div className="btn-box is-12 has-text-centered">
        <Link className="btn-product" to="/contact">
          Contact Us
        </Link>
      </div>
      <div className="has-text-centered">
        <div
          className="product-image-container"
          style={{
            width: '300px',
            display: 'inline-block',
            paddingTop: '2em',
            paddingBottom: '2em',
          }}
        >
          <PreviewCompatibleImage imageInfo={productimage} />
        </div>
      </div>
    </div>

    <ProductBar containerClass="productbar" />

    <div className="container" style={{ zIndex: '-1', position: 'relative' }}>
      <div className="section">
        <div className="columns" id="HowItWorks">
          <div className="column is-full has-text-centered">
            <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
            <p className="is-size-5">{description}</p>
            <YouTubeVideo videoInfo={video} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <ProductFeatures gridItems={intro.blurbs} />
            <div className="columns">
              <div className="column  has-text-centered" id="CustomerSuccess">
                <h1 className="has-text-weight-semibold is-size-1">
                  {main.heading}
                </h1>
                <p>{main.description}</p>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-vertical">
                <div className="tile is-parent">
                  <article className="tile is-child">
                    <PreviewCompatibleImage imageInfo={main.image1} />
                  </article>
                </div>
              </div>
            </div>
            <Testimonials testimonials={testimonials} />
            <div className="tile is-ancestor" id="ReturnOnInvestment">
              <div className="tile is-vertical">
                <div className="tile is-parent">
                  <article className="tile is-child">
                    <PreviewCompatibleImage imageInfo={main.image2} />
                  </article>
                </div>
              </div>
            </div>
            <h2 className="has-text-weight-semibold is-size-2">
              {pricing.heading}
            </h2>
            <p className="is-size-5">{pricing.description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  smalltitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  productimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  video: PropTypes.shape({
    ytid: PropTypes.string,
    alttext: PropTypes.string,
  }),
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        productimage={frontmatter.productimage}
        title={frontmatter.title}
        smalltitle={frontmatter.smalltitle}
        subtitle={frontmatter.subtitle}
        video={frontmatter.videoInfo}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        smalltitle
        title
        subtitle
        productimage {
          childImageSharp {
            fluid(maxWidth: 256, quality: 50) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        videoInfo {
          ytid
          alttext
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 70) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 70) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          quote
        }
        pricing {
          heading
          description
        }
      }
    }
  }
`
