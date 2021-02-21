import Link from "next/link";

const about = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img
        src="https://res.cloudinary.com/dnrbgmcm4/image/upload/v1611830623/Personal/Github%20ReadMe/IMG_20191011_150627_zlr0wa.jpg"
        alt="Me at Google"
        style={{ width: "80vw" }}
      />
      <p>
        Hello! I’m Sam, a Front-End Developer based in Modesto, California who
        enjoys designing things on the web. I am passionate about web
        development and creating products that users can easily use without
        having to think.
        <br />
        This past fall, I received by B.S. in Computer Science from California
        State University, Stanislaus. During my time as a student I was
        fortunate enough to be able to join Novo Technologies as a Software
        Developer Intern where I practiced agile development and worked with
        JavaScript, React and a variety of modern web technologies on a daily
        basis.
      </p>
      <button>
        <Link href="/work-experience">
          <a>Work Experience →</a>
        </Link>
      </button>
    </div>
  );
};

export default about;
