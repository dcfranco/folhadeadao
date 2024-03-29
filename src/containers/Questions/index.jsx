import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import routeCodes, { subRouteCodes } from 'constants/routeCodes';
import AsyncComponentHOC from 'components/HOC/AsyncComponentHOC';
import { AnimatedSwitch } from 'react-router-transition';

const AsyncQuestion1 = AsyncComponentHOC(() => import('containers/Questions/Question1'))
const AsyncQuestion2 = AsyncComponentHOC(() => import('containers/Questions/Question2'))
const AsyncQuestion3 = AsyncComponentHOC(() => import('containers/Questions/Question3'))
const AsyncQuestion4 = AsyncComponentHOC(() => import('containers/Questions/Question4'))
const AsyncQuestion5 = AsyncComponentHOC(() => import('containers/Questions/Question5'))
const AsyncQuestion6 = AsyncComponentHOC(() => import('containers/Questions/Question6'))
const AsyncQuestion7 = AsyncComponentHOC(() => import('containers/Questions/Question7'))
const AsyncQuestion8 = AsyncComponentHOC(() => import('containers/Questions/Question8'))
const AsyncQuestion9 = AsyncComponentHOC(() => import('containers/Questions/Question9'))
const AsyncQuestion10 = AsyncComponentHOC(() => import('containers/Questions/Question10'))
const AsyncQuestion11 = AsyncComponentHOC(() => import('containers/Questions/Question11'))
const AsyncQuestion12 = AsyncComponentHOC(() => import('containers/Questions/Question12'))
const AsyncQuestion13 = AsyncComponentHOC(() => import('containers/Questions/Question13'))
const AsyncQuestion14 = AsyncComponentHOC(() => import('containers/Questions/Question14'))
const AsyncQuestion15 = AsyncComponentHOC(() => import('containers/Questions/Question15'))
const AsyncQuestion16 = AsyncComponentHOC(() => import('containers/Questions/Question16'))
const AsyncQuestion17 = AsyncComponentHOC(() => import('containers/Questions/Question17'))
const AsyncQuestion18 = AsyncComponentHOC(() => import('containers/Questions/Question18'))
const AsyncQuestion19 = AsyncComponentHOC(() => import('containers/Questions/Question19'))
const AsyncQuestion20 = AsyncComponentHOC(() => import('containers/Questions/Question20'))
const AsyncQuestion21 = AsyncComponentHOC(() => import('containers/Questions/Question21'))

const { QUESTIONS } = subRouteCodes

function Questions() {
  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION1}`} component={AsyncQuestion1} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION2}`} component={AsyncQuestion2} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION3}`} component={AsyncQuestion3} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION4}`} component={AsyncQuestion4} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION5}`} component={AsyncQuestion5} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION6}`} component={AsyncQuestion6} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION7}`} component={AsyncQuestion7} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION8}`} component={AsyncQuestion8} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION9}`} component={AsyncQuestion9} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION10}`} component={AsyncQuestion10} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION11}`} component={AsyncQuestion11} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION12}`} component={AsyncQuestion12} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION13}`} component={AsyncQuestion13} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION14}`} component={AsyncQuestion14} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION15}`} component={AsyncQuestion15} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION16}`} component={AsyncQuestion16} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION17}`} component={AsyncQuestion17} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION18}`} component={AsyncQuestion18} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION19}`} component={AsyncQuestion19} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION20}`} component={AsyncQuestion20} />
      <Route exact path={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION21}`} component={AsyncQuestion21} />
      <Redirect to={`${routeCodes.QUESTIONS}${QUESTIONS.QUESTION1}`} />
    </AnimatedSwitch>
  );
}

export default Questions;
