import React, { Context } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Layout from 'components/Layout'
import routeCodes from 'constants/routeCodes'
import AsyncComponentHOC from 'components/HOC/AsyncComponentHOC'
import { AppContextProvider } from 'context/AppContext'

// Lazy Loading
const AsyncQuestions = AsyncComponentHOC(() => import('containers/Questions'))

function Root() {
  return (
    <Router>
      <AppContextProvider>
        <Layout>
          <Switch>
            <Route path={routeCodes.QUESTIONS} component={AsyncQuestions} />
            <Route path={routeCodes.INDEX} component={AsyncQuestions} />
          </Switch>
        </Layout>
      </AppContextProvider>
    </Router>
  )
}

export default Root
