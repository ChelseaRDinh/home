import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavLink, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
	<Router>
		<div className="app">
			<header>
				<NavBar />
			</header>
			<div className="content">
				<Switch>
					<Route path="/" exact >
						<div className="home slide-up">
							<hr className="content-divider" />
								<h1 className="full-name">Hello, I'm Chelsea!</h1>
								<p>Real content is coming soon!</p>
						</div>
						<hr className="content-divider" />
					</Route>
					<Route path="/about" component={About} />
					<Route path="/projects" component={Projects} />
					<Route path="/contact" component={Contact} />
				</Switch>
				<div className="social-media-links">
					<span className="social-media-icon">
						<a className="social-media-link" target="_blank" href="https://www.facebook.com/chelsearhdinh/"><FontAwesomeIcon icon={faFacebookF} /></a>
					</span>
					<span className="social-media-icon">
						<a className="social-media-link" target="_blank" href="https://github.com/chelseardinh"><FontAwesomeIcon icon={faGithub} /></a>
					</span>
					<span className="social-media-icon">
						<a className="social-media-link" target="_blank" href="https://www.linkedin.com/in/chelseardinh/"><FontAwesomeIcon icon={faLinkedin} /></a>
					</span>
				</div>
			</div>
		</div>
	</Router>
  );
}

export default App;
