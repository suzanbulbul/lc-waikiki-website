
import React from "react";
// import { Toaster } from 'react-hot-toast';

//Components
import Layout from '../components/layout';

//Styles
import '../scss/style.scss'

function MyApp({ Component, pageProps }) {
  return (
        <Layout>
          <Component {...pageProps} />
          {/* <Toaster /> */}
        </Layout>
  );
}

export default MyApp
