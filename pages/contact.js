import Link from "next/link";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const contact = () => {
  const contactButtonHandler = () => {
    console.log("button was clicked!");
  };

  return (
    <div>
      <h1>Get In Touch</h1>
      <section>
        <h2>Contact Me!</h2>
        <p>
          I’m currently looking for new Developer opportunities, my inbox is
          always open. Whether you have a question or just want to say hi, I’ll
          try my best to get back to you!
        </p>
        <button onClick={contactButtonHandler}>Get In Touch →</button>
      </section>
    </div>
  );
};

export default contact;
