import Links from "./Links";

import styles from "./styles.module.css";

const Navbar = () => (
  <nav className={`container d-flex fixed-top bg-dark gap-4 ${styles.siteHeader} `}>
    <Links />
  </nav>
);

export default Navbar;
