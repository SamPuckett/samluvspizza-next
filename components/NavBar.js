import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <FontAwesomeIcon icon={faHome} className={styles.icon} />
      </Link>
      <FontAwesomeIcon icon={faBars} className={styles.icon} />
    </nav>
  );
};

export default NavBar;
