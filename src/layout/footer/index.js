import GitLink from "./components/GitLink";
import ProjectName from "./components/ProjectName";

const Footer = ({ helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "layout/footer/index");

  return (
    <div className="container ">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <ProjectName helloFromMessage={helloFromMessage} text="&copy; 2023 Posts portal, Inc" />

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <GitLink helloFromMessage={helloFromMessage} />
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
