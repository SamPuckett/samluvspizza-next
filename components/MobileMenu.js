import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

import styles from "../styles/MobileMenu.module.css";

// animage: defines the final state of the animation.
// initial: defines the initial state of animation.
// exit: defines animation when component exits.

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
  },
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
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
      duration: 0.3,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
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
      duration: 0.3,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
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
      duration: 0.3,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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
    <AnimatePresence>
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className={styles.container}
        onClick={closeButtonHandler}
        exit={{ opacity: 0 }}
      >
        <AnimatePresence>
          <motion.div variants={fadeInRight} className={styles.container__menu}>
            <FontAwesomeIcon
              icon={faTimes}
              className={styles.container__menu__closeIcon}
              onClick={closeButtonHandler}
            />
            <AnimatePresence>
              <motion.ul
                variants={stagger}
                className={styles.container__menu__list}
              >
                {menuItems.map((item, index) => (
                  <AnimatePresence>
                    <motion.li
                      variants={fadeInRight}
                      className={styles.container__menu__list__item}
                      key={index}
                    >
                      <Link href={item.link}>
                        <a onClick={closeButtonHandler}>{item.name}</a>
                      </Link>
                    </motion.li>
                  </AnimatePresence>
                ))}
              </motion.ul>
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
