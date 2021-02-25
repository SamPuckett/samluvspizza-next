import { useState } from "react";

import Layout from "../components/Layout";
import { MobileMenu } from "../components/MobileMenu";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Layout
      isMobileMenuOpen={isMobileMenuOpen}
      setIsMobileMenuOpen={setIsMobileMenuOpen}
    >
      {isMobileMenuOpen && (
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
      <Component
        {...pageProps}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </Layout>
  );
}

export default MyApp;
