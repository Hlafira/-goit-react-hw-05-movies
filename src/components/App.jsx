import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from 'components/Layout/Layout';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/moviesPage'));
const FilmDetailsPage = lazy(() =>
  import('../pages/FilmDetailsPage/FilmDetailsPage')
);

const CastPage = lazy(() => import('pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));

export const App = () => {
  return (
    <Suspense fallback={<p>"..loading "</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:id" element={<FilmDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
