import React from 'react'
import { render } from 'react-dom'

const mountElement = document.getElementById('root')

const App = () => (
  <div>
    Hello World
  </div>
)

render(
  <App />,
  mountElement,
)
