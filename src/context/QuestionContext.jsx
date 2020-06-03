import React, { createContext, useState, useContext } from 'react';

export const QuestionContext = createContext({
  results: [],
  updateResults: () => []
});

const { Provider, Consumer } = QuestionContext;

export const QuestionContextProvider = ({children}) => {
  const [results, updateResults] = useState([])

  return (
    <Provider
      value={{
        results,
        updateResults,
      }}
    >
      {children}
    </Provider>
  );
};

export const withQuestionProvider = (ComposedComponent) => {
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

export function useQuestion(code) {
  const { results, updateResults } = useContext(QuestionContext);
  const result = results.filter((res) => res.code === code);
  const exists = result.length > 0;

  return {
    question: exists ? result[0] : {},
    update: (r = {}) => {
      const newResults = exists ? [].concat(results).map((res) => {
        if (res.code === code) {
          return {
            ...res,
            ...r,
          }
        }
        return res
      }) : [{code, ...r}].concat(results);
      updateResults(newResults);
    }
  }
}
