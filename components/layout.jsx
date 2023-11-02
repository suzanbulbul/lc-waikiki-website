import React from 'react';

// Components
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {

  return (
    <div>
      <Header />
      <main className='container layout'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
