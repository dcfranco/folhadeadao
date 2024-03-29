import React, { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import classNames from 'classnames';

function Layout({ children }) {
  const { isBackgroundVisible } = useContext(AppContext);
  return (
    <main className={classNames({
      'no-background': !isBackgroundVisible,
    })}>
      { children }
    </main>
  );
}

export default Layout;
