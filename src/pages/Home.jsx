import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <header className={styles.Home}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};

export default Home;
