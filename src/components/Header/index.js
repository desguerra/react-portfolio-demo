import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
  const {
    setCurrentPage
  } = props;

  return (
    <header>
      <h1>nikki esguerra</h1>
      <Navigation
        setCurrentPage={setCurrentPage}
      ></Navigation>
    </header>
  );
}

export default Header;