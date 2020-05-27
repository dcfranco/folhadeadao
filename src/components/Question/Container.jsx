import React from 'react';
import classNames from 'classnames';

function Container({ children, className }) {
  return (
    <div className={classNames('question-container', className)}>
      { children }
    </div>
  );
}

export default Container;
