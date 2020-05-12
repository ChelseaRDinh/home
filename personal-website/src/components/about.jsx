import React, { Component } from 'react';

class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="about slide-up">
				<hr className="content-divider" />
				<p>I am a recent Computer Science Undergraduate from the University of Victoria!</p>
				<p>I am passionate about web development and building rich, colorful UIs.</p>
				<hr className="content-divider" />
			</div>
		);
	}
}

export default About;