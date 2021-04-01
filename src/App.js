import React, { useState } from 'react';
import questions from './questions';
import Container from './components/Container'

export default function App() {


	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	// const [showResult, setShowResult] = useState(false);

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

	const popupButtonText = "Ver resultado";

	const onSubmitForm = (Event) => {
		Event.preventDefault(Event);
   		console.log(Event.target.name.value);
   		console.log(Event.target.email.value);

	};

	// const showResult = () => {
	// 	if(showScore) {

	// 	}
	// }

	// const handleOnSubmit = (Event) => {
	// 	Event.preventDefault(Event)
	
	// 	const input = {
	// 		name: Event.target.itemName.value,
	// 		price: Event.target.itemPrice.value,
	// 		description: Event.target.itemDescription.value, 
	// 		userEmail: this.props.currentUser.email
	// 	}
	
	// 	this.props.dispatch(saveItem(input))
	
	// 	Event.target.itemName.value = ''
	// 	Event.target.itemPrice.value = ''
	// 	Event.target.itemDescription.value = ''
	
	// 	this.handleCloseModal();
	// 

	// showScore vai mostar um card com um botao para ser feito o cadastro
	// esse botao abre o modal e já exibe a pontuação



	return (
		<div className='app'>
			{showScore ? (
				<div>
					<div className='show-result'>
						<Container triggerText={popupButtonText} onSubmit={onSubmitForm} />
					</div>
					
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