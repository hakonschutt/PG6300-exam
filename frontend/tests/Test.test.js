import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Test from '../src/Test';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Test />);
});

it('Should show h1', () => {
  expect(wrapped.find('h1').length).toEqual(1);
});
