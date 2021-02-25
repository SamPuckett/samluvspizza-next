import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/MobileMenu.module.css";

export const MobileMenu = ({ setIsMobileMenuOpen }) => {
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

  const closeButtonHandler = () => {
    setIsMobileMenuOpen(false);
    console.log("closeButtonHandler");
  };

  return (
    <div className={styles.container} onClick={closeButtonHandler}>
      <div className={styles.container__menu}>
        <FontAwesomeIcon
          icon={faTimes}
          className={styles.container__menu__closeIcon}
          onClick={closeButtonHandler}
        />
        <ul className={styles.container__menu__list}>
          {menuItems.map((item, index) => (
            <li className={styles.container__menu__list__item} key={index}>
              <Link href={item.link}>
                <a onClick={closeButtonHandler}>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
