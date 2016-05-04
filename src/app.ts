/// <reference path="../typings/tsd.d.ts" />

/**
 * This is our application entry point
 */
import * as React from 'react'
import {render} from 'react-dom'

import App from './components/App.tsx'

const el = document.getElementById('app')

if (!el) {
  throw new Error('No element #app provided')
}

render(React.createElement(App), el)
