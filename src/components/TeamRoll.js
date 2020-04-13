import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class TeamRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent  column is-4" key={post.id}>
              <article
                className={`team-list-item tile is-info is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header className="teamroll-thumbnail-header">
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                </header>
                <p className="post-meta has-text-centered">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <br />
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.role}
                    </span>
                </p>
                <p className="has-text-centered">
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    More about {post.frontmatter.preferredname} →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

TeamRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query TeamRollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___ordering] }
          filter: { frontmatter: { templateKey: { eq: "team-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 300)
              id
              fields {
                slug
              }
              frontmatter {
                title
                preferredname
                templateKey
                role
                ordering
                featuredpost
                featuredimage {
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
    render={(data, count) => <TeamRoll data={data} count={count} />}
  />
)
