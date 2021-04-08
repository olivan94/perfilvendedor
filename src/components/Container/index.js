import React, { useState } from 'react';
import  MyModal  from '../Modal';
// import TriggerButton from '../TriggerButton';
import PropTypes from "prop-types";


const Container =({
    triggerText,
    valor,
    deNovoOnClick,
    addClientLog
}) => {

    const [isShown, setIsShown] = useState(false);
    const [isMostrado, setIsMostrado] = useState(true);
    const [isResult, setIsResult] = useState(false);


    function showModal() {
        setIsShown(true);
        setIsMostrado(false);
    };

    function closeModal() {
        setIsShown(false);
        setIsResult(true);
    };

    function onKeyDown(Event) {
        if (Event.keyCode === 27) {
          closeModal();
        }
    };

    // function fecharModal() {

    // }


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
                <button className="btn btn-lg btn-danger center modal-button"  onClick={showModal}> {triggerText} </button>) : (null)}                


                 
                {isShown ? (
                    <MyModal
                        closeModal={closeModal}
                        onKeyDown={onKeyDown}
                        addClientLog={addClientLog}
                    />
                ) : (null)}


                {isResult && !isShown && !isMostrado ? (
                    <div className='score-section'>
                        {console.log(isMostrado)}
                        You scored {valor} out of 48
                        <button className='playAgain-button' onClick={deNovoOnClick}>Jogar novamente</button>
                    </div>
                ):(null)}
            </React.Fragment>
        );
    
}

Container.propTypes = {
    
    triggerText: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired,
    deNovoOnClick: PropTypes.func.isRequired,
    addClientLog: PropTypes.func.isRequired

};

export default Container;