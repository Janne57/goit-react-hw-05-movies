import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from "path/to/pages/Home";
// import Movies from "path/to/pages/Movies";
// import NotFound from "path/to/pages/NotFound";
import Layout from './/Layout.js';
// import Home from '..//pages/Home.js';
// import Movies from '..//pages/Movies.js';
// import MovieDetails from '..//pages/MovieDetails.js';
// import Cast from '..//components/Cast.js';
// import NotFound from '..//pages/NotFound.js';
import React from 'react';

const Home = lazy(() => import('..//pages/Home.js'));
const Movies = lazy(() => import('../pages/Movies.js'));
const MovieDetails = lazy(() => import('../pages/MovieDetails.js'));
const NotFound = lazy(() => import('../pages/NotFound.js'));
const Cast = lazy(() => import('..//components/Cast.js'));

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </div> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
          {/* <Route path="/:movieId" element={<MovieDetails />} /> */}
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/" element={<div>Home</div>} />
          <Route path="/movies" element={<div>Movies</div>} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
