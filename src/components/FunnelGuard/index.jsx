import React, { useContext, useEffect } from 'react';
import { InfoContext } from 'context/InfoContext';
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import routeCodes, { subRouteCodes } from 'constants/routeCodes'
function FunnelGuard({ children }) {
  const { userInfo, funnelInfo } = useContext(InfoContext)
  const location = useLocation()
  const history = useHistory()
  const { url: path } = useRouteMatch(`${routeCodes.FUNNEL}`)

  useEffect(() => {
    const code = funnelInfo ? (parseInt(funnelInfo.currentQuestion, 10) + 1) : 1
    if (funnelInfo && funnelInfo.hasFinished) {
      history.push(`${routeCodes.FEEDBACK}${subRouteCodes.FEEDBACKS.EXPIRED}`)
    } else if (!location.state || location.state.code < code) {
      history.push(`${path}${routeCodes.QUESTIONS}/${code}`, { code })
    }
  }, [funnelInfo, history, location.state, path])

  if (!userInfo) {
    return null
  }

  return children
}

export default FunnelGuard;


