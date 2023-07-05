import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import MovieDetails from '../../pages/MovieDetails';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const Movies = React.lazy(() => import('./pages/Movies'));
const MovieDetails = React.lazy(() => import('./pages/MovieDetails'));
const Cast = React.lazy(() => import('./components/Cast'));
const Reviews = React.lazy(() => import('./components/Reviews'));
const App = () => {
  return (
    <Router>
      <div>
        {/* ... */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>{/* ... */}</Routes>
        </Suspense>
      </div>
    </Router>
  );
};

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
    children: [
      {
        path: 'cast',
        element: <Cast />,
      },
      {
        path: 'reviews',
        element: <Reviews />,
      },
    ],
  },
];

export default routes;
