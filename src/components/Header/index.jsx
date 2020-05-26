import React from 'react';
import Title from './Title';
import Logo from './Logo';

function Header({ children, className }) {
  return (
    <header className={className}>
      { children }
    </header>
  );
}

Header.Title = Title;
Header.Logo = Logo;

export { Title, Logo };
export default Header;
