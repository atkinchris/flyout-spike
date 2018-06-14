import React, { Component } from 'react'

import FlyOut from './Flyout'

class WithFlyout extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false,
    }

    this.toggleFlyout = this.toggleFlyout.bind(this)
  }

  toggleFlyout() {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
  }

  render() {
    const { isOpen } = this.state

    return (
      <div>
        <button className="button" onClick={this.toggleFlyout}>
          Click Me!
        </button>
        { isOpen && <FlyOut onClose={this.toggleFlyout} /> }
      </div>
    )
  }
}

export default WithFlyout
