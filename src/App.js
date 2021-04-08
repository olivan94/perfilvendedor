import React, { useState } from 'react';
import questions from './questions';
import Container from './components/Container'

export default function App() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [cliente, setCliente] = useState([]);

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
		
		console.log(cliente);

    	if (currentQuestion >= 11) {
    	  setScore(0);    
    	  setCurrentQuestion(0);
		  setShowScore(false);
    	} else {
    	  console.log('erro')
    	}

	};

	const popupButtonText = "Ver resultado";

	let valor = score;

	//lidando com o form

	const addClientLog = (log) => {
		let logs = [...cliente, log];
		setCliente(logs);
	}

	
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					<Container 
						triggerText={popupButtonText} 
						deNovoOnClick={playAgain} 
						valor={valor}
						addClientLog={addClientLog}
					/>
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
