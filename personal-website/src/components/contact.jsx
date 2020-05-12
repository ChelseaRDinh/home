import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
	}

	resetForm() {};

	render() {
		return (
			<div className="contact">
			</div>
		);
	}
}

export default Contact;