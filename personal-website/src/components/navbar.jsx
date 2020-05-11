import React, { Component } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		let navbarToggle = document.getElementById('js-navbar-toggle');
		let navbarList = document.getElementById('js-navbar__list');

		navbarToggle.addEventListener('click', () => {
			navbarList.classList.toggle('active');
			navbarToggle.classList.toggle('active');
		});
	}

	render() {
		return (
			<nav className="navbar">
				<div className="navbar-toggle" id="js-navbar-toggle" onClick={this.toggleMenu}>
					<div className="bar-one"></div>
					<div className="bar-two"></div>
					<div className="bar-three"></div>
				</div>
				<a href='#' className="navbar-logo">
					<FontAwesomeIcon icon={faHeart} />
				</a>
				<ul className="navbar-list" id="js-navbar__list">
					{this.props.children}
				</ul>
			</nav>
		);
	}
}

export default NavBar;