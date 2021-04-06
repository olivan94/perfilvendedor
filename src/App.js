import React, { useState } from 'react';
import questions from './questions';
import Container from './components/Container'

export default function App() {


	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [fecharModal,setFecharModal] = useState(false);

	// const [isShown, setIsShown] = useState(false);

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
		  setFecharModal(false);
    	} else {
    	  console.log('erro')
    	}

	};

	const popupButtonText = "Ver resultado";

	const onSubmitForm = (Event) => {
		setFecharModal(true);
		Event.preventDefault();
   		console.log(Event.target.name.value);
   		console.log(Event.target.email.value);

		console.log(fecharModal);


		// if (onSubmitForm.Event===true) {
		// 	teste = fecharModal;
		// 	console.log(teste);
		// 	return teste;
			
		// }
		// let valor = isShown;
		
		// if (isShown === false) {
			
		// 	console.log(isShown);
		// 	return isShown;
		// } else {
		// 	return console.log(isShown);
		// }
	};

	let valor = score;

	let valorModal = fecharModal;

	function valormod(){
		setFecharModal(true);
		return console.log(fecharModal);
	};

	// let setaGatilho = (showScore) => {
	// 	if(showScore === true) {
	// 		setGatilho(1);
	// 	} else {
	// 		setGatilho(0);
	// 	}
	// };



	// showModal = (isShown) => {
	// 	setIsShown(true)
    //     this.setState({ isShown: true }, () => {
    //         this.closeButton.focus();
    //         this.toggleScrollLock();
    //     });
    // };

	// const shouldClose = (isShown) => {
	// 	if(isShown === true){
	// 		return console.log(shouldClose.value);
	// 		console.log(shouldClose)
	// 	}
	// };




	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					<Container triggerText={popupButtonText} onSubmit={onSubmitForm} onClick={playAgain} valor={valor} fecharModal={valorModal} />
				</div>
				
			) : (
				<>
					{console.log('to aqui')}
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






