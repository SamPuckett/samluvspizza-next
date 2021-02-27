import Button from "../components/Button";
import styles from "../styles/Contact.module.css";

const contact = () => {
  const contactButtonHandler = () => {
    console.log("button was clicked!");
    window.open("mailto:samuelruizdev@gmail.com");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Get In Touch</h1>
      <section className={styles.card}>
        <h2 className={styles.card__title}>Contact Me!</h2>
        <p className={styles.card__text}>
          I’m currently looking for new Developer opportunities, my inbox is
          always open. Whether you have a question or just want to say hi, I’ll
          try my best to get back to you!
        </p>
        <Button
          type="arrow"
          href="/contact"
          className={styles.button}
          onClick={contactButtonHandler}
        >
          Get In Touch
        </Button>
      </section>
    </div>
  );
};

export default contact;
