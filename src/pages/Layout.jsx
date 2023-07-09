import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/movies" className={styles.navLink}>
                Movies
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};

export default Layout;
