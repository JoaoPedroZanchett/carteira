import React from 'react';

export default React.createClass({
  render: function(){
    return (
      <center>
        <div className="row">
          <div className="col s12">
            {this.props.dados.split(";").map((valores) =>
              <div className="card blue-white darken-1 col s6" key={valores}>
                <div className="card-content white-text">
                  <span className="card-title blue-text"><b>{(valores.split(","))[0] }</b></span>
                  <h5 className="blue-text">{"Horário: "+(valores.split(","))[2]+"hs" }</h5>
                  <h5 className="blue-text">{"Valor: R$" + parseFloat((valores.split(","))[1]) }</h5>
                </div>
              </div>
            )}
          </div>
        </div>
      </center>



    )
  }
})
