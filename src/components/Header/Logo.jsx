import React from 'react';
import classNames from 'classnames';

function Logo({ children, className }) {
  return (
    <div className={classNames('header-logo', className)}>
      { children }
    </div>
  );
}

export default Logo;
