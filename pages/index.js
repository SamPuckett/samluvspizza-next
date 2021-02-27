import Image from "next/image";

import Button from "../components/Button";
import styles from "../styles/Index.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Samuel Ruiz</h1>
      <span className={styles.img}>
        <Image
          src="/GoogleHispanicSummit-cropped1.webp"
          alt="Me at Google"
          width={287}
          height={287}
          layout="responsive"
          className={styles.image}
        />
      </span>
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
          Lover of Pizza.
        </li>
      </ul>
      <span className={styles.button}>
        <Button type="arrow" href="/about" className={styles.button}>
          About Me
        </Button>
      </span>
    </div>
  );
};

export default Home;
