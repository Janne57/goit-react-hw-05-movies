import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader.js';
import css from '../pages/Home.module.css';

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  // console.log('locationHome', location);

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
            setMovie([...response.results]);
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

  // console.log('location Home', location);
  return (
    <div>
      {error && { error }}
      <h1>Trending today</h1>
      <div>
        {isLoading && <Loader />}
        <ul>
          {movie.map(mov => {
            return (
              <li>
                <Link
                  key={mov.id}
                  to={`movies/${mov.id}`}
                  state={{ from: location }}
                  className={css.home__text}
                >
                  {mov.original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
