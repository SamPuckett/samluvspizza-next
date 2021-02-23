import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Work.module.css";

const work = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Things I've Built</h1>
      <Link href="https://megavideogamequiz.xyz/">
        <a>
          <section className={styles.section}>
            <h2 className={styles.projectTitle}>Mega Video Game Quiz</h2>
            <Image
              src="/MVGQ.png"
              alt="Mega Video Game Quiz"
              className={styles.img}
              width={3000}
              height={3000}
            />
            <p className={styles.p}>Featured Project</p>
            <ul className={styles.ul}>
              <li className={styles.li}>
                I mocked-up, designed, & coded a web application in which users
                test their knowledge of video game trivia in order to try and
                reach the high score leaderboards. I used React, Adobe XD,
                Firebase, Open Trivia API.
              </li>
            </ul>
          </section>
        </a>
      </Link>
      <Link href="https://react-mern-299603.web.app/">
        <a>
          <section className={styles.section}>
            <h2 className={styles.projectTitle}>Travelo</h2>
            <Image
              src="/travelo.png"
              alt="Me at Google"
              className={styles.img}
              width={3840}
              height={2160}
            />
            <p className={styles.p}>Full Stack MERN Web Application</p>
            <ul className={styles.ul}>
              <li className={styles.li}>
                I made a full stack MERN social media platform where users share
                places that they recommend to travel to. I learned how to use
                Heroku to host a backend & Firebase to host the frontend of the
                project.
              </li>
            </ul>
          </section>
        </a>
      </Link>
      <Link href="https://50reactprojects50days.netlify.app/">
        <a>
          <section className={styles.section}>
            <h2 className={styles.projectTitle}>50 Projects in 50 Days</h2>
            <Image
              src="/github-finder.png"
              alt="Me at Google"
              className={styles.img}
              width={3840}
              height={2160}
            />
            <p className={styles.p}>React, JavaScript, HTML, CSS</p>
            <ul className={styles.ul}>
              <li className={styles.li}>
                I created 50 React projects in 50 days. I worked on this in
                order to create many different components that I might need in
                the future when creating things for front-end purposes.
              </li>
            </ul>
          </section>
        </a>
      </Link>
      <Link href="/contact">
        <button className={styles.button}>What's Next →</button>
      </Link>
    </div>
  );
};

export default work;
