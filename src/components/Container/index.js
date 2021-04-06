import React, { Component } from 'react';
import { Modal } from '../Modal';
import TriggerButton from '../TriggerButton';


export class Container extends Component {

    state = { isShown: false, isMostrado: true, isResult: false, isFechar: this.props.fecharModal};

    showModal = () => {
        this.setState({ isShown: true }, () => {
            this.closeButton.focus();
            this.toggleScrollLock();
            this.setState({isMostrado: false})
        });
    };

    closeModal = () => {
        this.setState({ isShown: false });
        // this.TriggerButton.focus();
        this.toggleScrollLock();
        this.setState({isResult: true})
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

    
    render() {
        return (
            <React.Fragment>

                {this.state.isMostrado ? (
                <TriggerButton 
                    triggerText={this.props.triggerText}
                    showModal={this.showModal}
                    buttonRef={(n) => (this.TriggerButton = n)}
                />) : (null)}                


                 
                {this.state.isShown ? (
                    <Modal
                        isOpen={this.state.isFechar}
                        onSubmit={this.props.onSubmit}
                        modalRef={(n) => (this.modal = n)}
                        buttonRef={(n) => (this.closeButton = n)} 
                        closeModal={this.closeModal}
                        onKeyDown={this.onKeyDown}
                        onClickOutside={this.onClickOutside}
                        // shouldClose={this.shouldClose.bind(this)}

                    />
                ) : (null)}


                {this.state.isResult && !this.state.isShown && !this.state.isMostrado && this.props.fecharModal ? (
                    <div className='score-section'>
                        {console.log(this.state.isMostrado)}
                        You scored {this.props.valor} out of 48
                        <button className='playAgain-button' onClick={this.props.onClick}>Jogar novamente</button>
                    </div>
                ):(null)}
            </React.Fragment>
        );
    }
}
export default Container;