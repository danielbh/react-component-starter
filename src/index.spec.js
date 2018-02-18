import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'

describe('<ButtonBar />', () => {
  it('matches snapshot', () => {
    expect(shallow(<Button onClick={() => {}} />)).toMatchSnapshot()
  })
})
