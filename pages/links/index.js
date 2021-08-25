import { motion } from "framer-motion";
import Link from "next/link";

import styles from "../../styles/Links.module.css";

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

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.sheety.co/a938a9b6a148faa2a48b79ae4aec7f94/samLuvsPizzaLinks/sheet1`
  );
  const data = await res.json();

  return {
    props: { links: data },
  };
};

const links = ({ links }) => {
  const sectionClickHandler = () => {
    // console.log(`link was clicked`);
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
        Links
      </motion.h1>
      <Link href={links.sheet1[0].linkUrl}>
        <motion.section
          whileHover={{ scale: 1.05 }}
          variants={fadeInLeft}
          className={styles.card}
          onClick={sectionClickHandler}
        >
          <h2 className={styles.card__title}>{links.sheet1[0].linkTitle}</h2>
        </motion.section>
      </Link>

      <Link href={links.sheet1[1].linkUrl}>
        <motion.section
          whileHover={{ scale: 1.05 }}
          variants={fadeInLeft}
          className={styles.card}
          onClick={sectionClickHandler}
        >
          <h2 className={styles.card__title}>{links.sheet1[1].linkTitle}</h2>
        </motion.section>
      </Link>
    </motion.div>
  );
};

export default links;
