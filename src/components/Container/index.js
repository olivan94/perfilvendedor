import React, { Component } from 'react';
import { Modal } from '../Modal';
import TriggerButton from '../TriggerButton';


export class Container extends Component {

    

    state = { isShown: false };

    showModal = () => {
        this.setState({ isShown: true }, () => {
            this.closeButton.focus();
            this.toggleScrollLock();
        });
    };

    closeModal = () => {
        this.setState({ isShown: false });
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };

    onKeyDown = (Event) => {
        if (Event.keyCode === 27) {
          this.closeModal();
        }
    };

    onClickOutside = (Event) => {
        if (this.modal && this.modal.contains(Event.target)) return;
        this.closeModal();
    };

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    // handleSubmit = (Event) => {

    //     Event.preventDefault();
    //     axios({
    //       method: "POST", 
    //       url:"http://localhost:3000", 
    //       data:  this.state
    //     }).then((response)=>{
    //       if (response.data.status === 'success'){
    //         alert("Message Sent."); 
    //         this.resetForm()
    //       }else if(response.data.status === 'fail'){
    //         alert("Message failed to send.")
    //       }
    //     })



    //     Event.preventDefault();
    //     this.closeModal(); 
    // }

    // resetForm(){
    //     this.setState({name: '', email: ''})
    // }

    // TextFile = () => {
    //     const element = document.createElement("a");
    //     const file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'});
    //     element.href = URL.createObjectURL(file);
    //     element.download = "myFile.txt";
    //     document.body.appendChild(element);
    //     element.click();
    // }

    // onChange(event) {
    //     this.setState({[event.target.id]: event.target.value})
    // }
    
    render() {
        return (
            <React.Fragment>
                <TriggerButton 
                    triggerText={this.props.triggerText}
                    showModal={this.showModal}
                    buttonRef={(n) => (this.TriggerButton = n)}
                /> 
                {this.state.isShown ? (
                    <Modal
                        onSubmit={this.props.onSubmit}
                        modalRef={(n) => (this.modal = n)}
                        buttonRef={(n) => (this.closeButton = n)} 
                        closeModal={this.closeModal}
                        onKeyDown={this.onKeyDown}
                        onClickOutside={this.onClickOutside}
                    />
                ) : null}
            </React.Fragment>
        );
    }
}
export default Container;