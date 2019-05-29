import React from 'react';
import { shallow } from 'enzyme';
import CheckboxQuestion from './Checkbox-question';

describe('<CheckboxQuestion />', () => {
  test('renders', () => {
    const wrapper = shallow(<CheckboxQuestion />);
    expect(wrapper).toMatchSnapshot();
  });
});
