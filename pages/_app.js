import "../styles/globals.css";
import Head from "next/head";
import Header from '../Components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/Hulu.ico" type="image/x-icon" />
        <title>Home - Hulu Clone</title>
      </Head>

      <div className="p-2 min-h-[100vh] Background sm:p-[2rem] text-white">
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
