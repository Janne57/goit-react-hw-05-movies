import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './/Layout.js';
import React from 'react';
const Home = lazy(() => import('..//pages/Home.js'));
const Movies = lazy(() => import('../pages/Movies.js'));
const MovieDetails = lazy(() => import('../pages/MovieDetails.js'));
const NotFound = lazy(() => import('../pages/NotFound.js'));
const Cast = lazy(() => import('..//components/Cast.js'));
const Reviews = lazy(() => import ("../components/Reviews.js"))

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
