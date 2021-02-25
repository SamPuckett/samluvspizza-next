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
    <footer className={styles.footer}>
      <ul className={styles.footer__itemContainer}>
        <li className={styles.footer__itemContainer__singleItem}>
          <Link href="https://www.linkedin.com/in/samuelgruiz/">
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
          </Link>
        </li>
        <li className={styles.footer__itemContainer__singleItem}>
          <Link href="https://github.com/sampuckett">
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </Link>
        </li>
        <li className={styles.footer__itemContainer__singleItem__icon}>
          <Link href="https://www.instagram.com/samluvspizza/">
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
