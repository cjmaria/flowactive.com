import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/FlowActive_AllWhite.svg'

const NavbarTransparent = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      displayMenuItems: 'flex',
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        if (this.state.active) {
          this.setState({
            navBarActiveClass: 'is-active',
          })
        } else {
          this.setState({
            navBarActiveClass: '',
          })
        }
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className={`navbar-brand ${this.state.navBarActiveClass}`}>
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={logo}
                alt="Flow Active"
                style={{ width: '200px', maxHeight: '2.75rem' }}
              />
            </Link>
            {/* Hamburger menu */}
            <button
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            id="navMenu"
            className={`navbar-transparent-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered is-centered">
              <Link className="navbar-item" to="/products">
                Our Product
              </Link>
              <Link className="navbar-item" to="/blog">
                News
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/company">
                About Us
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <div className="btn-box is-12 has-text-centered">
                <a
                  className="btn-navbar-transparent"
                  href="https://beta.dashboard.mobius-labs.com/"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavbarTransparent
