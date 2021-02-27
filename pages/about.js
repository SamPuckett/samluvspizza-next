import Image from "next/image";

import Button from "../components/Button";
import styles from "../styles/About.module.css";

const about = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <span className={styles.img}>
        <Image
          src="/HackMerced-cropped1.webp"
          alt="Me at Google"
          className={styles.image}
          width={554}
          height={554}
          layout="responsive"
        />
      </span>
      <p className={styles.text}>
        Hello! I’m Sam, a Front-End Developer based in Modesto, California who
        enjoys designing things on the web. I am passionate about web
        development and creating products that users can easily use without
        having to think.
        <br />
        <br />
        This past fall, I received by B.S. in Computer Science from California
        State University, Stanislaus. During my time as a student I was
        fortunate enough to be able to join Novo Technologies as a Software
        Developer Intern where I practiced agile development and worked with
        JavaScript, React and a variety of modern web technologies on a daily
        basis.
      </p>
      <span className={styles.button}>
        <Button type="arrow" href="/work" className={styles.button}>
          Work Experience
        </Button>
      </span>
    </div>
  );
};

export default about;
