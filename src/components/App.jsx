// import HomePage from 'pages/HomePage';
// import MoviesPage from 'pages/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={'LOADING PAGE...'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route
            path="/movies/:movieId/cast"
            element={<MovieDetailsPage cast />}
          />
          <Route
            path="/movies/:movieId/reviews"
            element={<MovieDetailsPage reviews />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};
