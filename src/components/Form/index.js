import React, { Component } from 'react';

class Form extends Component {

  constructor(props){
    super(props);
    this.nome = '';
    this.email = '';
    this.state = {isMostrar: false};
  }

  handleNome(evento){
    evento.stopPropagation();
    this.nome = evento.target.value;
  }

  handleEmail(evento){
    evento.stopPropagation();
    this.email = evento.target.value;
  }

  criarCandidato(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
    
  }

  // handleSubmit(evento){
  //   evento.preventDefault();
  //   this.props
  // }

  render () {
  return (
    <form onSubmit={this.props.onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" onChange={this.handleNome.bind(this)} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          onChange={this.handleEmail.bind(this)}
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit" >
          Submit
        </button>
      </div>
    </form>
  );
  }
};
export default Form;

// onClick={console.log('testarAqui')}