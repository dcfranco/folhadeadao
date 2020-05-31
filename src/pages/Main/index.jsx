import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import routeCodes, { subRouteCodes } from 'constants/routeCodes';
import useFetch from 'hooks/useFetch';

const { FEEDBACKS, QUESTIONS } = subRouteCodes

function Main() {
  // const { session } = useParams();

  const { response } = useFetch('http://www.mocky.io/v2/5ed1082e3500004a00ffa1e3');
  if (!response) {
    return (
      <div className='loader-container'>
        <div className='lds-dual-ring' />
      </div>
    );
  }

  return (
    <Redirect to={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION1}`} />
  );
}

export default Main;
