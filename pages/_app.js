
import React, { useEffect }  from "react";

// import { Toaster } from 'react-hot-toast';

//Components
import Layout from '../components/layout';

//Styles
import '../scss/style.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
        <Layout>
          <Component {...pageProps} />
          {/* <Toaster /> */}
        </Layout>
  );
}

export default MyApp
