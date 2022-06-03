import { useState } from "react";
import Layout from "../src/components/layout/Layout";

// styles
import "../styles/globals.css";

// props
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [menuVisibility, setMenuVisibility] = useState<string>("hidden");

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
