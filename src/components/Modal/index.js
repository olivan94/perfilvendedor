import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../Form';
import FocusTrap from 'focus-trap-react';
// import { Modal } from "reactstrap";
import PropTypes from "prop-types";

export const MyModal = ({
    // onClickOutside,
    onKeyDown,
    closeModal,
    onSubmit,
    // toggle
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
                <div className="modal-area">
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
                        <Form onSubmit={onSubmit} />
                    </div>
                </div>
            </aside>
        </FocusTrap>,
        document.body
    );
};

MyModal.propTypes = {
    // onClickOutside: PropTypes.func.isRequired,
    // modalRef: PropTypes.func.isRequired,
    // buttonRef: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default MyModal;