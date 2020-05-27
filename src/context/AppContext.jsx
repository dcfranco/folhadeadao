import React, { createContext, useState } from 'react';

export const AppContext = createContext({
  isBackgroundVisible: true,
  toggleBackgroundVisible: () => true
});

const { Provider, Consumer } = AppContext;

export const AppContextProvider = ({children}) => {
  const [isBackgroundVisible, toggleBackgroundVisible] = useState(true)
  
  return (
    <Provider
      value={{
        isBackgroundVisible,
        toggleBackgroundVisible,
      }}
    >
      {children}
    </Provider>
  );
};


export const withAppProvider = (ComposedComponent) => {
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
