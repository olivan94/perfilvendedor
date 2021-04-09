import React, { useState } from 'react';
import PropTypes from "prop-types";

const Form = ({addClientLog, closeModal, valor}) => {

  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[fecharModal, setFecharModal] = useState(false)
  // const [score, setScore] = useState(0)

  let handleNameChange = (e) => {
		setName(e.target.value)
	}
	
	let handleEmailChange = (e) => {        
    setEmail(e.target.value)
  }

  let handleSubmit = (e) => {

    if(name === "" || email === ""){
      e.preventDefault();
      return console.log("erro");
    } else {
      addClientLog([name, email, valor]);
      setFecharModal(true);
      closeModal(fecharModal);
      e.preventDefault();
      
    }

    console.log(name + ", " + email + ", " + valor);
  }

  
  return (
    <form onSubmit={ e => {handleSubmit(e)} }>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input 
          type="text"
          className="form-control"
          id="name"
          onChange={handleNameChange}
          value={name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          onChange={handleEmailChange}
          value={email}
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit"  >
          Submit
        </button>
      </div>
    </form>
  );
  
};


Form.propTypes = {
  addClientLog: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  valor: PropTypes.number.isRequired,
};

export default Form;
