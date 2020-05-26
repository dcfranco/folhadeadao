import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Layout from 'components/Layout'
import routeCodes from 'constants/routeCodes'
import AsyncComponentHOC from 'components/HOC/AsyncComponentHOC'

// Lazy Loading
const AsyncQuestions = AsyncComponentHOC(() => import('containers/Questions'))

function Root() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={routeCodes.QUESTIONS} component={AsyncQuestions} />
          <Route path={routeCodes.INDEX} component={AsyncQuestions} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default Root
