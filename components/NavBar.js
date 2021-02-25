import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/NavBar.module.css";

const NavBar = ({ setIsMobileMenuOpen }) => {
  const router = useRouter();

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Me",
      link: "/about",
    },
    {
      name: "Work Exp",
      link: "/work",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <img
          src="/MeMoji.png"
          className={styles.nav__memoji}
          alt="me as a memoji"
        />
      </Link>
      <FontAwesomeIcon
        icon={faBars}
        className={styles.nav__hamburger}
        onClick={() => {
          setIsMobileMenuOpen(true);
        }}
      />
      <ul className={styles.nav__desktopLinkContainer}>
        {menuItems.map((item, index) => (
          <li className={styles.nav__desktopLinkContainer__item} key={index}>
            <Link href={item.link}>
              <a
                className={
                  router.pathname == `${item.link}` ? `${styles.active}` : ""
                }
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
