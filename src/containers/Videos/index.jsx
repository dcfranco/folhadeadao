import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import routeCodes, { subRouteCodes } from 'constants/routeCodes';
import AsyncComponentHOC from 'components/HOC/AsyncComponentHOC';
import { AnimatedSwitch } from 'react-router-transition';

const AsyncQuestionVideo1 = AsyncComponentHOC(() => import('containers/Videos/QuestionVideo1'))
const AsyncQuestionVideo2 = AsyncComponentHOC(() => import('containers/Videos/QuestionVideo2'))
const AsyncQuestionVideo3 = AsyncComponentHOC(() => import('containers/Videos/QuestionVideo3'))
const AsyncQuestionVideo4 = AsyncComponentHOC(() => import('containers/Videos/QuestionVideo4'))
const AsyncQuestionVideo5 = AsyncComponentHOC(() => import('containers/Videos/QuestionVideo5'))

const { VIDEOS } = subRouteCodes

const Videos = React.memo(() => {
  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route exact path={`${routeCodes.VIDEOS}${VIDEOS.VIDEO1}`} component={AsyncQuestionVideo1} />
      <Route exact path={`${routeCodes.VIDEOS}${VIDEOS.VIDEO2}`} component={AsyncQuestionVideo2} />
      <Route exact path={`${routeCodes.VIDEOS}${VIDEOS.VIDEO3}`} component={AsyncQuestionVideo3} />
      <Route exact path={`${routeCodes.VIDEOS}${VIDEOS.VIDEO4}`} component={AsyncQuestionVideo4} />
      <Route exact path={`${routeCodes.VIDEOS}${VIDEOS.VIDEO5}`} component={AsyncQuestionVideo5} />
      <Redirect to={`${routeCodes.VIDEOS}${VIDEOS.VIDEO1}`} />
    </AnimatedSwitch>
  );
})

export default Videos;
