import React from 'react';
import { Redirect } from 'react-router-dom';
import routeCodes, { subRouteCodes } from 'constants/routeCodes';

const { QUESTIONS } = subRouteCodes

function Questions() {
  return (
    <Redirect to={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION1}`} />
  );
}

export default Questions;
