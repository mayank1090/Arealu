// components/Stepper.js
import React, { useState } from 'react';
import { connect,useSelector } from 'react-redux';
import { setAnswer } from '../../actions/questionnaireActions';

const questions = [
  { id: 'q1', question: 'Question 1', options: ['Option A', 'Option B', 'Option C'] },
  { id: 'q2', question: 'Question 2', options: ['Option X', 'Option Y', 'Option Z'] },
  // Add more questions...
];

const Stepper = ({ answers, setAnswer }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleOptionSelect = (questionId, answer) => {
    console.log(`User selected: ${answer}`)
    setAnswer(questionId, answer);
  };

  const currentQuestion = questions[currentStep];

  const reduxState = useSelector(state => state);
  console.log(reduxState)

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value={option}
                onChange={() => handleOptionSelect(currentQuestion.id, option)}
                checked={answers[currentQuestion.id] === option}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

const mapStateToProps = state => ({
  answers: state.questionnaire,
});

export default connect(mapStateToProps, { setAnswer })(Stepper);
