import Link from "next/link";
import Image from "next/image";

import styles from "../styles/WorkExperience.module.css";

const workExperience = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Work Exp</h1>
      <Image
        src="/Novo.png"
        alt="Me at Novo Technologies giving a presenation."
        className={styles.img}
        width={853}
        height={853}
      />
      <section className={styles.section}>
        <h2 className={styles.h2}>
          Front-End React Developer & UI/UX Intern{" "}
          <span className="orange">@ Novo Technologies</span>
        </h2>
        <p className={styles.date}>November 2019 - April, 2020</p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Improving scalability of a production application tremendously by
            incorporating the React Front-End library and other modern web
            technologies.
          </li>
          <li className={styles.li}>
            Improving my team’s productivity by drafting user stories,
            flowcharts, personas, tasks, and sprint backlogs for scrum sprints.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.h2}>
          Google Developer Group Organizer & Mentor
          <span className="orange">@ Google Developer Group Cloud Turlock</span>
        </h2>
        <p className={styles.date}>August 2018 - February, 2021</p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Conducting technical workshops where students learn popular computer
            science topics and technologies.
          </li>
          <li className={styles.li}>
            Increasing the overall number of members within the Developer Group
            by building a welcoming community of Computer Science Students and
            organizing team building events.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.h2}>
          Undergrad Chatbot Research
          <span className="orange">
            @ California State University Stanislaus Kinesiology Department{" "}
          </span>
        </h2>
        <p className={styles.date}>August 2019 - December, 2019</p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Created a chatbot with Amazon Lex, HTML, CSS, and JavaScript in
            order to help students taking kinesiology courses have success in
            their classes.
          </li>
          <li className={styles.li}>
            Decreased the number of questions the professor was asked via email
            in half.
          </li>
          <li className={styles.li}>
            Worked with professor to survey previous classes and asked what were
            their most frequent questions in the courses and what they struggled
            with the most in order to implement the chatbot to cover all of
            those questions.
          </li>
        </ul>
      </section>
      <Link href="/work" className={styles.button}>
        <button>Things I've Built →</button>
      </Link>
    </div>
  );
};

export default workExperience;
