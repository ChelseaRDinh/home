import React, { Component } from 'react';

class NavBar extends Component {
	render() {
		return (
			<React.Fragment>
				<header>
					<nav className="navbar">
						<ul>
							<li>About</li>
							<li>Projects</li>
							<li>Contact</li>
						</ul>
					</nav>
				</header>
			</React.Fragment>
		);
	}
}

export default NavBar;