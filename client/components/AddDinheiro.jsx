import React from 'react';
import Navbar from './Navbar.jsx';
import Carteira from './Carteira.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default React.createClass({
  getInitialState: function(){
    return{
      quantidade: 0.00,
      motivo: ""
    }
  },
  mudarValor: function(e){
    this.setState({quantidade: e.target.value});
  },
  mudarFrase: function(e){
    this.setState({motivo: e.target.value});
  },
  enviar: function(){
    var dados = {valor: "R$"+parseFloat(this.state.quantidade), motivo: this.state.motivo, hora: new Date().toLocaleTimeString()};
    Carteira.saldo += parseFloat(this.state.quantidade);
    Carteira.lancamentos.push(dados);
    console.log(Carteira.lancamentos);
  },
  render: function(){
    return (
      <div>
        <Navbar />
        <div className="container row">
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <center><h5 className="green-text">Adicionar Receita</h5></center>
          <div className="input-field col s11">
            <i className="small material-icons prefix green-text">monetization_on</i>
            <input defaultValue={this.state.quantidade} onChange={this.mudarValor} className="validate" type="number"></input>
          </div>
          <div className="input-field col s12">
            <center><h5 className="green-text">Motivo:</h5></center>
            <input onChange={this.mudarFrase} defaultValue={this.state.motivo}></input>
          </div>
          <div className="input-field col s8 offset-s2">
            <center>
              <Link to="/carteira" onClick={this.enviar} className="waves-effect green darken-4 btn s12"><i className="material-icons right">check</i>SALVAR</Link>
            </center>
          </div>
        </div>
      </div>
    )
  }
})
