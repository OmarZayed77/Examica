import React, { Component } from 'react';
import './AddOrgnization.css';
import { connect } from 'react-redux';
import { Form, Button, Input, Select} from 'element-react/next';
import { addOrg } from '../../API/orgAPI';

class AddOrgnization extends Component {
	constructor(props) {
		super(props);

		this.state = {
			form: {
				Name: '',
				PricingPlanId: '',
				OwnerId: '',
				Image: ''
			},
			rules: {
				Name: [{ required: true, message: 'Please input Organization name', trigger: 'blur' }],
				PricingPlanId: [{ required: true, type: "number", message: 'Please Select a Pricing Plan', trigger: 'blur' }]
			},
			pricingPlans: [{ Id: 1, Name: 'Premium' }, { Id: 2, Name: 'Gold' }, { Id: 3, Name: 'Silver' }]
		};
	}

	componentDidMount() {
		this.setState({
			form: {
				...this.state.form,
				OwnerId: "33a2a5d5-52c3-420e-89d6-98abeb276f84"
				//OwnerId: this.props.userId
			}
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		this.refs.form.validate((valid) => {
			if (valid) {
				console.log(this.state.form, this.props.token);
				addOrg(this.state.form, this.props.token);
				//addOrg(this.state.form, this.props.token);
			} else {
				return false;
			}
		});
	}

	handleReset(e) {
		e.preventDefault();
		this.refs.form.resetFields();
		this.setState({
			form: {
				Name: '',
				PricingPlanId: '',
				Image: ''
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
						<Form.Item label="Organization name" prop="Name"><Input value={this.state.form.Name} onChange={this.onChange.bind(this, 'Name')} />
						</Form.Item>
						<Form.Item label="Pricing Plan" prop="PricingPlanId">
							<Select
								value={this.state.form.PricingPlanId}
								onChange={this.onChange.bind(this, 'PricingPlanId')}
								placeholder="Please select a Plan"
							>
								{this.state.pricingPlans.map((item) => (
									<Select.Option key={item.Id} label={item.Name} value={item.Id} />
								))}
							</Select>
						</Form.Item>

						<Form.Item label="Image" prop="Image">
							<Input value={this.state.form.Image} onChange={this.onChange.bind(this, 'Image')} />
						</Form.Item>

						<Form.Item>
							<Button type="primary" nativeType="submit" onClick={this.handleSubmit.bind(this)}>
								submit
							</Button>
							<Button onClick={this.handleReset.bind(this)}>Reset</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.auth.token
	};
};

export default connect(mapStateToProps)(AddOrgnization);