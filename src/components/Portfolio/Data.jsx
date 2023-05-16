import Work6 from "../../assets/tic_tac_toe.png";
import Work5 from "../../assets/Mockup-gym.png";
import Work4 from "../../assets/Mockup-portfolio.png";
import Work3 from "../../assets/DBjump.png";
import Work2 from "../../assets/Clippy.png";
import Work1 from "../../assets/Handsup.png";
import TypeScript from "../../assets/typescript-logo-36.png";

export const projectsData = [
  {
    id: 1,
    image: Work5,
    title: "Gym Page",
    category: "Frontend",
    demoLink: "https://gymsite-typescript.netlify.app/",
    repoLink: "https://github.com/admartinbarcelo/Typescript-APP",
    technologies: [
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-react"></i>,
      <img className="typescript__logo"src={TypeScript} alt="typescript" />,
      <i className="bx bxl-tailwind-css"></i>,
      <i className="bx bxl-html5"></i>,
    ],
  },
  {
    id: 2,
    image: Work4,
    title: "My Portfolio",
    category: "Frontend",
    demoLink: "https://admartinbarcelo.netlify.app/",
    repoLink: "https://github.com/admartinbarcelo/portfolio-admartinbarcelo",
    technologies: [
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-react"></i>,
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
    ],
  },
  {
    id: 3,
    image: Work1,
    title: "Hands Up",
    category: "Full Stack",
    demoLink: "https://handsup-project.netlify.app/",
    repoLink: "https://github.com/admartinbarcelo/HandsUp-Client",
    technologies: [
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-react"></i>,
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-bootstrap"></i>,
      <i className="bx bxl-mongodb"></i>,
      <i className="bx bxl-nodejs"></i>,
    ],
  },
  {
    id: 4,
    image: Work6,
    title: "Tic Tac Toe",
    category: "Frontend",
    demoLink: "https://tic-tac-toe-admartin.netlify.app/",
    repoLink: "https://github.com/admartinbarcelo/Tic-Tac-Toe",
    technologies: [
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-react"></i>,
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
    ],
  },
  {
    id: 5,
    image: Work2,
    title: "Clippy",
    category: "Backend",
    demoLink: "https://clippy1.fly.dev/",
    repoLink: "https://github.com/admartinbarcelo/Clippy",
    technologies: [
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-bootstrap"></i>,
      <i className="bx bxl-mongodb"></i>,
      <i className="bx bxl-nodejs"></i>,
    ],
  },
  {
    id: 6,
    image: Work3,
    title: "DB Jump",
    category: "Frontend",
    demoLink: "https://eogimenez.github.io/dragonBall-Jump/",
    repoLink: "https://github.com/admartinbarcelo/dragonBall-Jump?organization=admartinbarcelo&organization=admartinbarcelo",
    technologies: [
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
    ],
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Full Stack",
  },
  {
    name: "Frontend",
  },
  {
    name: "Backend",
  },
];
