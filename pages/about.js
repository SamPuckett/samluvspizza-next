import Image from "next/image";
import { motion } from "framer-motion";

import Button from "../components/Button";
import styles from "../styles/About.module.css";

import { fadeInLeft, fadeInRight, stagger } from "../animations/Animations";

const about = () => {
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
        About Me
      </motion.h1>
      <motion.span
        whileHover={{ scale: 1.05 }}
        variants={fadeInRight}
        className={styles.img}
      >
        <Image
          src="/HackMerced-cropped1.webp"
          alt="Me at Google"
          className={styles.image}
          width={554}
          height={554}
          layout="responsive"
          priority="true"
        />
      </motion.span>
      <motion.p
        whileHover={{ scale: 1.05 }}
        variants={fadeInLeft}
        className={styles.text}
      >
        Hello! I’m Sam, a Front-End Developer based in Bay Area, California who
        enjoys creating & designing tools on the web. I am passionate about web
        development and creating products that users can easily use without
        having to think.
        <br />
        <br />I am a software Engineer for Oracle in Redwood City. I recently
        just graduated as Computer Science student from California State
        University, Stanislaus. During the course of my academic career, I had
        the privilege of working for Novo Technologies in a React Developer &
        UI/UX Internship position in my free time, where I learned valuable
        professional skills Whether working on academic, extracurricular, or
        professional projects, I apply proven creative thinking, communication,
        and teamwork skills.
      </motion.p>
      <motion.span
        whileHover={{ scale: 1.05 }}
        variants={fadeInLeft}
        className={styles.button}
      >
        <Button type="arrow" href="/work" className={styles.button}>
          Work Experience
        </Button>
      </motion.span>
    </motion.div>
  );
};

export default about;
