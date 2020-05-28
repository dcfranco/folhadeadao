import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Layout from 'components/Layout'
import routeCodes from 'constants/routeCodes'
import AsyncComponentHOC from 'components/HOC/AsyncComponentHOC'
import { AppContextProvider } from 'context/AppContext'
import { QuestionContextProvider } from 'containers/Questions/Context';

// Lazy Loading
const AsyncQuestions = AsyncComponentHOC(() => import('containers/Questions'))
const AsyncVideos = AsyncComponentHOC(() => import('containers/Videos'))
const AsyncMain = AsyncComponentHOC(() => import('containers/Main'))

function Root() {
  return (
    <Router>
      <AppContextProvider>
        <QuestionContextProvider>
          <Layout>
            <Switch>
              <Route path={routeCodes.QUESTIONS} component={AsyncQuestions} />
              <Route path={routeCodes.VIDEOS} component={AsyncVideos} />
              <Route path={routeCodes.INDEX} component={AsyncMain} />
            </Switch>
          </Layout>
        </QuestionContextProvider>
      </AppContextProvider>
    </Router>
  )
}

export default Root
