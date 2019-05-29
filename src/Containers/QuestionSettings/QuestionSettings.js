import React, { Component } from 'react';
import {Select} from "element-react/next";

class QuestionSettings extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      options: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      value: ''
    }
  }
  
  render() {
    return (
      <>
      
      <Select value={this.state.value}>
        {
          this.state.options.map(el => {
            return <Select.Option key={el.value} label={el.label} value={el.value} />
          })
        }
      </Select>
    </>
    )
  }
}  
export default QuestionSettings;
