import Image from "next/image";
import { motion } from "framer-motion";

import Button from "../components/Button";
import styles from "../styles/Index.module.css";

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

const Home = () => {
  return (
    <motion.div
      className={styles.container}
      variants={stagger}
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        whileHover={{ scale: 1.05 }}
        variants={fadeInLeft}
        className={styles.title}
      >
        Samuel Ruiz
      </motion.h1>
      <motion.div
        whileHover={{ scale: 1.05 }}
        variants={fadeInRight}
        className={styles.img}
      >
        <Image
          src="/GoogleHispanicSummit-cropped1.webp"
          alt="Me at Google"
          width={287}
          height={287}
          layout="responsive"
          className={styles.image}
          priority="true"
        />
      </motion.div>
      <motion.ul
        whileHover={{ scale: 1.05 }}
        variants={fadeInLeft}
        className={styles.descriptionContainer}
      >
        <li className={styles.descriptionContainer__description}>
          Frontend Web Dev
        </li>
        <li className={styles.descriptionContainer__description}>
          Computer Science Graduate
        </li>
        <li className={styles.descriptionContainer__description}>
          Graphic Designer
        </li>
        <li className={styles.descriptionContainer__description}>
          Lover of Pizza
        </li>
      </motion.ul>
      <motion.span
        whileHover={{ scale: 1.05 }}
        variants={fadeInLeft}
        className={styles.button}
      >
        <Button type="arrow" href="/about" className={styles.button}>
          About Me
        </Button>
      </motion.span>
    </motion.div>
  );
};

export default Home;
