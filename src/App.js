import React, { useState } from 'react';
import questions from './questions';
import Container from './components/Container'

export default function App() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [cliente, setCliente] = useState([]);
	const [respostas, setRespostas] = useState([]);

	const handleAnswerOptionClick = (answerValue) => {
		if (answerValue) {
			setScore(score + answerValue);
			addResposta({valor:answerValue, texto:questions[currentQuestion].questionText});
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
		console.log(respostas);

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

	//tentando guardar os dados das respostas em um array

	const addResposta = (log) => {
		let logs = [...respostas, log];
		setRespostas(logs)
	}


	//lidando com o form

	const addClientLog = (adic) => {
		let adics = [...cliente, adic];
		setCliente(adics);
	}

	console.log(cliente.length);
	
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
