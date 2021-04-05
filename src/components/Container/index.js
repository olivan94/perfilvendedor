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
        console.log('fechei');
    };

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    shouldClose = () => {
        if(this.props.shouldClose === false){
            this.closeModal();
            console.log('falso mesmo')
        } else { console.log('verdade');}
    }
    
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
                        shouldClose={this.shouldClose.bind(this)}

                    />
                ) : null}
            </React.Fragment>
        );
    }
}
export default Container;