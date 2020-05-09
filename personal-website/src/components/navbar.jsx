import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
	render() {
		return (
			<div className="navbar">
				<nav>
					<ul>
						<li><a class="about" href="#About">About</a></li>
						<li><a class="projects" href="#Projects">Projects</a></li>
						<li><a class="contact" href="#Contact">Contact</a></li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default NavBar;