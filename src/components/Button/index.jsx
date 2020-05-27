import React from 'react';
import classNames from 'classnames';

function Button({ children, onClick, disabled, selected, className }) {
  return (
    <button type='button' disabled={ disabled } onClick={ onClick } className={ classNames('btn btn-primary', {
      'selected': selected,
    }, className) }>
      { children }
    </button>
  );
}

export default Button;
