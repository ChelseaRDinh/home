import React, { Component } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	toggleMenu() {
		let navbarToggle = document.getElementById('js-navbar-toggle');
		let navbarList = document.getElementById('js-navbar__list');

		navbarToggle.addEventListener('click', () => {
			navbarList.classList.toggle('active');
			navbarToggle.classList.toggle('active');
		});
	}

	closeMenu() {
		let navbarToggle = document.getElementById('js-navbar-toggle');
		let navbarList = document.getElementById('js-navbar__list');

		navbarToggle.classList.toggle('active');
		navbarList.classList.toggle('active');
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
					<li className="navbar-links" onClick={this.closeMenu}>
						<NavLink className="navbar-links" to="/about">About</NavLink>
					</li>
					<li className="navbar-links" onClick={this.closeMenu}>
						<NavLink className="navbar-links" to="/projects">Projects</NavLink>
					</li>
					<li className="navbar-links" onClick={this.closeMenu}>
						<NavLink className="navbar-links" to="/contact">Contact</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default NavBar;