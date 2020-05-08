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

function App() {
  return (
    <div className="app">
		<NavBar />
		<main>
			Main content.
		</main>
    </div>
  );
}

export default App;
