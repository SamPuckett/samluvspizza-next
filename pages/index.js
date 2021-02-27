import Image from "next/image";

import Button from "../components/Button";
import styles from "../styles/Index.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Samuel Ruiz</h1>
      <Image
        src="/GoogleHispanicSummit-cropped2.png"
        alt="Me at Google"
        className={styles.img}
        width={287}
        height={287}
        layout="responsive"
      />
      <ul className={styles.descriptionContainer}>
        <li className={styles.descriptionContainer__description}>
          Fontend Web Dev,
        </li>
        <li className={styles.descriptionContainer__description}>
          Computer Science B.S.,
        </li>
        <li className={styles.descriptionContainer__description}>
          Graphic Designer,
        </li>
        <li className={styles.descriptionContainer__description}>
          Lover of Pizza,
        </li>
      </ul>
      <Button type="arrow" href="/about" className={styles.button}>
        About Me
      </Button>
    </div>
  );
};

export default Home;
