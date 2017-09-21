import React from 'react';
import Navbar from './Navbar.jsx';
import Central from './Central.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Carteira from './Carteira.jsx';

export default React.createClass({
  getInitialState: function(){
    return {
      valorInicial: 0.00,
    }
  },
  mudarValor: function(e){
    Carteira.saldo = e.target.valueAsNumber;
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
                <input defaultValue={this.state.valorInicial} onChange={this.mudarValor} className="validate" type="number" />
                <label>Valor Inicial</label>
              </div>
              <div className="input-field col s8 offset-s2">
                <center>
                  <Link className="waves-effect red darken-4 btn" to={"/carteira"} ><i className="material-icons right">check</i>INICIAR</Link>
                </center>
              </div>
            </div>
          </div>
      </div>
    )
  }
})
