import React, { Component } from 'react';
import Resume from '../resources/resume_2020.pdf';

class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="about slide-up">
				<hr className="content-divider" />
				<h2>About me</h2>
				<p>I am a recent graduate from the University of Victoria where I received a Bachelor of Science in Computer Science.</p>
				<p>My passions include web development; building rich, colorful UIs, and creating beautiful design.</p>
				<a className="resume" href={Resume} target="_blank"><h3>Check out my Resume</h3></a>
				<hr className="content-divider" />
			</div>
		);
	}
}

export default About;