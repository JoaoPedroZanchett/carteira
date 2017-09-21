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
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

window.jQuery = $;
window.Materialize = Materialize;

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component= {App}></Route>
			<Route path="/carteira/:valor/:motivos" component= {Central}></Route>
			<Route path="/dinheiro/:atual/:motivos" component= {AddDinheiro}></Route>
			<Route path="/despesa/:atual/:motivos" component= {AddDespesa}></Route>
			<Route path="/motivos/:atual/:motivos" component= {Despesas}></Route>
		</Switch>

	</BrowserRouter>,
	document.getElementById('main')
);
