import React, { useState } from 'react';
import { Modal } from '../Modal';
import TriggerButton from '../TriggerButton';
import PropTypes from "prop-types";


const Container =({
    isOpen,
    handleClose,
    triggerText,
    onSubmit,
    valor,
    onClick
}) => {

    const [isShown, setIsShown] = useState(false);
    const [isMostrado, setIsMostrado] = useState(true);
    const [isResult, setIsResult] = useState(false);


    function showModal() {
        setIsShown(true);
        setIsMostrado(false);
    };

    function closeModal() {
        handleClose();
        setIsShown(false);
        setIsResult(true);
    };

    function onKeyDown(Event) {
        if (Event.keyCode === 27) {
          closeModal();
        }
    };

    // function onClickOutside(Event) {
    //     if (this.modal && this.modal.contains(Event.target)) return;
    //     closeModal();
    // };

    // function toggleScrollLock() {
    //     document.querySelector('html').classList.toggle('scroll-lock');
    // };

    
    
        return (
            <React.Fragment>

                {isMostrado ? (
                <TriggerButton 
                    triggerText={triggerText}
                    showModal={showModal}
                    buttonRef={(n) => (TriggerButton = n)}
                />) : (null)}                


                 
                {isShown ? (
                    <Modal
                        isOpen={isOpen} //tentar jogar isso no notao acima
                        onSubmit={onSubmit}
                        closeModal={closeModal}
                        onKeyDown={onKeyDown}
                        // onClickOutside={onClickOutside}
                        // shouldClose={this.shouldClose.bind(this)}

                    />
                ) : (null)}


                {isResult && !isShown && !isMostrado ? (
                    <div className='score-section'>
                        {console.log(isMostrado)}
                        You scored {valor} out of 48
                        <button className='playAgain-button' onClick={onClick}>Jogar novamente</button>
                    </div>
                ):(null)}
            </React.Fragment>
        );
    
}

Container.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    triggerText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    valor: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired

};

export default Container;