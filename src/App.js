import React, { useState } from 'react';
import questions from './questions';
import Container from './components/Container'

export default function App() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [modalIsOpen,setModalIsOpen] = useState(false);


	const handleAnswerOptionClick = (answerValue) => {
		if (answerValue) {
			setScore(score + answerValue);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			setModalIsOpen(true);
		}
	};

	const playAgain = () => {

    	if (currentQuestion >= 11) {
    	  setScore(0);    
    	  setCurrentQuestion(0);
		  setShowScore(false);
		  setModalIsOpen(false);
    	} else {
    	  console.log('erro')
    	}

	};

	const popupButtonText = "Ver resultado";

	const onSubmitForm = (Event) => {
		Event.preventDefault();
   		console.log(Event.target.name.value);
   		console.log(Event.target.email.value);
	};

	let valor = score;

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					<Container 
						triggerText={popupButtonText} 
						onSubmit={onSubmitForm} 
						onClick={playAgain} 
						valor={valor} 
						isOpen={modalIsOpen} 
						handleClose={() => setModalIsOpen(false)} 
					/>
				</div>
				
			) : (
				<>
					{console.log(modalIsOpen)}
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






