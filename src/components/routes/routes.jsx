import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import MovieDetails from '../../pages/MovieDetails';
import Cast from '../Cast';
import Reviews from '../Reviews';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
  {
    path: '/movies/:movieId',
    element: <MovieDetails />,
  },
  {
    path: '/movies/:movieId/cast',
    element: <Cast />,
  },
  {
    path: '/movies/:movieId/reviews',
    element: <Reviews />,
  },
];

export default routes;
