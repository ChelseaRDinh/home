import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import NavBar from './components/navbar';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
	  	<div className="app">
			<header>
				<NavBar />
			</header>
			<div className="content">
				<h1 className="full-name">Chelsea Dinh</h1>
				<hr className="content-divider" />
				<div className="content-body">
					<p><strong>Hi there, content is coming soon! :)</strong></p>

					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec felis ac velit euismod elementum. Cras tincidunt est non nunc viverra imperdiet a ut erat. Donec vehicula nisi in metus auctor sollicitudin. Cras convallis posuere ante sed ultrices. Nam sed urna magna. Aenean maximus non dui cursus pretium. Aliquam vel accumsan tellus, et sodales lacus. In mi mi, efficitur vitae varius eu, dignissim sit amet massa. Donec pulvinar auctor nunc. In nec fermentum nibh. Quisque ut suscipit quam. Sed volutpat congue venenatis.

					In dictum dui semper cursus sollicitudin. Aliquam consequat, diam et consequat sollicitudin, urna est lobortis ipsum, nec volutpat est nisl in ligula. Duis malesuada est ligula, quis fringilla odio mollis in. Curabitur efficitur, purus vehicula gravida ultricies, neque velit mattis lorem, eleifend varius orci sapien a ex. Cras at vestibulum ligula, sed blandit sem. Praesent scelerisque velit at urna imperdiet viverra. Aenean non fermentum magna. Mauris a placerat dui. Proin finibus aliquam pellentesque.

					Vivamus eleifend consequat rutrum. Vestibulum non blandit elit, vel interdum metus. Nulla vitae viverra turpis. Nam vestibulum quam eget sem porttitor, eget iaculis enim euismod. Ut nisi ligula, sagittis in rutrum sed, blandit ut est. Vestibulum consectetur arcu sed quam commodo, id vulputate ex pharetra. Suspendisse non elementum justo, ac luctus orci. Morbi ante erat, faucibus at ante sed, malesuada tincidunt metus. Vestibulum feugiat vel ante eu finibus. Phasellus nec nunc et nulla placerat semper. Nunc euismod, augue sed convallis pharetra, risus ligula tristique lacus, a sagittis nunc leo a massa. Nam odio tellus, vehicula a turpis quis, tempus finibus enim. Maecenas interdum ligula id felis viverra malesuada.

					Curabitur eget egestas erat, eget venenatis dui. Proin augue metus, porttitor vitae felis iaculis, porta vulputate lectus. Vestibulum porttitor, nulla non euismod tristique, purus nunc rutrum dui, vel facilisis neque odio id ipsum. Nam venenatis lobortis dolor, non ultricies odio lacinia ac. Aliquam erat volutpat. Sed finibus lectus iaculis egestas semper. Etiam sollicitudin consequat elit vitae sollicitudin. Integer mollis magna sed turpis euismod tempus. Nunc sollicitudin et augue sed blandit. Nunc at lobortis mauris. Pellentesque elementum tellus id arcu ornare commodo.

					Phasellus sed bibendum risus, sit amet rutrum dui. Praesent venenatis gravida leo, ac rhoncus dui iaculis eu. Curabitur id fermentum magna. Fusce semper enim et sem luctus gravida. Ut pretium turpis et porttitor iaculis. Nulla feugiat justo et purus dignissim maximus. Mauris id mauris quam. Quisque et metus sed massa blandit sagittis. Ut sagittis sem eget nibh bibendum convallis. In scelerisque mi est, non viverra tortor cursus sed. Aenean varius sed ante id dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum tellus urna, laoreet quis odio in, auctor placerat metus.
				</div>
				<hr className="content-divider" />
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
  );
}

export default App;
