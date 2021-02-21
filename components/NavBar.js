import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <FontAwesomeIcon icon={faBars} className={styles.icon} />
    </nav>
  );
};

export default NavBar;
