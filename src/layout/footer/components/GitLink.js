import { ReactComponent as GithubIcon } from "assets/icons/github.svg";

const GitLink = () => (
  <a
    href="https://github.com/ado23"
    target="_blank"
    rel="noopener noreferrer"
    className="nav-link px-2 text-muted"
  >
    <GithubIcon />
  </a>
);

export default GitLink;
