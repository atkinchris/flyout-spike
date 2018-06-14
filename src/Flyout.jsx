import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Flyout extends Component {
  constructor(props) {
    super(props)

    this.selfRef = React.createRef()
    this.state = {
      offset: 0,
    }
  }

  componentDidMount() {
    const { right } = this.selfRef.current.getBoundingClientRect()
    const { innerWidth } = window

    if (right > innerWidth) {
      const offset = Math.floor(innerWidth - right)
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ offset })
    }
  }

  render() {
    const style = {
      left: `${this.state.offset}px`,
    }

    return (
      <div className="anchor">
        <div className="flyout-blanket" onClick={this.props.onClose} />
        <div className="flyout" ref={this.selfRef} style={style}>
          <div className="flyout-inner">
            <p>This is some supporting content to be contained in a flyout.</p>
            <marquee>
              VISUALLY DISTRACTING
            </marquee>
            <img src="http://i.imgur.com/425T7xS.gif" alt="bunny" />
            <div>
              <button onClick={this.props.onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Flyout.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default Flyout
