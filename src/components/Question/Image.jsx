import React from 'react';
import classNames from 'classnames'

function Image({ children, className }) {
  return (
    <div className={classNames('question-image', className)}>
      { children }
    </div>
  );
}

export default Image;
