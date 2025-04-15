import styles from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navLink} to="/">About Me</Link>
      <Link className={styles.navLink} to="/blog">Blog</Link>
      <Link className={styles.navLink} to="/coding">Coding</Link>
    </nav>
  );
}
