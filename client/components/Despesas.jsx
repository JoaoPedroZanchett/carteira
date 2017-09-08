import React from 'react';
import AddDinheiro from './AddDinheiro.jsx';
import Navbar from './Navbar.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default React.createClass({
  getInitialState: function(){
    return {
      frases: (this.props.match.params.dados.split(","))[0],
      valores: parseFloat((this.props.match.params.dados.split(","))[1])
    }
  },
  render: function(){
    return (
      <div>
        <Navbar />
        <div className="container row">
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <center><h5 className="green-text">Motivos</h5></center>
          <h5>{"Despesa: "+ this.state.frases}</h5>
          <h5>{"Valor: R$"+this.state.valores}</h5>
          <div className="input-field col s8 offset-s2">
            <center>
              <Link to={"/carteira/"+this.props.match.params.atual+"/"+this.state.frases} className="waves-effect green darken-4 btn s12"><i className="material-icons right">check</i>VOLTAR</Link>
            </center>
          </div>
        </div>
      </div>
    )
  }
})
