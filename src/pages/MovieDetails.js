import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Cast from '../components/Cast.js';
import Reviews from '../components/Reviews.js';
import css from '../pages/MovieDetails.module.css';
import Loader from 'components/Loader.js';

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  // console.log(movieId);
  const [originalTitle, setOriginalTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState(0);
  const [posterPath, setPosterPath] = useState('');
  const [voteAverage, setVoteAverage] = useState(0);
  const [overView, setOverView] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    try {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=356db60679791a010148fefe0790ebd1`
      )
        .then(response => {
          return response.json();
        })
        .then(response => {
          console.log(response);
          // setDataMovie(response);
          setOriginalTitle(response.original_title);
          setReleaseDate(response.release_date);
          setReleaseDate(response.release_date);
          setPosterPath(response.poster_path);
          setVoteAverage(response.vote_average);
          setOverView(response.overview);
          setGenres([...getNormalizedGenres(response.genres)]);
          // console.log(originalTitle);
          // console.log('genres', response.genres);
          // console.log(releaseDate.getFullYear());
        });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  const getNormalizedGenres = array => {
    return array.map(item => item.name).join(' ');
  };

  console.log('location', location);
  

  return (
    // <>MovieDetails {movieId}</>;

    <div>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      {isLoading && <Loader />}
      <img
        className={css.img}
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        alt={`{originalTitle  }`}
      />
      <h1>{originalTitle}</h1>
      <p>({parseInt(releaseDate)})</p>
      <p>User score: {`${Math.round(voteAverage * 10)}`}%</p>
      <p>Overview</p>
      <p>({overView})</p>
      <p>Genres</p>
      <p>({genres})</p>
      <ul>
        <li>
          <Link to="cast">{<Cast />}</Link>
        </li>
        <li>
          <Link to="reviews ">{<Reviews />}</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
