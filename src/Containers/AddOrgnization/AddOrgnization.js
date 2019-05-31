import React, { Component } from 'react';
import './AddOrgnization.css';
import { Form, Button, Input, Select, Layout } from 'element-react/next';
import { addOrg } from '../../API/orgAPI';

class AddOrgnization extends Component {
	constructor(props) {
		super(props);

		this.state = {
			form: {
				Name: '',
				PricingPlanId: '',
				Owner: '',
				Image: ''
			},
			rules: {
				Name: [ { required: true, message: 'Please input Organization name', trigger: 'blur' } ],
				PricingPlanId: [ { required: true, message: 'Please select A Plane', trigger: 'change' } ],
				phoneNum: [ { required: true, message: 'Please enter org Number', trigger: 'change' } ],

				sName: [ { required: true, message: 'Please enter a site name', trigger: 'blur' } ],

				desc: [ { required: true, message: 'Please input activity form', trigger: 'blur' } ]
			}
		};
	}

	handleSubmit(e) {
		e.preventDefault();

		this.refs.form.validate((valid) => {
			if (valid) {
				// this.setState({
				// 	form: {
				// 		...this.state.form,
				// 		OwnerId : this.props.userId
				// 	}
				// });
				addOrg(this.state.form, this.props.token);
			} else {
				return false;
			}
		});
	}

	onChange(key, value) {
		this.setState({
			form: Object.assign({}, this.state.form, { [key]: value })
		});
	}

	render() {
		return (
			<div className="container mt-5 pt-5">
				<div className="row justify-content-center">
					<Form
						ref="form"
						className="en-US"
						model={this.state.form}
						labelWidth="120"
						rules={this.state.rules}
						onSubmit={this.handleSubmit.bind(this)}
					>
						<Form.Item label="Organization name" prop="name">
							<Layout.Col>
								<Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')} />
							</Layout.Col>
						</Form.Item>
						<Form.Item label="Pricing Plane" prop="pPlan">
							<Select
								value={this.state.form.pPlan}
								onChange={this.onChange.bind(this, 'pPlan')}
								placeholder="Please select a Plan"
							>
								<Select.Option label="free" value="free" />
								<Select.Option label="medium" value="medium" />
								<Select.Option label="premium" value="premium" />
							</Select>
						</Form.Item>

						<Form.Item label="Organization Phone" prop="phoneNum">
							<Layout.Col>
								<Input
									type="number"
									value={this.state.form.phoneNum}
									onChange={this.onChange.bind(this, 'phoneNum')}
								/>
							</Layout.Col>
						</Form.Item>

						<Form.Item label="Site name" prop="sName">
							<Layout.Col>
								<Input value={this.state.form.sName} onChange={this.onChange.bind(this, 'sName')} />
							</Layout.Col>
						</Form.Item>
						<Form.Item label="upload image" prop="img">
							<Layout.Col>
								<Input
									type="text"
									value={this.state.form.img}
									onChange={this.onChange.bind(this, 'img')}
								/>
							</Layout.Col>
						</Form.Item>
						<Form.Item label="Organization Description" prop="desc">
							<Layout.Col>
								<Input
									autosize={true}
									type="textarea"
									value={this.state.form.desc}
									onChange={this.onChange.bind(this, 'desc')}
								/>
							</Layout.Col>
						</Form.Item>
						<Form.Item>
							<Button type="primary" nativeType="submit" onClick={this.handleSubmit.bind(this)}>
								Create
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		);
	}
}



export default AddOrgnization;
