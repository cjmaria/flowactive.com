import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class BoardMemberRoll extends React.Component {
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
                <h2 className="title has-text-centered has-text-black is-size-5">
                  {post.frontmatter.name}
                </h2>
                <span className="subtitle has-text-centered is-size-6 is-block">
                  {post.frontmatter.role}
                </span>
                <p className="has-text-centered">{post.frontmatter.oneliner}</p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BoardMemberRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BoardMemberRollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___ordering] }
          filter: {
            frontmatter: {
              templateKey: { eq: "team-post" }
              isboardmember: { eq: true }
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
                isboardmember
                oneliner
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
    render={(data, count) => <BoardMemberRoll data={data} count={count} />}
  />
)
