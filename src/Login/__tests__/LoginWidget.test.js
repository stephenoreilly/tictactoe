import React from 'react';
import {shallow} from 'enzyme';
import LoginWidget from '../LoginWidget';

test('LoginWidget has tabs', () => {
  const loginWidget = shallow(<LoginWidget />)

  expect(loginWidget.find('Tabs').nodes).toHaveLength(1)
})

test('LoginWidget has 2 tabs', () => {
  const loginWidget = shallow(<LoginWidget />)

  expect(loginWidget.find('Tab').nodes).toHaveLength(2)
})

test('LoginWidget has 2 buttons', () => {
  const loginWidget = shallow(<LoginWidget />)

  expect(loginWidget.find('RaisedButton').nodes).toHaveLength(2)
  expect(loginWidget.find('RaisedButton').nodes[0].props.label).toEqual("Sign In")
  expect(loginWidget.find('RaisedButton').nodes[1].props.label).toEqual("Log In")
})

test('LoginWidget has 4 input fields', () => {
  const loginWidget = shallow(<LoginWidget />)

  expect(loginWidget.find('TextField').nodes).toHaveLength(4)
})