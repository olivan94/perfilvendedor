import React, { useState } from 'react';
import PropTypes from "prop-types";

const Form = ({
  // handleClose,
  onSubmit,
  // handleClose,
  handleChange
}) => {

  // constructor(props){
  //   super(props);
  //   this.nome = '';
  //   this.email = '';
  //   this.state = {isMostrar: false};
  // }

  // const handleNome = (Event) => {
  //   Event.stopPropagation();
  //   this.nome = evento.target.value;
  // }

  // const handleEmail = (Event) => {
  //   Event.stopPropagation();
  //   this.email = evento.target.value;
  // }

  // criarCandidato(evento){
  //   evento.preventDefault();
  //   evento.stopPropagation();
  //   this.props.criarNota(this.titulo, this.texto);
    
  // }

  // handleSubmit(evento){
  //   evento.preventDefault();
  //   this.props
  // }

  // const [cliente, setCliente] = useState({
  //   name: "",
  //   email: "",
  // });

  // let handleChange = (e) => {
  //   let name = e.target.id;
  //   let value = e.target.value;
  //   cliente[name] = value;
  //   setCliente(cliente);
  // }

  // let save = (e) => {
  //   e.preventDefault();
  //   console.log(cliente);
  // }



  // const handleSubmit = (Event) => {
  //   Event.preventDefault();
  //   console.log(Event.target.name.value);
  //   console.log(Event.target.email.value);
    

  //   alert('You have submitted the form.')
  // }

  
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name"
        onChange={handleChange} 
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
  
};


Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
  // closeModal: PropTypes.func.isRequired,
  // handleClose: PropTypes.func.isRequired
};

export default Form;
