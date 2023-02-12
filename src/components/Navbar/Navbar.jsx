import { NavLink } from 'react-router-dom';

import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        <li key="1">
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
        </li>
        <li key="2">
          <NavLink className={styles.link} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
