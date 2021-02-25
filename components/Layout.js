import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children, setIsMobileMenuOpen }) => {
  return (
    <>
      <NavBar setIsMobileMenuOpen={setIsMobileMenuOpen} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
