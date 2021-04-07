import React, { useState } from 'react';
import questions from './questions';
import Container from './components/Container'

export default function App() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [modalIsOpen,setModalIsOpen] = useState(false);

	
	// const toggle = () => setIsShown(!isShown);


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
						// toggle={toggle}
						triggerText={popupButtonText} 
						onSubmit={onSubmitForm} 
						deNovoOnClick={playAgain} 
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

// import React, { useState } from &#x27;react&#x27;;
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from &#x27;reactstrap&#x27;;

// const ModalExample = (props) =&gt; {
//   const {
//     buttonLabel,
//     className
//   } = props;

//   const [modal, setModal] = useState(false);

//   const toggle = () =&gt; setModal(!modal);

//   return (
//     &lt;div&gt;
//       &lt;Button color=&quot;danger&quot; onClick={toggle}&gt;{buttonLabel}&lt;/Button&gt;
//       &lt;Modal isOpen={modal} toggle={toggle} className={className}&gt;
//         &lt;ModalHeader toggle={toggle}&gt;Modal title&lt;/ModalHeader&gt;
//         &lt;ModalBody&gt;
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//         &lt;/ModalBody&gt;
//         &lt;ModalFooter&gt;
//           &lt;Button color=&quot;primary&quot; onClick={toggle}&gt;Do Something&lt;/Button&gt;{&#x27; &#x27;}
//           &lt;Button color=&quot;secondary&quot; onClick={toggle}&gt;Cancel&lt;/Button&gt;
//         &lt;/ModalFooter&gt;
//       &lt;/Modal&gt;
//     &lt;/div&gt;
//   );
// }




