import { motion } from "framer-motion";

import Button from "../components/Button";
import styles from "../styles/Contact.module.css";

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

const contact = () => {
  const contactButtonHandler = () => {
    console.log("button was clicked!");
    window.open("mailto:samuelruizdev@gmail.com");
  };

  return (
    <motion.div
      className={styles.container}
      variants={stagger}
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className={styles.container}
    >
      <motion.h1
        whileHover={{ scale: 1.05 }}
        variants={fadeInDown}
        className={styles.container__title}
      >
        Get In Touch
      </motion.h1>
      <motion.section
        whileHover={{ scale: 1.05 }}
        variants={fadeInLeft}
        className={styles.card}
      >
        <h2 className={styles.card__title}>Contact Me!</h2>
        <p className={styles.card__text}>
          I’m currently looking for new Developer opportunities, my inbox is
          always open. Whether you have a question or just want to say hi, I’ll
          try my best to get back to you!
        </p>
        <Button
          type="arrow"
          href="/contact"
          className={styles.button}
          onClick={contactButtonHandler}
        >
          Get In Touch
        </Button>
      </motion.section>
    </motion.div>
  );
};

export default contact;
