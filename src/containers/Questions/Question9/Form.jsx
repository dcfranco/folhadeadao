import React from 'react';
import { useQuestion } from 'context/QuestionContext';

function Question9Form(props) {
  const { className, label } = props
  const { question, update } = useQuestion(9);

  return (
    <div className={ className }>
      <label>{label}</label>
      <input type='text' value={question.request || ''} onChange={({currentTarget}) => update({ request: currentTarget.value })} />
    </div>
  );
}

export default Question9Form;
