import React from 'react';

export const Form = ({ onSubmit, closeModal }) => {

  // handleSubmit = (Event) => {
  //   Event.preventDefault()

  //   const input = {
  //       name: Event.target.itemName.value,
  //       price: Event.target.itemPrice.value,
  //       description: Event.target.itemDescription.value, 
  //       userEmail: this.props.currentUser.email
  //   }

  //   this.props.dispatch(saveItem(input))

  //   Event.target.itemName.value = ''
  //   Event.target.itemPrice.value = ''

  //   Event.target.itemDescription.value = ''

  //   this.handleCloseModal();
  // }
  

  return (
    <form onSubmit={onSubmit, closeModal}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit" >
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
