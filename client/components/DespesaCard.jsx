import React from 'react';
import Carteira from './Carteira.jsx';

export default React.createClass({
  render: function(){
    return (
      <center>
        <div className="row">
          <div className="col s12">
            {Carteira.lancamentos.map((valores) =>
              <div className="card blue-white darken-1 col s12" key={valores.motivo}>
                <div className="card-content white-text">
                  <span className="card-title blue-text"><b>{valores.motivo}</b></span>
                  <h5 className="blue-text"><b>Horário: </b>{valores.hora+"hs" }</h5>
                  <h5 className="blue-text"><b>Valor:  </b> {valores.valor}</h5>
                </div>
              </div>
            )}
          </div>
        </div>
      </center>



    )
  }
})
