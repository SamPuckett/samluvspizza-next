import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import Button from "../components/Button";
import styles from "../styles/Projects.module.css";

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

const Projects = () => {
  const projects = {
    quiz: {
      liveSite: "https://megavideogamequiz.xyz/",
      repo: "https://github.com/SamPuckett/react-quiz-with-firebase",
    },
    travelo: {
      liveSite: "https://react-mern-299603.web.app/",
      repo: "https://github.com/SamPuckett/Travelo-FrontEnd",
    },
    wildfireTracker: {
      liveSite: "https://wildfiretracker.netlify.app/",
      repo: "https://github.com/SamPuckett/Wildfire-Tracker",
    },
  };

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
        variants={fadeInDown}
        className={styles.container__title}
      >
        Things I've Built
      </motion.h1>
      <motion.section
        whileHover={{ scale: 1.05 }}
        variants={fadeInLeft}
        className={styles.card}
      >
        <h2 className={styles.card__title}>Mega Video Game Quiz</h2>
        <a
          href={projects.quiz.liveSite}
          className={styles.card__image}
          target="_blank"
        >
          <Image
            src="/MVGQ.webp"
            alt="Mega Video Game Quiz"
            width={500}
            height={500}
            layout="intrinsic"
            priority="true"
          />
        </a>
        <p className={styles.card__subTitle}>Featured Project</p>
        <ul className={styles.card__descriptionContainer}>
          <li className={styles.card__descriptionContainer__description}>
            I mocked-up, designed, & coded a web application in which users test
            their knowledge of video game trivia in order to try and reach the
            high score leaderboards. I used React, Adobe XD, Firebase, Open
            Trivia API.
          </li>
        </ul>
        <div className={styles.card__iconContainer}>
          <a
            href={projects.quiz.repo}
            className={styles.card__iconContainer__a}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faCodeBranch}
              className={styles.card__iconContainer__a__icon}
            />
          </a>
          <a
            href={projects.quiz.liveSite}
            className={styles.card__iconContainer__a}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className={styles.card__iconContainer__a__icon}
            />
          </a>
        </div>
      </motion.section>
      <motion.section
        whileHover={{ scale: 1.05 }}
        variants={fadeInRight}
        className={styles.card}
      >
        <h2 className={styles.card__title}>Travelo</h2>
        <a
          href={projects.travelo.liveSite}
          className={styles.card__image}
          target="_blank"
        >
          <Image
            src="/travelo.webp"
            alt="Travelo.com homepage"
            width={500}
            height={281}
            layout="intrinsic"
            priority="true"
          />
        </a>
        <p className={styles.card__subTitle}>Full Stack MERN Web Application</p>
        <ul className={styles.card__descriptionContainer}>
          <li className={styles.card__descriptionContainer__description}>
            I made a full stack MERN social media platform where users share
            places that they recommend to travel to. I learned how to use Heroku
            to host a backend & Firebase to host the frontend of the project.
            This projcet utilizes React, MongoDB, Node.js and Express.js.
          </li>
        </ul>
        <div className={styles.card__iconContainer}>
          <a
            href={projects.travelo.repo}
            className={styles.card__iconContainer__a}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faCodeBranch}
              className={styles.card__iconContainer__a__icon}
            />
          </a>
          <a
            href={projects.travelo.liveSite}
            className={styles.card__iconContainer__a}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className={styles.card__iconContainer__a__icon}
            />
          </a>
        </div>
      </motion.section>
      <motion.section
        whileHover={{ scale: 1.05 }}
        variants={fadeInLeft}
        className={styles.card}
      >
        <h2 className={styles.card__title}>Wildfire Tracker</h2>
        <a
          href={projects.wildfireTracker.liveSite}
          className={styles.card__image}
          target="_blank"
        >
          <Image
            src="/wildfireTracker.webp"
            alt="Wildfire Tracker"
            width={500}
            height={281}
            layout="intrinsic"
          />
        </a>
        <p className={styles.card__subTitle}>React, JavaScript, HTML, CSS</p>
        <ul className={styles.card__descriptionContainer}>
          <li className={styles.card__descriptionContainer__description}>
            Wildfire Tracker website that is powered by NASA's EONET Public API
            which provides us with the wildfire data. Plots the wildfires on a
            google map and provides info about the specific wildfire whenever
            clicked on.
          </li>
        </ul>
        <div className={styles.card__iconContainer}>
          <a
            href={projects.wildfireTracker.repo}
            className={styles.card__iconContainer__a}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faCodeBranch}
              className={styles.card__iconContainer__a__icon}
            />
          </a>
          <a
            href={projects.wildfireTracker.liveSite}
            className={styles.card__iconContainer__a}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className={styles.card__iconContainer__a__icon}
            />
          </a>
        </div>
      </motion.section>
      <Button type="arrow" href="/contact" className={styles.button}>
        What's Next
      </Button>
    </motion.div>
  );
};

export default Projects;
