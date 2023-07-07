import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from '../components/Services/Api';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/search/movie`, {
        params: {
          api_key: API_KEY,
          query: searchTerm,
        },
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMovieClick = async movieId => {
    navigate(`/movies/${movieId}?api_key=${API_KEY}`);
  };

  return (
    <div>
      <h1>Movies</h1>
      <Link to="/">Go back</Link>

      <div>
        <input type="text" value={searchTerm} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
      </div>

      {searchResults.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          {searchResults.map(movie => (
            <div key={movie.id}>
              <h3>
                <Link
                  to={`/movies/${movie.id}`}
                  onClick={() => handleMovieClick(movie.id)}
                >
                  {movie.title}
                </Link>
              </h3>
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No search results</p>
      )}
    </div>
  );
};

export default Movies;
