import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import $ from 'jquery';
import Materialize from 'materialize-css';
import Central from './components/Central.jsx';
import AddDinheiro from './components/AddDinheiro.jsx';
import AddDespesa from './components/AddDespesa.jsx';
import Despesas from './components/Despesas.jsx';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import './css/materialize.css';
import './icons/icon.css';

import Carteira from './components/Carteira.jsx';

window.jQuery = $;
window.Materialize = Materialize;

Carteira.init((success) => {
	if (success) {
		ReactDOM.render(
			<HashRouter>
				<Switch>
					<Route exact path="/" component= {Central}></Route>
					<Route path="/carteira" component= {Central}></Route>
					<Route path="/receita" component= {AddDinheiro}></Route>
					<Route path="/despesa" component= {AddDespesa}></Route>
					<Route path="/extrato" component= {Despesas}></Route>
				</Switch>

			</HashRouter>,
			document.getElementById('main')
		);
	} else {
		console.error("Não foi possível iniciar o pouchdb");
	}
});
