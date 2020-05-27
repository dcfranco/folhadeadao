import React from 'react';
import classNames from 'classnames';

function Form({ children, className }) {
  return (
    <div className={classNames('question-form', className)}>
      { children }
    </div>
  );
}

export default Form;
