import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import $ from 'jquery';
import Materialize from 'materialize-css';
import App from './components/App.jsx';
import { Link } from 'react-router'

window.jQuery = $;
window.Materialize = Materialize;

ReactDOM.render(
	<App />,
	document.getElementById('main')
);
