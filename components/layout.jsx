import React from 'react';
import { useRouter } from 'next/router'; 

// Components
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  const router = useRouter();

  if (router.pathname === '/comingsoon' || router.pathname === '/404') {
    return <main>{children}</main>;
  }
  
  return (
    <div>
      <Header />
      <main className='container layout'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;