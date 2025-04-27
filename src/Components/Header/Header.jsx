import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <nav className='text-center'>
      <ul>
        <NavLink to={'/'}>Home</NavLink>
      </ul>
    </nav>
  );
};

export default Header;