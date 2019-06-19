import React from 'react';
import { shallow } from 'enzyme';
import ContactUs from './Contact-Us';

describe('<ContactUs />', () => {
  test('renders', () => {
    const wrapper = shallow(<ContactUs />);
    expect(wrapper).toMatchSnapshot();
  });
});
