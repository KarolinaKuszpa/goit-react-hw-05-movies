import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../components/Services/Api';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const trendingMovies = await getTrendingMovies();
      setMovies(trendingMovies);
    } catch (error) {
      console.log(error);
      setMovies([]);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending Movies</h1>
      {movies.map(movie => (
        <div key={movie.id} className={styles.movie}>
          <h2 className={styles.movieTitle}>
            <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
              {movie.title}
            </Link>
          </h2>
          {movie.overview && (
            <p className={styles.overview}>{movie.overview}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
