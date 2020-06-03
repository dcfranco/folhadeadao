import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routeCodes, { subRouteCodes } from 'constants/routeCodes';
import AsyncComponentHOC from 'components/HOC/AsyncComponentHOC';

const AsyncExpired = AsyncComponentHOC(() => import('containers/Feedback/Expired'))
const AsyncNotFound = AsyncComponentHOC(() => import('containers/Feedback/NotFound'))

const { FEEDBACKS } = subRouteCodes

function Feedback() {
  return (
    <Switch>
      <Route exact path={`${routeCodes.FEEDBACK}${FEEDBACKS.EXPIRED}`} component={AsyncExpired} />
      <Route exact path={`${routeCodes.FEEDBACK}${FEEDBACKS.NOTFOUND}`} component={AsyncNotFound} />
      <Redirect to={`${routeCodes.FEEDBACK}${FEEDBACKS.NOTFOUND}`} />
    </Switch>
  );
}

export default Feedback;
