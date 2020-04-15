import React from 'react'

import Layout from '../../components/Layout'
import CoreTeamRoll from '../../components/CoreTeamRoll'
import BoardMemberRoll from '../../components/BoardMemberRoll'
import AdvisorRoll from '../../components/AdvisorRoll'

export default class TeamIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="team-page-conatiner">
          <section className="section">
            <div className="margin-top-0">
              <h1
                className="has-text-weight-bold has-text-centered is-size-2"
                style={{
                  backgroundColor: 'transparent',
                  color: '#4a4a4a',
                  padding: '1rem',
                }}
              >
                Core Team
              </h1>
            </div>

            <div className="container">
              <div className="content">
                <CoreTeamRoll />
              </div>
            </div>
          </section>
          <section className="section">
            <h1
              className="has-text-weight-bold has-text-centered is-size-2"
              style={{
                backgroundColor: 'transparent',
                color: '#4a4a4a',
                padding: '1rem',
              }}
            >
              Board of Directors
            </h1>

            <div className="container">
              <div className="content">
                <BoardMemberRoll />
              </div>
            </div>
          </section>

          <h1
            className="has-text-weight-bold has-text-centered is-size-2"
            style={{
              backgroundColor: 'transparent',
              color: '#4a4a4a',
              padding: '1rem',
            }}
          >
            Advisors
          </h1>
          <div className="container">
            <div className="content">
              <AdvisorRoll />
            </div>
          </div>
        </div>
        <br />
        <br />
      </Layout>
    )
  }
}
