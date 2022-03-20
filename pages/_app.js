import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";
import { useEffect } from "react";
import Layout from "../components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/global.css";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
