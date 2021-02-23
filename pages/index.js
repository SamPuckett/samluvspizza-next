import Link from "next/link";
import Image from "next/image";

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
      <Image
        src="/GoogleHispanicSummit-cropped2.png"
        alt="Me at Google"
        className={styles.img}
        width={287}
        height={287}
        layout="responsive"
      />
      <ul className={styles.ul}>
        <li className={styles.li}>Fontend Web Dev,</li>
        <li className={styles.li}>Computer Science B.S.,</li>
        <li className={styles.li}>Graphic Designer,</li>
        <li className={styles.li}>Lover of Pizza,</li>
      </ul>
      <Link href="/about" className={styles.button}>
        <button>About Me →</button>
      </Link>
    </div>
  );
};

export default Home;
