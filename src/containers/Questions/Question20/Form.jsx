import React from 'react';
import { useQuestion } from 'context/QuestionContext';

function Question20Form(props) {
  const { className, label } = props
  const { question, update } = useQuestion(20);

  return (
    <div className={ className }>
      <label>{label}</label>
      <input type='text' value={question.profession || ''} onChange={({currentTarget}) => update({ profession: currentTarget.value })} />
    </div>
  );
}

export default Question20Form;
