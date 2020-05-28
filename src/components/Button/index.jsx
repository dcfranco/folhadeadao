import React from 'react';
import classNames from 'classnames';

function Button({ children, onClick, disabled, selected, className, isSecondary }) {
  return (
    <button type='button' disabled={ disabled } onClick={ onClick } className={ classNames('btn', {
      'selected': selected,
      'btn-primary': !isSecondary,
      'btn-secondary': isSecondary,
    }, className) }>
      { children }
    </button>
  );
}

export default Button;
