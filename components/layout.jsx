import React from 'react';

// Components
import Header from './header';

const Layout = ({ children }) => {

  return (
    <div>
      <Header />
      <main className='container mt-3'>{children}</main>
    </div>
  );
};

export default Layout;
