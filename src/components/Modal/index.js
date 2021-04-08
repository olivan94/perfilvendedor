import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../Form';
import FocusTrap from 'focus-trap-react';
// import { Modal } from "reactstrap";
import PropTypes from "prop-types";

export const MyModal = ({
    onKeyDown,
    closeModal,
    addClientLog
}) => {


    return ReactDOM.createPortal(
        <FocusTrap>
            <aside
                tag="aside"
                role="dialog"
                tabIndex="-1"
                aria-modal="true"
                className="modal-cover"
                // onClick={onClickOutside}
                onKeyDown={onKeyDown}
            >
                    
                <div className="modal-area" >
                    <button
                        aria-label="Close Modal" 
                        aria-labelledby="close-modal"
                        className="_modal-close"
                        onClick={closeModal}
                    >
                        <span id="close-modal" className="_hide-visual">
                            Close
                        </span>
                        <svg className="_modal-close-icon" viewBox="0 0 40 40">
                            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                        </svg>
                    </button>
                    <div className="modal-body">
                        <Form addClientLog={addClientLog} closeModal={closeModal}/>
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
    addClientLog: PropTypes.func.isRequired
};

export default MyModal;