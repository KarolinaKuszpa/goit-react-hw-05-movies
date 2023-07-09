import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from './Services/Api';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const fetchMovieReviews = useCallback(async () => {
    try {
      const reviewsData = await getMovieReviews(movieId);
      setReviews(reviewsData);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovieReviews();
  }, [fetchMovieReviews]);

  return (
    <div>
      <h1 className={styles.title}>Reviews</h1>
      {reviews.map(review => (
        <div key={review.id} className={styles.review}>
          <h3 className={styles.author}>{review.author}</h3>
          <p className={styles.content}>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
