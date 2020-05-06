import React, {useContext} from 'react';
import QuizContext from '../quizcontext/QuizContext';

function Question() {
    const {state} = useContext(QuizContext);
    const {currentQuestion, questions} = state;
    const question = questions[currentQuestion];
    return <h1 className="quiz">{question.question}</h1>;
}

export default Question;
