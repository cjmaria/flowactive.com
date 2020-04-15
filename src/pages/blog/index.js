import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="margin-top-0">
          <h1
            className="has-text-weight-bold has-text-centered is-size-2"
            style={{
              boxShadow: '0.5rem 0 0 #3578BD, -0.5rem 0 0 #000',
              backgroundColor: '#3578BD',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Posts
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
