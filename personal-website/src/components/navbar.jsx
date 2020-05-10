import React, { Component } from 'react';
import { Link } from 'react-router';
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
					<div class="bar-one"></div>
					<div class="bar-two"></div>
					<div class="bar-three"></div>
				</div>
				<a href='#' className="navbar-logo">
					<FontAwesomeIcon icon={faHeart} />
				</a>
				<ul className="navbar-list" id="js-navbar__list">
					<li><a className="navbar-links" href="#About">About</a></li>
					<li><a className="navbar-links" href="#Projects">Projects</a></li>
					<li><a className="navbar-links" href="#Contact">Contact</a></li>
				</ul>
			</nav>
		);
	}
}

export default NavBar;