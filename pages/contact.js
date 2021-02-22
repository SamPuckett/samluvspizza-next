import Link from "next/link";

import styles from "../styles/Contact.module.css";

const contact = () => {
  const contactButtonHandler = () => {
    console.log("button was clicked!");
    window.open("mailto:samuelruizdev@gmail.com");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get In Touch</h1>
      <section className={styles.section}>
        <h2 className={styles.projectTitle}>Contact Me!</h2>
        <p className={styles.text}>
          I’m currently looking for new Developer opportunities, my inbox is
          always open. Whether you have a question or just want to say hi, I’ll
          try my best to get back to you!
        </p>
        <button className={styles.button} onClick={contactButtonHandler}>
          Get In Touch →
        </button>
      </section>
    </div>
  );
};

export default contact;
