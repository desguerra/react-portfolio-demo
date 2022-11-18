import React from 'react';

function Navigation(props) {
  const {
    setCurrentPage
  } = props;

  return (
    <nav>
      <ul className='nav justify-content-center'>
        <li className='nav-item mx-2'>
          <span className='nav-link navlink' onClick={() => setCurrentPage('about')}>
            about me
          </span>
        </li>
        <li className='nav-item mx-2'>
          <span className='nav-link navlink' onClick={() => setCurrentPage('portfolio')}>
            portfolio
          </span>
        </li>
        <li className='nav-item mx-2'>
          <span className='nav-link navlink' onClick={() => setCurrentPage('contact')}>
            contact
          </span>
        </li>
        <li className='nav-item mx-2'>
          <span className='nav-link navlink' onClick={() => setCurrentPage('resume')}>
            resume
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;