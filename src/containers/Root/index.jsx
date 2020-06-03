import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Layout from 'components/Layout'
import routeCodes, { subRouteCodes } from 'constants/routeCodes'
import AsyncComponentHOC from 'components/HOC/AsyncComponentHOC'
import { AppContextProvider } from 'context/AppContext'
import { QuestionContextProvider } from 'context/QuestionContext';

// Lazy Loading
const AsyncFunnel = AsyncComponentHOC(() => import('containers/Funnel'))
const AsyncVideos = AsyncComponentHOC(() => import('containers/Videos'))
const AsyncFeedback = AsyncComponentHOC(() => import('containers/Feedback'))

const Root = React.memo(() => {
  return (
    <Router>
      <AppContextProvider>
        <QuestionContextProvider>
          <Layout>
            <Switch>
              <Route path={routeCodes.FEEDBACK} component={AsyncFeedback} />
              <Route path={routeCodes.VIDEOS} component={AsyncVideos} />
              <Route path={routeCodes.FUNNEL} component={AsyncFunnel} />
              <Redirect to={`${routeCodes.FEEDBACK}${subRouteCodes.FEEDBACKS.NOTFOUND}`} />
            </Switch>
          </Layout>
        </QuestionContextProvider>
      </AppContextProvider>
    </Router>
  )
})

export default Root
