import React from 'react';
import Navbar from './Navbar.jsx';
import DespesaCard from './DespesaCard.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default React.createClass({
  render: function(){
    return (
      <div>
        <Navbar />
        <div className="container row">
          <br></br><br></br><br></br><br></br>
          <center><h5 className="green-text">EXTRATO DA CARTEIRA</h5></center>
          <br></br><br></br>
          <DespesaCard></DespesaCard>
          <div className="input-field col s8 offset-s2">
            <center>
              <Link to={"/carteira"} className="waves-effect green darken-4 btn s12"><i className="material-icons right">check</i>VOLTAR</Link>
            </center>
          </div>
        </div>
      </div>
    )
  }
})
