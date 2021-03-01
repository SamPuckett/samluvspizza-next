import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import styles from "../styles/NavBar.module.css";

// animage: defines the final state of the animation.
// initial: defines the initial state of animation.
// exit: defines animation when component exits.

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const fadeInRight = {
  initial: {
    x: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const fadeInLeft = {
  initial: {
    x: -60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const fadeInDown = {
  initial: {
    y: -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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
    <motion.nav
      variants={stagger}
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className={styles.nav}
    >
      <Link href="/">
        <Image
          src="/MeMoji.webp"
          className={styles.nav__memoji}
          alt="me as a memoji"
          width={70}
          height={70}
          layout="intrinsic"
          priority="true"
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
    </motion.nav>
  );
};

export default NavBar;
