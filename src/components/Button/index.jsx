import React from 'react';
import classNames from 'classnames';

function Button({ children, onClick, disabled, selected }) {
  return (
    <button type='button' disabled={ disabled } onClick={ onClick } className={ classNames('btn btn-primary', {
      'selected': selected,
    }) }>
      { children }
    </button>
  );
}

export default Button;
