import Link from "next/link";

import Head from "next/head";
import styles from "../styles/Index.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samuel Ruiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Samuel Ruiz</h1>
      <img
        src="https://res.cloudinary.com/dnrbgmcm4/image/upload/v1611830623/Personal/Github%20ReadMe/IMG_20191011_150627_zlr0wa.jpg"
        alt="Me at Google"
        className={styles.img}
      />
      <ul className={styles.ul}>
        <li className={styles.li}>Fontend Web Dev,</li>
        <li className={styles.li}>Computer Science B.S.,</li>
        <li className={styles.li}>Graphic Designer,</li>
        <li className={styles.li}>Lover of Pizza,</li>
      </ul>
      <button className={styles.button}>
        <Link href="/about">
          <a>About Me →</a>
        </Link>
      </button>
    </div>
  );
};

export default Home;
