import React from 'react'
import { Link } from 'gatsby'

const Productbar = class extends React.Component {
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
    if (window.scrollY >= 537.391 + 0.08 * window.innerHeight && window.innerWidth > 1024) {
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
        <nav
          className={this.state.containerClass}
          role="navigation"
          aria-label="main-navigation"
          style={{ position: this.state.position, top: this.state.top }}
        >
          <div className="container" onScroll={this.handleScroll}>
            <div
              id="productMenu"
              className={`productbar-menu ${this.state.navBarActiveClass}`}
            >
              <div
                className="navbar-start has-text-centered"
                style={{ justifyContent: 'center' }}
              >
                <Link className="navbar-item" to="/products#HowItWorks">
                  How It Works
                </Link>
                <Link className="navbar-item" to="/products#CustomerSuccess">
                  Customer Successes
                </Link>
                <Link className="navbar-item" to="/products#ReturnOnInvestment">
                  Return on Investment
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

export default Productbar
