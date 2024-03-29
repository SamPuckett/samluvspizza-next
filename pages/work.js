import { motion } from "framer-motion";

import Button from "../components/Button";
import styles from "../styles/Work.module.css";

import {
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  stagger,
} from "../animations/Animations";

const Work = () => {
  return (
    <motion.div
      variants={stagger}
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className={styles.container}
    >
      <motion.h1
        whileHover={{ scale: 1.05 }}
        variants={fadeInDown}
        className={styles.title}
      >
        Work Experience
      </motion.h1>
      <motion.section
        className={styles.card}
        whileHover={{ scale: 1.05 }}
        variants={fadeInLeft}
      >
        <h2 className={styles.card__title}>
          Fullstack Software Engineer <span className="orange">@ Oracle</span>
        </h2>
        <p className={styles.card__date}>July 2021 - Present</p>
        <ul className={styles.card__descriptionContainer}>
          <li className={styles.card__descriptionContainer__description}>
            Working with various front-end frameworks in order to deliver
            beatiful experiences to my team.
          </li>
          <li className={styles.card__descriptionContainer__description}>
            Developing API endpoints for the various front-end projects that I'm
            working on.
          </li>
        </ul>
      </motion.section>
      <motion.section
        className={styles.card}
        whileHover={{ scale: 1.05 }}
        variants={fadeInLeft}
      >
        <h2 className={styles.card__title}>
          Front-End React Developer & UI/UX Intern{" "}
          <span className="orange">@ Novo Technologies</span>
        </h2>
        <p className={styles.card__date}>November 2019 - March, 2021</p>
        <ul className={styles.card__descriptionContainer}>
          <li className={styles.card__descriptionContainer__description}>
            Improving scalability of a production application tremendously by
            incorporating the React Front-End library and other modern web
            technologies.
          </li>
          <li className={styles.card__descriptionContainer__description}>
            Improving my team’s productivity by drafting user stories,
            flowcharts, personas, tasks, and sprint backlogs for scrum sprints.
          </li>
        </ul>
      </motion.section>
      <motion.section
        className={styles.card}
        whileHover={{ scale: 1.05 }}
        variants={fadeInRight}
      >
        <h2 className={styles.card__title}>
          Google Developer Group Organizer & Mentor
          <span className="orange">
            {" "}
            @ Google Developer Group Cloud Turlock
          </span>
        </h2>
        <p className={styles.card__date}>August 2018 - February, 2021</p>
        <ul className={styles.card__descriptionContainer}>
          <li className={styles.card__descriptionContainer__description}>
            Conducting technical workshops where students learn popular computer
            science topics and technologies.
          </li>
          <li className={styles.card__descriptionContainer__description}>
            Increasing the overall number of members within the Developer Group
            by building a welcoming community of Computer Science Students and
            organizing team building events.
          </li>
        </ul>
      </motion.section>
      <motion.section
        className={styles.card}
        whileHover={{ scale: 1.05 }}
        variants={fadeInLeft}
      >
        <h2 className={styles.card__title}>
          Undergrad Chatbot Research
          <span className="orange">
            {" "}
            @ California State University Stanislaus
          </span>
        </h2>
        <p className={styles.card__date}>August 2019 - December, 2019</p>
        <ul className={styles.card__descriptionContainer}>
          <li className={styles.card__descriptionContainer__description}>
            Created a chatbot with Amazon Lex, HTML, CSS, and JavaScript in
            order to help students taking kinesiology courses have success in
            their classes.
          </li>
          <li className={styles.card__descriptionContainer__description}>
            Decreased the number of questions the professor was asked via email
            in half.
          </li>
          <li className={styles.card__descriptionContainer__description}>
            Worked with professor to survey previous classes and asked what were
            their most frequent questions in the courses and what they struggled
            with the most in order to implement the chatbot to cover all of
            those questions.
          </li>
        </ul>
      </motion.section>
      <Button type="arrow" href="/projects" className={styles.button}>
        Things I've Built
      </Button>
    </motion.div>
  );
};

export default Work;
