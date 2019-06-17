import React from 'react';
import { shallow } from 'enzyme';
import QuestionInfo from './QuestionInfo';

describe('<QuestionInfo />', () => {
  test('renders', () => {
    const wrapper = shallow(<QuestionInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
