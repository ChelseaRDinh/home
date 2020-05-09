import React, { Component } from 'react';
import { Link } from 'react-router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
		});
	}

	render() {
		return (
			<div className="navbar">
				<nav>
					<span className="navbar-toggle" id="js-navbar-toggle" onClick={this.toggleMenu}>
						<FontAwesomeIcon icon={faBars} />
					</span>
					<a href='#' className="navbar-logo">logo</a>
					<ul className="navbar__list" id="js-navbar__list">
						<li><a className="navbar__links" href="#About">About</a></li>
						<li><a className="navbar__links" href="#Projects">Projects</a></li>
						<li><a className="navbar__links" href="#Contact">Contact</a></li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default NavBar;