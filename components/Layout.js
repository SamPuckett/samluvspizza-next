import Head from "next/head";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children, setIsMobileMenuOpen }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I am a React Frontend Developer from Modesto, California with professional experience in the industry."
        />
        <title>Samuel Ruiz: Frontend Developer</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <NavBar setIsMobileMenuOpen={setIsMobileMenuOpen} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
