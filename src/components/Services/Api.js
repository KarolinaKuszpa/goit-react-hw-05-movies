import axios from 'axios';

export const API_KEY = 'dc163273b152eeeb36e55a0d84f6bc0d';
export const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day`);
    return response.data.results;
  } catch (error) {
    console.error('Błąd podczas pobierania najpopularniejszych filmów:', error);
    throw error;
  }
};

//pobranie informacji o filmie na podstawie jego ID
const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Błąd podczas pobierania informacji o filmie:', error);
    throw error;
  }
};

export { getTrendingMovies, getMovieDetails };
