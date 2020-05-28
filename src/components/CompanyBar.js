import React from 'react'
import { Link } from 'gatsby'

const CompanyBar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      containerClass: this.props.containerClass,
      position: 'relative',
      top: null,
      scrollPadding: '0vh',
    }
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
      <div className="companybar">
        <nav
          className={this.state.containerClass}
          role="navigation"
          aria-label="main-navigation"
          style={{ position: this.state.position, top: this.state.top }}
        >
          <div onScroll={this.handleScroll}>
            <div
              id="navMenu"
              className={`companybar-menu ${this.state.navBarActiveClass}`}
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

export default CompanyBar
