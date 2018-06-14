import React from 'react'
import { render } from 'react-dom'

import WithFlyout from './WithFlyout'

import './index.css'

const mountElement = document.getElementById('root')

const App = () => (
  <div className="container">
    <WithFlyout />
    <WithFlyout />
    <WithFlyout />
    <WithFlyout />
    <WithFlyout />
    <WithFlyout />
    <WithFlyout />
    <WithFlyout />
    <WithFlyout />
    <WithFlyout />
    <WithFlyout />
    <WithFlyout />
    <WithFlyout />
  </div>
)

render(
  <App />,
  mountElement,
)
