import React from 'react';

function Navigation() {
  return (
    <nav>
      <ul className='nav justify-content-center'>
        <li className='nav-item mx-2'>
          <a href='#' className='nav-link navlink'>
              about me
          </a>
        </li>
        <li className='nav-item mx-2'>
          <a href='#' className='nav-link navlink'>
              portfolio
          </a>
        </li>
        <li className='nav-item mx-2'>
          <a href='#' className='nav-link navlink'>
              contact
          </a>
        </li>
        <li className='nav-item mx-2'>
          <a href='#' className='nav-link navlink'>
              resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;