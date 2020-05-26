import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routeCodes, { subRouteCodes } from 'constants/routeCodes';
import AsyncComponentHOC from 'components/HOC/AsyncComponentHOC';

const AsyncQuestion1 = AsyncComponentHOC(() => import('containers/Questions/Question1'))
const AsyncQuestion2 = AsyncComponentHOC(() => import('containers/Questions/Question2'))
const AsyncQuestion3 = AsyncComponentHOC(() => import('containers/Questions/Question3'))
const AsyncQuestion4 = AsyncComponentHOC(() => import('containers/Questions/Question4'))
const AsyncQuestion5 = AsyncComponentHOC(() => import('containers/Questions/Question5'))
const AsyncQuestion6 = AsyncComponentHOC(() => import('containers/Questions/Question6'))

const { QUESTIONS } = subRouteCodes

function Questions() {
  return (
    <Switch>
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION1}`} component={AsyncQuestion1} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION2}`} component={AsyncQuestion2} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION3}`} component={AsyncQuestion3} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION4}`} component={AsyncQuestion4} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION5}`} component={AsyncQuestion5} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION6}`} component={AsyncQuestion6} />
    </Switch>
  );
}

export default Questions;
