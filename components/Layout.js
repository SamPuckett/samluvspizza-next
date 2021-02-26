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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar setIsMobileMenuOpen={setIsMobileMenuOpen} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
