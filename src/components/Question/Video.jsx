import React from 'react';
import classNames from 'classnames';

function Video({ children, className }) {
  return (
    <div className={classNames('question-video', className)}>
      { children }
    </div>
  );
}

export default Video;
