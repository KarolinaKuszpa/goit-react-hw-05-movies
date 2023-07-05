import { useParams } from 'react-router-dom';
import Cast from '../../src/components/Cast';
import Reviews from '../../src/components/Reviews';
import { Link, Routes, Route } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  return (
    <div>
      {/* ... */}
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      <Routes>
        {/* ... */}
        <Route path="cast" element={<Cast movieId={movieId} />} />
        <Route path="reviews" element={<Reviews movieId={movieId} />} />
      </Routes>
    </div>
  );
};
export default MovieDetails;
