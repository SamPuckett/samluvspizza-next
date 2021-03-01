import { useState } from "react";
import { AnimatePresence } from "framer-motion";

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
      <AnimatePresence exitBeforeEnter>
        <Component
          {...pageProps}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
