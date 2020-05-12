import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: ''
		};
		this.resetForm = this.resetForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onNameChange = this.onNameChange.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onMessageChange = this.onMessageChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		axios({
			method: 'POST',
			url: 'http://localhost:3002/send',
			data: this.state
		}).then(response => {
			if (response.data.status === 'success') {
				alert('Message sent.');
				this.resetForm();
			} else if (response.data.status === 'fail') {
				alert('Message failed to send.');
			}
		}).catch(error => {
			console.log(error);
		});
	}

	resetForm() {
		this.setState({
			name: '',
			email: '',
			message: ''
		});
	}

	onNameChange(e) {
		this.setState({name: e.target.value});
	}

	onEmailChange(e) {
		this.setState({email: e.target.value});
	}

	onMessageChange(e) {
		this.setState({message: e.target.value});
	}

	render() {
		return (
			<div className="contact">
				<form id="contact-form" onSubmit={this.handleSubmit} method="POST">
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange} />
					</div>
					<div className="form-group">
						<label htmlFor="email-address">Email Address</label>
						<input type="email" className="form-control" id="email" value={this.state.email} onChange={this.onEmailChange} />
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange} />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

export default Contact;