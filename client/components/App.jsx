import React from 'react';
import Navbar from './Navbar.jsx';
import Central from './Central.jsx';

export default React.createClass({
  getInitialState: function(){
    return {
      valorInicial: 0.00,
    }
  },
  mudarValor: function(e){
    this.setState({valorInicial: e.target.value});
  },

  render: function(){
    return (
      <div>
        <Navbar />
          <div className="container">
            <div className="row">
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <div className="input-field col s11">
                <i className="small material-icons prefix light-green-text">monetization_on</i>
                <input defaultValue={this.state.valorInicial} onChange={this.mudarValor} className="validate" type="number"></input>
                <label>Valor Inicial</label>
              </div>
              <div className="input-field col s6 offset-s3">
                <a className="waves-effect red darken-4 btn s12"><i className="material-icons right">check</i>INICIAR</a>
              </div>
            </div>
          </div>
      </div>
    )
  }
})
