import React, { Component } from 'react';

class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="about">
				<p>I am a recent Computer Science Undergraduate from the University of Victoria!</p>
				<p>I am passionate about web development and building rich, colorful UIs.</p>
			</div>
		);
	}
}

export default About;