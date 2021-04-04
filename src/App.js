import React, { useState } from 'react';
import questions from './questions';
import { Modal } from './components/Modal';
import TriggerButton from './components/TriggerButton';

export default function App() {


	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [isShown, setIsShown] = useState(false)

	const handleAnswerOptionClick = (answerValue) => {
		if (answerValue) {
			setScore(score + answerValue);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const playAgain = () => {

    	if (currentQuestion >= 11) {
			setScore(0);    
			setCurrentQuestion(0);
			setShowScore(false);
    	} else {
    	  	console.log('erro')
    	}

	};



	
    const showModal = () => {
        setIsShown(true);
        // this.closeButton.focus();
        toggleScrollLock();
    };

    const closeModal = () => {
        setIsShown(false);
        // TriggerButton.focus();
        toggleScrollLock();
    };

    const onKeyDown = (Event) => {
        if (Event.keyCode === 27) {
          closeModal();
        }
    };

    const onClickOutside = (Event) => {
        if (Modal && Modal.contains(Event.target)) return;
        closeModal();
    };

	const toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    


	// const modalRef = (n) => {
	// 	target.value = n;
	// } 

	// const buttonRef = (n) => {
	// 	target.value = n;
	// }

	// const closeButtonRef = (n) => {
	// 	target.value = n
	// }

	const triggerText = "Ver resultado";

	const onSubmitForm = (Event) => {
		Event.preventDefault(Event);
   		console.log(Event.target.name.value);
   		console.log(Event.target.email.value);

	};


	return (
		<div className='app'>
			{showScore ? (
				<div>
					<React.Fragment>
                		<TriggerButton 
                    		triggerText={triggerText}
                    		showModal={showModal}
                    		// buttonRef={buttonRef}
                		/> 
                		{isShown ? (
                    	<Modal
                        	onSubmit={onSubmitForm}
                        	// modalRef={modalRef}
                        	// buttonRef={closeButtonRef} 
							closeModal={closeModal}
							onKeyDown={onKeyDown}
                        	onClickOutside={onClickOutside}
                   		/>) : null}
					</React.Fragment>
					
					<div className='score-section'>
						You scored {score} out of 48
						<button className='playAgain-button' onClick={playAgain}>Jogar novamente</button>
					</div>
					
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Questão {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.answerValue)}>
								{answerOption.answerText}
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}