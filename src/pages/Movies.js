import { Link, NavLink, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader';

const Movies = () => {
  // const location = useLocation();
  // console.log('location', location);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchPharams, setSearchPharams] = useSearchParams();
  // const movieId = searchPharams.get('movieId' || '');
  
  const [movieId, setMovieId] = useState(
    () => searchPharams.get('movieId') || '' );
  console.log('movieId', movieId);

  useEffect(() => {
    async function fetchMovie() {
      setIsLoading(true);
      try {
        await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=356db60679791a010148fefe0790ebd1`
        )
          .then(response => {
            return response.json();
          })
          .then(response => {
            setMovie([...getNormalized(response.results)]);
            // console.log('запрос на movie идет', movie);
            // console.log('response.results', response.results);
            // console.log('response', response);
          });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, []);

  const getNormalized = array => {
    return array.map(({ original_title, id }) => ({ original_title, id }));
  };
// const movieNew=[...movie];

  const visibleMovie = movie.filter(mov => mov.original_title.includes(movieId.toUpperCase()));
  // console.log('movieNew', movieNew);
  // console.log('Movie.1', movie[1].original_title);
  // console.log('Movie.original_title', movie.original_title);
  // console.log('visibleMovie', visibleMovie);

  return (
    <main>
      <input
        type="text"
        value={movieId}
        // onChange={evt => setSearchPharams({ movieId: evt.target.value })}
        onChange={evt => setSearchPharams( setMovieId(evt.target.value) )}
      />
      <button type="submit" onClick={() => setSearchPharams()}>
        Search
      </button>
      {error && { error }}
      {isLoading && <Loader/>}
      <div>
        <NavLink to="/movies"></NavLink>
        {/* <NavLink to="/movies" state={{from: location}}>Movies</NavLink> */}
      </div>
      <ul>
        {/* {movie.map(mov => {
          return (
            <li key={mov.id}>
              <Link to={`movies/${mov.id}`}>{mov.original_title}</Link>
            </li>
          );
        })} */}
          {visibleMovie.map((({ original_title, id }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>{original_title}</Link>
            </li>
          );
        }))}
      </ul>
    </main>
  );
};

export default Movies;
