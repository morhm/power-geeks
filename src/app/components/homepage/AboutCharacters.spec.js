import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AboutCharacters from './aboutCharacters';

describe('AboutCharacters component', () => {
  it('should render default text', () => {
    const aboutCharacters = TestUtils.renderIntoDocument(<AboutCharacters/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(aboutCharacters, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
