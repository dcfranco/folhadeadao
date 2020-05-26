import React from 'react';
import classNames from 'classnames';

function Text({ children, className }) {
  return (
    <div className={classNames('question-text', className)}>
      { children }
    </div>
  );
}

export default Text;
