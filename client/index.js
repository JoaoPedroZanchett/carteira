import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import $ from 'jquery';
import Materialize from 'materialize-css';
import App from './components/App.jsx';
import Central from './components/Central.jsx';
import AddDinheiro from './components/AddDinheiro.jsx';
import AddDespesa from './components/AddDespesa.jsx';
import Despesas from './components/Despesas.jsx';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import './css/materialize.css';

window.jQuery = $;
window.Materialize = Materialize;

ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route exact path="/" component= {App}></Route>
			<Route path="/carteira" component= {Central}></Route>
			<Route path="/receita" component= {AddDinheiro}></Route>
			<Route path="/despesa" component= {AddDespesa}></Route>
			<Route path="/extrato" component= {Despesas}></Route>
		</Switch>

	</HashRouter>,
	document.getElementById('main')
);
