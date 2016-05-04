/// <reference path="../../../typings/tsd.d.ts" />

import * as TestUtils from 'react-addons-test-utils'
import * as React from 'react' // eslint-disable-line
import App from '../App.tsx' // eslint-disable-line

describe('App', () => {
  it('Should be definde', () => {
    const component = TestUtils.renderIntoDocument(
        <App />
    )

    expect(component).not.toBeNull()
  })
})
