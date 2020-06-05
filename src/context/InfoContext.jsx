import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from 'api';
import { QuestionContext } from './QuestionContext';
import routeCodes, { subRouteCodes } from 'constants/routeCodes'

const { FEEDBACKS } = subRouteCodes

const max = 20

export const InfoContext = createContext({
  userInfo: null,
  funnelInfo: null,
  nextQuestion: (code, answer) => true,
  finishFunnel: () => true
});

const { Provider, Consumer } = InfoContext;

export const InfoContextProvider = ({children}) => {
  const [userInfo, updateUserInfo] = useState(null)
  const [funnelInfo, updateFunnelInfo] = useState(null)
  const { token } = useParams()
  const { results } = useContext(QuestionContext)
  const history = useHistory()

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await api.get(`/funnel-tokens/${token}/customer`)
        updateUserInfo(response.data)
      } catch (e) {
        updateUserInfo(null)
        history.push(`${routeCodes.FEEDBACK}${FEEDBACKS.EXPIRED}`)
      }
    }
    const getFunnelInfo = async () => {
      try {
        const response = await api.get(`/funnel-tokens/token/${token}`)
        updateFunnelInfo(response.data)
      } catch (e) {
        updateFunnelInfo(null)
        history.push(`${routeCodes.FEEDBACK}${FEEDBACKS.NOTFOUND}`)
      }
    }

    getUserInfo()
    getFunnelInfo()
  }, [history, token])

  const nextQuestion = useCallback(async (code) => {
    try {
      const r = results.filter((res) => res.code === code)[0];
      const result = { ...r }
      delete result.code

      await api.post(`/funnel-tokens/${token}/next`, {
        code: String(code),
        answer: JSON.stringify(result),
      })

      updateFunnelInfo({ ...funnelInfo, currentQuestion: String(code) })
    } catch (e) {
      console.log(e)
    }
    return true
  }, [results, token, funnelInfo])

  const finishFunnel = useCallback(async () => {
    await api.post(`/funnel-tokens/${token}/finish`)
    updateFunnelInfo({ ...funnelInfo, hasFinished: true })
    return true
  }, [token, funnelInfo, updateFunnelInfo])
  
  return (
    <Provider
      value={{
        userInfo,
        funnelInfo,
        nextQuestion,
        finishFunnel
      }}
    >
      {children}
    </Provider>
  );
};


export const withInfoProvider = (ComposedComponent) => {
  return function WithSelectedSegments(props) {
    return (
      <Consumer>
        {(contextValues) => (
          <ComposedComponent {...props} {...contextValues} />
        )}
      </Consumer>
    );
  };
};
