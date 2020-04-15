import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class CoreTeamRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline is-centered">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-3" key={post.id}>
              <article
                className={`team-list-item tile is-info is-child box notification `}
              >
                <header className="teamroll-thumbnail-header">
                  {post.frontmatter.headshotimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.headshotimage,
                          alt: `Headshot image thumbnail for post ${post.frontmatter.name}`,
                        }}
                      />
                    </div>
                  ) : null}
                </header>
                <h2 className="title has-text-centered has-text-black is-size-5">
                  {post.frontmatter.name}
                </h2>
                <span className="subtitle has-text-centered is-size-6 is-block">
                  {post.frontmatter.role}
                </span>
                <p className="has-text-centered">{post.excerpt}</p>
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
          sort: { order: ASC, fields: [frontmatter___ordering] }
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
                name
                templateKey
                role
                ordering
                iscoreteam
                headshotimage {
                  childImageSharp {
                    fluid(maxWidth: 200, quality: 20) {
                      ...GatsbyImageSharpFluid
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
