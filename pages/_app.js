import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "./RTK/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
