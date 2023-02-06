import GitLink from "./components/GitLink";
import ProjectName from "./components/ProjectName";

const Footer = () => (
  <div className="container ">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
      <ProjectName text="&copy; 2023 Posts portal, Inc" />

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <GitLink />
        </li>
      </ul>
    </footer>
  </div>
);

export default Footer;
