import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Hero from './hero';

describe('Hero component', () => {
  it('should render default text', () => {
    const hero = TestUtils.renderIntoDocument(<Hero/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(hero, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
