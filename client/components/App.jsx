import React from 'react';
import Navbar from './Navbar.jsx';
import Central from './Central.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Carteira from './Carteira.jsx';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      valorInicial: 0.00,
    }
  },
  mudarValor: function(e){
    e.preventDefault();
    Carteira.setSaldo(this.refs['valor'].valueAsNumber);
    this.context.router.push("/carteira");
  },

  render: function(){
    return (
      <div>
        <Navbar />
          <div className="container">
            <div className="row">
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <div className="input-field col s11">
                <i className="small material-icons prefix light-green-text">monetization_on</i>
                <input defaultValue={Carteira.getSaldo()} ref='valor' className="validate" type="number" />
                <label>Valor Inicial</label>
              </div>
              <div className="input-field col s8 offset-s2">
                <center>
                  <button className="waves-effect red darken-4 btn" onClick={this.mudarValor}>
                    <i className="material-icons right">check</i>INICIAR
                  </button>
                </center>
              </div>
            </div>
          </div>
      </div>
    )
  }
})
