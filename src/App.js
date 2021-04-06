import React, { useState } from 'react';
import questions from './questions';
import Container from './components/Container'



class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			currentQuestion: true,
			showScore: true,
			score: 0,			
		}
	}

	handleAnswerOptionClick = (answerValue) => {
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

	playAgain = () => {

    	if (currentQuestion >= 11) {
    	  setScore(0);    
    	  setCurrentQuestion(0);
		  setShowScore(false);
		  setFecharModal(false);
    	} else {
    	  console.log('erro')
    	}

	};

	popupButtonText = "Ver resultado";




	render() { 
		return (  );
	}
}
 
export default App;








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
	}

	let valor = score;

	let valorModal = fecharModal;

	function valormod(){
		setFecharModal(true);
		return console.log(fecharModal);
	};




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






