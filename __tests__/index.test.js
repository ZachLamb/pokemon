import React from 'react';
import { shallow } from 'enzyme';
import IndexPage from '../pages/index'
describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<IndexPage/>);
    });
});