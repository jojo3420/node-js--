import React from 'react';
import Navigator from '../navigator/Navigator';


function Header({ title }) {
  return (
    <header>
      <h1>{title ? title : 'Blog App'}</h1>
      <Navigator list={[]} />
    </header>
  );
}

export default Header;
