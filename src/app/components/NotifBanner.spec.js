import React from 'react';
import TestUtils from 'react-addons-test-utils';
import NotifBanner from './notifBanner';

describe('NotifBanner component', () => {
  it('should render default text', () => {
    const notifBanner = TestUtils.renderIntoDocument(<NotifBanner/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(notifBanner, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
