import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../components/Services/Api';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async e => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      const movies = await searchMovies(searchTerm);
      navigate(`/movies?query=${searchTerm}`, { state: { movies } });
    }
  };

  return (
    <div>
      <h1>Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Movies;
