import { Link, NavLink, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import Loader from 'components/Loader';
import css from './/Movies.module.css';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchPharams, setSearchPharams] = useSearchParams();
  // const movieId = searchPharams.get('movieId' || '');

  const [movieId, setMovieId] = useState(
    () => searchPharams.get('movieId') || ''
  );
  // console.log('movieId', movieId);


  const getNormalized = array => {
    return array.map(({ original_title, id }) => ({ original_title, id }));
  };
 

  const handleSubmit = evt => {
    evt.preventDefault();
    setMovieId(evt.currentTarget.value);

    console.log('set movieId', movieId);

    if (!movieId) {
      alert('Enter, please, movie....');
      return;
    }

    async function fetchMovie() {
      setIsLoading(true);
      try {
        await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${movieId}&api_key=356db60679791a010148fefe0790ebd1`
        )
          .then(response => {
            return response.json();
          })
          .then(response => {
            setMovie([...getNormalized(response.results)]);
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
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className={css.form__basic}>
        <input
          type="text"
          value={movieId}
          // onChange={evt => setSearchPharams({ movieId: evt.target.value })}
          onChange={evt => setSearchPharams(setMovieId(evt.target.value))}
          className={css.input__movie}
        />
        <button
          type="submit"
          onClick={() => setSearchPharams({ query: `${movieId}` })}
          className={css.btn}
        >
          Search
        </button>
      </form>
      {error && { error }}
      {isLoading && <Loader />}
      <div>
        <NavLink to="/movies"></NavLink>
      </div>
      <ul>
        {movie.map(({ original_title, id }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} className={css.home__text}>
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Movies;
