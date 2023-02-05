import { ReactComponent as GithubIcon } from "assets/icons/github.svg";

const Footer = () => (
  <div className="container ">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
      <p className="col-md-4 mb-0 text-muted">&copy; 2023 Posts portal, Inc</p>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <a
            href="https://github.com/ado23"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link px-2 text-muted"
          >
            <GithubIcon />
          </a>
        </li>
      </ul>
    </footer>
  </div>
);

export default Footer;
