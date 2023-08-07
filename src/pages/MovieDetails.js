import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from '../pages/MovieDetails.module.css';
import Loader from 'components/Loader.js';

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  // const backLinkLocationRef = useRef(location.state?.from ?? '/');
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
          // console.log(response);
          // setDataMovie(response);
          setOriginalTitle(response.original_title);
          setReleaseDate(response.release_date);
          setReleaseDate(response.release_date);
          setPosterPath(response.poster_path);
          setVoteAverage(response.vote_average);
          setOverView(response.overview);
          setGenres([...getNormalizedGenres(response.genres)]);
        });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  const getNormalizedGenres = array => {
    return array.map(item => item.name).join(' ');
  };

  // console.log('location', location);

  return (
    <div>
      {/* <Link to={backLinkLocationRef.current} className={css.btn}> */}
      <Link to={location.state?.from || '/'} className={css.btn}>
        Go back
      </Link>
      {isLoading && <Loader />}
      <img
        className={css.img}
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        alt={`{originalTitle  }`}
      />
      <h1>{originalTitle}</h1>
      <p>({parseInt(releaseDate)})</p>
      <p>User score: {`${Math.round(voteAverage * 10)}`}%</p>
      <p className={css.text__add}>Overview</p>
      <p>({overView})</p>
      <p className={css.text__add}>Genres</p>
      <p>({genres})</p>
      <h2 className={css.text__add}>Additinal information</h2>
      <ul>
        <li>
          <Link to="cast" className={css.text__second}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" className={css.text__second}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
