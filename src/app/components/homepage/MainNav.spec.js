import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MainNav from './mainNav';

describe('MainNav component', () => {
  it('should render default text', () => {
    const mainNav = TestUtils.renderIntoDocument(<MainNav/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(mainNav, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
