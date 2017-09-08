import React from 'react';
import AddDinheiro from './AddDinheiro.jsx';
import Navbar from './Navbar.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default React.createClass({
  getInitialState: function(){
    return{
      quantidade: 0.00
    }
  },
  mudarValor: function(e){
    this.setState({quantidade: e.target.value});
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
          <div className="input-field col s8 offset-s2">
            <center>
              <Link to={"/carteira/"+ (parseFloat(this.props.match.params.atual) + parseFloat(this.state.quantidade))} className="waves-effect green darken-4 btn s12"><i className="material-icons right">check</i>SALVAR</Link>
            </center>
          </div>
        </div>
      </div>
    )
  }
})
