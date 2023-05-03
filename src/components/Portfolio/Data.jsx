import Work4 from "../../assets/MyPortfolio.png";
import Work3 from "../../assets/DBjump.png";
import Work2 from "../../assets/Clippy.png";
import Work1 from "../../assets/Handsup.png";

export const projectsData = [
 {
    id: 1,
    image: Work5,
    title: "Under Construction",
    category: "Full Stack",
    demoLink: "https://github.com/admartinbarcelo/Typescript-APP",
    technologies: [
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-react"></i>,
      <i class='bx bxl-typescript' ></i>,
      <i class='bx bxl-tailwind-css'></i>,
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,

      
    ]

 },
  {
    id: 1,
    image: Work4,
    title: "My Portfolio",
    category: "Frontend",
    demoLink: "https://github.com/admartinbarcelo/portfolio-admartinbarcelo",
    technologies: [
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-react"></i>,
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
    ],
  },
  {
    id: 2,
    image: Work1,
    title: "Hands Up",
    category: "Full Stack",
    demoLink: "https://handsup-project.netlify.app/",
    technologies: [
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-react"></i>,
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i class='bx bxl-bootstrap' ></i>,
      <i class="bx bxl-mongodb"></i>,
      <i class="bx bxl-nodejs"></i>,
    ],
  },
  {
    id: 3,
    image: Work2,
    title: "Clippy",
    category: "Backend",
    demoLink: "https://clippy1.fly.dev/",
    technologies: [
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i class='bx bxl-bootstrap' ></i>,
      <i class="bx bxl-mongodb"></i>,
      <i class="bx bxl-nodejs"></i>,
    ],
  },
  {
    id: 4,
    image: Work3,
    title: "DB Jump",
    category: "Frontend",
    demoLink: "https://eogimenez.github.io/dragonBall-Jump/",
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
