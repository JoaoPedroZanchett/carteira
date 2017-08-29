import React from 'react';
import Navbar from './Navbar.jsx';

export default React.createClass({
    getInitialState: function(){
      return {
        saldo: 0.00,
      }
    },

    somar: function(){
      this.state.saldo += 1;
      this.setState({saldo: this.state.saldo})
    },

    diminuir: function(){
      this.state.saldo -= 1;
      this.setState({saldo: this.state.saldo})
    },

    render: function(){
      return(<div>
        <Navbar />
        <div className="container">
          <div className="row">
            <center>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <div className="card col s10  m4 offset-s1 offset-m4">
                    <br></br><br></br>
                    <h5 className="red-text">S A L D O</h5>
                    {this.state.saldo < 0 ? (
                      <h4 className="red-text">R$ {this.state.saldo}</h4>
                    ) : this.state.saldo > 0 ? (
                      <h4 className="green-text">R$ {this.state.saldo}</h4>
                    ) : (
                      <h4 className="blue-text">R$ {this.state.saldo}</h4>
                    )}
                    <br></br><br></br>
                </div>
            </center>
          </div>
          <div className="fixed-action-btn toolbar">
            <a className="btn-floating btn-large red darken-4">
              <i className="large material-icons">menu</i>
            </a>
            <ul>
              <li className="waves-effect waves-light"><a onClick={this.somar}><i className="material-icons">add</i></a></li>
              <li className="waves-effect waves-light"><a onClick={this.diminuir}><i className="material-icons">remove</i></a></li>
            </ul>
          </div>
        </div>
      </div>);
    }
});
