const API_KEY = 'dc163273b152eeeb36e55a0d84f6bc0d';

export const getMovieReviews = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Błąd podczas pobierania recenzji:', error);
    return null;
  }
};

export const getTrendingMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Błąd podczas pobierania najpopularniejszych filmów:', error);
    return [];
  }
};

export const searchMovies = async query => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Błąd podczas wyszukiwania filmów:', error);
    return [];
  }
};

export const getMovieDetails = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Błąd podczas pobierania szczegółów filmu:', error);
    return null;
  }
};

export const getMovieCredits = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Błąd podczas pobierania informacji o obsadzie:', error);
    return null;
  }
};
