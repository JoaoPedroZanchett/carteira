import React from 'react';
import AddDinheiro from './AddDinheiro.jsx';
import Navbar from './Navbar.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Carteira from './Carteira.jsx';


export default React.createClass({
    getInitialState: function(){
      return {
        saldo: Carteira.saldo,
        motivosTotais: ''
      }
    },
    render: function(){
      return(
        <div>
          <Navbar />
          <div className="container">
            <div className="row">
              <center>
                  <br></br><br></br><br></br><br></br><br></br><br></br>
                  <div className="card col s10  m4 offset-s1 offset-m4">
                      <br></br><br></br>
                      <h5 className="red-text">SALDO</h5>
                      {this.state.saldo < 0 ? (
                        <h4 className="red-text">R$ {this.state.saldo}</h4>
                      ) : this.state.saldo > 0 ? (
                        <h4 className="green-text">R$ {this.state.saldo}</h4>
                      ) : (
                        <h4 className="blue-text">R$ {this.state.saldo}</h4>
                      )}
                      <br></br><br></br>
                  </div>
              </center>
            </div>
            <div className="fixed-action-btn toolbar">
              <a className="btn-floating btn-large red darken-4">
                <i className="large material-icons">menu</i>
              </a>
              <ul>
                <li className="waves-effect waves-light"><Link to={"/receita"}><i className="material-icons">add</i></Link></li>
                <li className="waves-effect waves-light"><Link to={"/despesa"}><i className="material-icons">remove</i></Link></li>
                <li className="waves-effect waves-light"><Link to={"/extrato"}><i className="material-icons">check</i></Link></li>
              </ul>
            </div>
          </div>
      </div>
        );
    }
});
