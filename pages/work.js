import Link from "next/link";

const work = () => {
  return (
    <div>
      <h1>Things I've Built</h1>
      <section>
        <h2>Mega Video Game Quiz</h2>
        <img
          src="https://res.cloudinary.com/dnrbgmcm4/image/upload/v1611830623/Personal/Github%20ReadMe/IMG_20191011_150627_zlr0wa.jpg"
          alt="Me at Google"
          style={{ width: "80vw" }}
        />
        <p>Featured Project</p>
        <ul>
          <li>
            I mocked-up, designed, & coded a web application in which users test
            their knowledge of video game trivia in order to try and reach the
            high score leaderboards. I used React, Adobe XD, Firebase, Open
            Trivia API.
          </li>
        </ul>
      </section>
      <section>
        <h2>Travelo</h2>
        <img
          src="https://res.cloudinary.com/dnrbgmcm4/image/upload/v1611830623/Personal/Github%20ReadMe/IMG_20191011_150627_zlr0wa.jpg"
          alt="Me at Google"
          style={{ width: "80vw" }}
        />
        <p>Full Stack MERN Web Application</p>
        <ul>
          <li>
            I made a full stack MERN social media platform where users share
            places that they recommend to travel to. I learned how to use Heroku
            to host a backend & Firebase to host the frontend of the project.
          </li>
        </ul>
      </section>
      <section>
        <h2>50 Projects in 50 Days</h2>
        <img
          src="https://res.cloudinary.com/dnrbgmcm4/image/upload/v1611830623/Personal/Github%20ReadMe/IMG_20191011_150627_zlr0wa.jpg"
          alt="Me at Google"
          style={{ width: "80vw" }}
        />
        <p>React, JavaScript, HTML, CSS</p>
        <ul>
          <li>
            I created 50 React projects in 50 days. I worked on this in order to
            create many different components that I might need in the future
            when creating things for front-end purposes.
          </li>
        </ul>
      </section>
      <button>
        <Link href="/contact">
          <a>What's Next →</a>
        </Link>
      </button>
    </div>
  );
};

export default work;
