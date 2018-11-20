import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import PageHeader from '../src/components/layouts/PageHeader';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<PageHeader />);
});

it('Should show h1', () => {
  expect(wrapped.find('h1').length).toEqual(1);
});
