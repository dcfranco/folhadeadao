import React from 'react';
import classNames from 'classnames';

function Options({ children, className }) {
  return (
    <div className={ classNames('question-options', className) }>
      { children }
    </div>
  );
}

export default Options;
