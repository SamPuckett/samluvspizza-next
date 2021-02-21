import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">
            <FontAwesomeIcon icon={faHome} className={styles.icon} />
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="https://www.linkedin.com/in/samuelgruiz/">
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="https://github.com/sampuckett">
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="https://www.instagram.com/samluvspizza/">
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
