
import React, { useEffect }  from "react";
import { Provider } from "react-redux";
import { wrapper } from "../store/store";

//Toaster
import { Toaster } from 'react-hot-toast';

//Components
import Layout from '../components/layout';

//Styles
import '../scss/style.scss'

function MyApp({ Component, ...rest }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const {store, props} = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <Toaster />
        </Layout>
    </Provider>
  );
}

export default MyApp
