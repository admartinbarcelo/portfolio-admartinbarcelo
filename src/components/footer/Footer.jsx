import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Admartinbarcelo</h1>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/admartinbarcelo/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin-square"></i>
          </a>

          <a
            href="https://github.com/admartinbarcelo"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://www.instagram.com/admartinbarcelo/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
