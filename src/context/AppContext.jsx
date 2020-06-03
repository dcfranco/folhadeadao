import React, { createContext, useState, useContext, useEffect } from 'react';

export const AppContext = createContext({
  hash: null,
  updateHash: () => false,

  userInfo: null,
  updateUserInfo: () => false,

  funnelInfo: null,
  updateFunnelInfo: () => false,

  isBackgroundVisible: true,
  toggleBackgroundVisible: () => true
});

const { Provider, Consumer } = AppContext;

export const AppContextProvider = ({children}) => {
  const [isBackgroundVisible, toggleBackgroundVisible] = useState(true)
  const [userInfo, updateUserInfo] = useState(null)
  const [funnelInfo, updateFunnelInfo] = useState({})
  
  return (
    <Provider
      value={{
        userInfo,
        funnelInfo,
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

export function useUserInfo() {
  const { userInfo, updateUserInfo } = useContext(AppContext);

  return {
    userInfo,
    updateUserInfo,
  }
}


export function useFunnelInfo() {
  const { funnelInfo, updateFunnelInfo } = useContext(AppContext);

  return {
    funnelInfo,
    updateFunnelInfo,
  }
}
