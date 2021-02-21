import Link from "next/link";

const workExperience = () => {
  return (
    <div>
      <h1>Work Exp</h1>
      <img
        src="https://res.cloudinary.com/dnrbgmcm4/image/upload/v1611830623/Personal/Github%20ReadMe/IMG_20191011_150627_zlr0wa.jpg"
        alt="Me at Google"
        style={{ width: "80vw" }}
      />
      <section>
        <h2>Front-End React Developer & UI/UX Intern @ Novo Technologies</h2>
        <p>November 2019 - April, 2020</p>
        <ul>
          <li>
            Improving scalability of a production application tremendously by
            incorporating the React Front-End library and other modern web
            technologies.
          </li>
          <li>
            Improving my team’s productivity by drafting user stories,
            flowcharts, personas, tasks, and sprint backlogs for scrum sprints.
          </li>
        </ul>
      </section>
      <section>
        <h2>
          Google Developer Group Organizer & Mentor @ Google Developer Group
          Cloud Turlock
        </h2>
        <p>August 2018 - February, 2021</p>
        <ul>
          <li>
            Conducting technical workshops where students learn popular computer
            science topics and technologies.
          </li>
          <li>
            Increasing the overall number of members within the Developer Group
            by building a welcoming community of Computer Science Students and
            organizing team building events.
          </li>
        </ul>
      </section>
      <section>
        <h2>
          Undergrad Chatbot Research @ California State University Stanislaus
          Kinesiology Department
        </h2>
        <p>August 2019 - December, 2019</p>
        <ul>
          <li>
            Created a chatbot with Amazon Lex, HTML, CSS, and JavaScript in
            order to help students taking kinesiology courses have success in
            their classes.
          </li>
          <li>
            Decreased the number of questions the professor was asked via email
            in half.
          </li>
          <li>
            Worked with professor to survey previous classes and asked what were
            their most frequent questions in the courses and what they struggled
            with the most in order to implement the chatbot to cover all of
            those questions.
          </li>
        </ul>
      </section>
      <button>
        <Link href="/work">
          <a>Things I've Built →</a>
        </Link>
      </button>
    </div>
  );
};

export default workExperience;
