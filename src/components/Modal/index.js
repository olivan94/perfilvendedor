import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../Form';
import FocusTrap from 'focus-trap-react';
import PropTypes from "prop-types";
import { useState } from 'react';

export const MyModal = ({
    onKeyDown,
    closeModal,
    addClientLog,
    modalReturn,
    valor
    // onClickOutside
}) => {

    const[resultado, setResultado] = useState(false);

    function closeButton() {
        setResultado(true);
        modalReturn(resultado);
    }

    return ReactDOM.createPortal(
        <FocusTrap>
            <aside
                tag="aside"
                role="dialog"
                tabIndex="-1"
                aria-modal="true"
                className="modal-cover"
                // onClickOutside={onClickOutside}
                onKeyDown={onKeyDown}
            >
                    
                <div className="modal-area" >
                    <button
                        aria-label="Close Modal" 
                        aria-labelledby="close-modal"
                        className="_modal-close"
                        onClick={closeButton}
                    >
                        <span id="close-modal" className="_hide-visual">
                            Close
                        </span>
                        <svg className="_modal-close-icon" viewBox="0 0 40 40">
                            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                        </svg>
                    </button>
                    <div className="modal-body">
                        <Form valor={valor} addClientLog={addClientLog} closeModal={closeModal} />
                    </div>
                </div>
            </aside>
        </FocusTrap>,
        document.body
    );
};

MyModal.propTypes = {
    onKeyDown: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    addClientLog: PropTypes.func.isRequired,
    modalReturn: PropTypes.func.isRequired,
    valor: PropTypes.number.isRequired,
    // onClickOutside: PropTypes.func.isRequired
};

export default MyModal;