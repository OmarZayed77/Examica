import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
