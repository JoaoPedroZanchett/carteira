import React from 'react';

export default React.createClass({
  getInitialState: function(){
    return {
      valorInicial: 0.00,
    }
  },
  mudarValor: function(e){
    this.setState({valorInicial: e.target.value});
  },
  mostrar: function() {
    alert("Oi");
    this.setState({telas: 1});
  },

  render: function(){
    return (
        <div className="container">
          <div className="row">
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="input-field col s11">
              <i className="small material-icons prefix light-blue-text">monetization_on</i>
              <input defaultValue={this.state.valorInicial} onChange={this.mudarValor} className="validate" type="number"></input>
              <label>Valor Inicial</label>
            </div>
            <div className="input-field col s6 offset-s3">
              <a onClick={this.mostrar} className="waves-effect light-blue darken-4 btn s12"><i className="material-icons right">check</i>INICIAR</a>
            </div>
          </div>
        </div>
    )
  }
})
