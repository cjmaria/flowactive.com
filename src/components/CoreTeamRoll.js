import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class CoreTeamRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline is-centered" style={{display: 'flex'}}>
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-one-quarter-widescreen is-one-third-tablet is-three-quarters-mobile is-centered" key={post.id} 
                style={{marinTop: '0.66rem', paddingLeft: '1.8rem', paddingRight: '1.8rem', margin: '0', marginBottom: '1.2rem'}}>
              <article
                className={`team-list-item is-child`}
                style={{paddingRight: '1.5em !important', display: 'block'}}
              >
                <header className="teamroll-thumbnail-header">
                  {post.frontmatter.headshotimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.headshotimage,
                          alt: `Headshot image thumbnail for post ${post.frontmatter.first} ${post.frontmatter.last}`,
                          style: {borderRadius: '50%'}
                        }}
                      />
                    </div>
                  ) : null}
                </header>
                <p className="title has-text-centered has-text-black is-size-5">
                  {post.frontmatter.first}  {post.frontmatter.last}
                </p>
                <span className="subtitle has-text-centered is-size-6 is-block">
                  {post.frontmatter.role}
                </span>
                
              </article>
            </div>
          ))}
      </div>
    )
  }
}

CoreTeamRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query CoreTeamRollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___last] }
          filter: {
            frontmatter: {
              templateKey: { eq: "team-post" }
              iscoreteam: { eq: true }
            }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 140)
              id
              fields {
                slug
              }
              frontmatter {
                first
                last
                templateKey
                role
                ordering
                iscoreteam
                headshotimage {
                  childImageSharp {
                    fluid(maxWidth: 200, quality: 20) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <CoreTeamRoll data={data} count={count} />}
  />
)
