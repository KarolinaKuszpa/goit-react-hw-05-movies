import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from './Services/Api';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const fetchMovieCast = useCallback(async () => {
    try {
      const castData = await getMovieCast(movieId);
      setCast(castData);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovieCast();
  }, [fetchMovieCast]);

  return (
    <div>
      <h2 className={styles.title}>Cast</h2>
      {cast.map(person => (
        <div key={person.id} className={styles.person}>
          <h3 className={styles.name}>{person.name}</h3>
          <p className={styles.character}>{person.character}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
