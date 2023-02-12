import Links from "./Links";

import styles from "./styles.module.css";

const Navbar = ({ helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "layout/navbar/index");

  return (
    <nav className={`container d-flex fixed-top bg-dark gap-4 ${styles.siteHeader} `}>
      <Links helloFromMessage={helloFromMessage} />
    </nav>
  );
};

export default Navbar;
