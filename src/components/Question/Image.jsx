import React from 'react';
import classNames from 'classnames'

function Image({ children, selected, className, onClick }) {
  return (
    <div className={classNames('question-image', {
      'selected': selected,
    }, className)} onClick={onClick}>
      { children }
    </div>
  );
}

export default Image;
