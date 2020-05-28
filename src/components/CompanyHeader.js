import React from 'react'
import { Link } from 'gatsby'

const CompanyHeader = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      containerClass: this.props.containerClass,
      position: 'relative',
      top: null,
      scrollPadding: '0vh',
      heading: this.props.heading,
      subheading: this.props.subheading,
      backgroundImage: this.props.backgroundImage,
    }
    this.barRef = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY >= 0.72 * window.innerHeight && window.innerWidth > 1024) {
      const fixedState = {
        top: 0,
        position: 'fixed',
        scrollPadding: '6.2rem',
      }
      this.setState(fixedState)
    } else {
      const relativeState = {
        top: null,
        position: 'relative',
        scrollPadding: '0vh',
      }
      this.setState(relativeState)
    }
  }

  render() {
    return (
      <div>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              !!this.state.backgroundImage.childImageSharp
                ? this.state.backgroundImage.childImageSharp.fluid.src
                : this.state.backgroundImage
            })`,
          }}
        >
          <div className="section" style={{ width: '100%' }}>
            <div className="columns is-centered">
              <div className="column is-three-fifths has-text-centered">
                <p
                  className="is-size-2-mobile is-size-1-tablet is-size-1-widescreen"
                  style={{
                    color: '#fff',
                    fontFamily: 'Source Sans Pro',
                    fontWeight: '600',
                    lineHeight: '1',
                  }}
                >
                  {this.state.heading}
                </p>
                <br/>
                <p
                  className="is-size-6-mobile is-size-6-tablet is-size-4-widescreen"
                  style={{
                    color: '#fff',
                    fontFamily: 'Source Sans Pro',
                    fontSize: '1.2rem',
                    fontWeight: '500',
                  }}
                >
                  {this.state.subheading}
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav
          className={this.state.containerClass}
          role="navigation"
          aria-label="main-navigation"
          style={{ position: this.state.position, top: this.state.top }}
        >
          <div className="container" onScroll={this.handleScroll}>
            <div
              id="navMenu"
              className={`companyheader-menu ${this.state.navBarActiveClass}`}
            >
              <div
                className="navbar-start has-text-centered"
                style={{ justifyContent: 'center' }}
              >
                <Link className="navbar-item" to="/company">
                  About Us
                </Link>
                <Link className="navbar-item" to="/company/team">
                  Our Team
                </Link>
                <Link className="navbar-item" to="/company/careers">
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div
          style={{ display: 'inline-block', height: this.state.scrollPadding }}
        />
      </div>
    )
  }
}

export default CompanyHeader
