import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../components/Button";
import styles from "../styles/Projects.module.css";

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
    fiftyProjects: {
      liveSite: "https://50reactprojects50days.netlify.app/",
      repo: "https://github.com/SamPuckett/50Projects50Days",
    },
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Things I've Built</h1>
      <section className={styles.card}>
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
      </section>
      <section className={styles.card}>
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
      </section>
      <section className={styles.card}>
        <h2 className={styles.card__title}>50 Projects in 50 Days</h2>
        <a
          href={projects.fiftyProjects.liveSite}
          className={styles.card__image}
          target="_blank"
        >
          <Image
            src="/github-finder.webp"
            alt="50 Projects in 50 Days"
            width={500}
            height={281}
            layout="intrinsic"
          />
        </a>
        <p className={styles.card__subTitle}>React, JavaScript, HTML, CSS</p>
        <ul className={styles.card__descriptionContainer}>
          <li className={styles.card__descriptionContainer__description}>
            I created 50 React projects in 50 days. I worked on this in order to
            create many different components that I might need in the future
            when creating things for front-end purposes.
          </li>
        </ul>
        <div className={styles.card__iconContainer}>
          <a
            href={projects.fiftyProjects.repo}
            className={styles.card__iconContainer__a}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faCodeBranch}
              className={styles.card__iconContainer__a__icon}
            />
          </a>
          <a
            href={projects.fiftyProjects.liveSite}
            className={styles.card__iconContainer__a}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className={styles.card__iconContainer__a__icon}
            />
          </a>
        </div>
      </section>
      <Button type="arrow" href="/contact" className={styles.button}>
        What's Next
      </Button>
    </div>
  );
};

export default Projects;
