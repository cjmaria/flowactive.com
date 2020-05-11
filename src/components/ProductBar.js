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
      scrollPadding: '0vh'
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
    let isMobile = (window.innerWidth <= 1024)
    if ((window.scrollY >= 537.391 + 0.1 * window.innerHeight) && !isMobile) {
      const fixedState = {
        top: 0,
        position: 'fixed',
        scrollPadding: '6.2rem'
      }
      this.setState(fixedState)
    } else {
      const relativeState = {
        top: null,
        position: 'relative',
        scrollPadding: '0vh'
      }
      this.setState(relativeState)
    }
  }

  render() {
    return (
      <div>
      <nav className={this.state.containerClass} role="navigation" aria-label="main-navigation" style={{position: this.state.position, top: this.state.top}}>
        <div className="container" onScroll={this.handleScroll}>

          <div
            id="navMenu"
            className={`productbar-menu ${this.state.navBarActiveClass}`}
            
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/products">
                Why FirstDrops
              </Link>
              <Link className="navbar-item" to="/about">
                How It Works
              </Link>
              <Link className="navbar-item" to="/blog">
                Use Cases
              </Link>
              <Link className="navbar-item" to="/contact">
                Return on Investment
              </Link>
            </div>
            
          </div>
        </div>

      </nav>
      <div style={{display: 'inline-block', height: this.state.scrollPadding}} />
      </div>
    )
  }
}

export default Productbar
