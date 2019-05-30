import React, { Component } from 'react';
import { Select ,Tooltip ,Switch } from "element-react/next";
import './QuestionSettings.css';


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
      value: '',
      value2: 100,
    };
  }

  render() {
    return (
      <>
        <label className=" QuestionSettings  SettingLabel">Scoring:</label>
        <Select value={this.state.value} className="QuestionSettings SettingOptions" >
          {
            this.state.options.map(el => {
              return <Select.Option key={el.value} label={el.label} value={el.value} />
            })
          }
        </Select>

        <label className=" QuestionSettings SettingLabel2">Order Of Questions</label>
        <Select value={this.state.value} className="QuestionSettings SettingOptions2">
          {
            this.state.options.map(el => {
              return <Select.Option key={el.value} label={el.label} value={el.value} />
            })
          }
        </Select>

        <label className="QuestionSettings SettingLabel3">Question Per Page</label>
        <Tooltip
          placement="top"
          content={
            <div>Switch value: {this.state.value}</div>
          }
        >
          <Switch className="QuestionSettings QuestionSwitch"
            value={this.state.value}
            onColor="#13ce66"
            offColor="#ff4949"
            onValue={100}
            offValue={0}
            onChange={(value) => { this.setState({ value: value }) }}
          >
          </Switch>
        </Tooltip>
      </>
    )
  }


}
export default QuestionSettings;
