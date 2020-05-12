import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

	constructor() {
		super();
		this.state = {
			name: '',
			message: '',
			email: '',
			sent: false,
			buttonText: 'Send Message'
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = (e) => {
		// Prevents default action of form class which causes page to reload.
		e.preventDefault();

		this.setState({
			buttonText: 'Sending...'
		});

		let data = {
			name: this.state.name,
			email: this.state.email,
			message: this.state.message
		};

		axios.post('API_URI', data)
		.then( res => {
			this.setState({ sent: true }, this.resetForm());
		}).catch( () => {
			console.log('Message not sent.');
		});
	}

	resetForm = () => {
		this.setState({
			name: '',
			message: '',
			email: '',
			buttonText: 'Message sent!'
		});
	}

	render() {
		return (
			<div className="contact">
				<form className="contact-form" onSubmit={this.handleSubmit}>
				<label className="message-name" htmlFor="message-name">Name</label>
					<input onChange={e => this.setState({ name: e.target.value})} name="name" className="message-name" type="text" placeholder="Your Name" value={this.state.name}/>

					<label className="message-email" htmlFor="message-email">Email</label>
					<input onChange={(e) => this.setState({ email: e.target.value})} name="email" className="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />

					<label className="message" htmlFor="message-input">Your Message</label>
					<textarea onChange={e => this.setState({ message: e.target.value})} name="message" className="message-input" type="text" placeholder="Send me a message!" value={this.state.message} required/>

					<div className="button--container">
						<button type="submit" className="button button-primary">{ this.state.buttonText }</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Contact;