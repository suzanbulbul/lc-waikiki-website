import React from 'react';

//Components
import HeaderTop from '../components/common/header/HeaderTop';
import HeaderMiddle from '../components/common/header/HeaderMiddle';
import HeaderBottom from '../components/common/header/HeaderBottom';

const Header = () => {

  return (

    <header className="header">
      <HeaderTop />
      <div className="container">
        <HeaderMiddle />
        <HeaderBottom />
      </div>
    </header>
  );
}

export default Header;
