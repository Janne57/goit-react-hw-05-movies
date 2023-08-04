import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import css from '../components/Cast.module.css'

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // console.log('movieId', movieId);

  useEffect(() => {
    async function fetchActor() {
      setIsLoading(true);
      try {
        // await fetchActor(`
        // https://api.themoviedb.org/3/trending/movie/day?api_key=356db60679791a010148fefe0790ebd1`
        // // https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=356db60679791a010148fefe0790ebd1`
        // )

        // .then(responseCast => {console.log('responseCastjson', responseCast);
        //     return responseCast.json();
        // })
        // .then (responseCast => {
        //   console.log('responseCast', responseCast);
        //     // setActor(responseCast);

        // })

        await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=356db60679791a010148fefe0790ebd1`
        )
          .then(response => {
            return response.json();
          })
          .then(response => {
            // setData(response);

            setData([...getNormalized(response.cast)]);
            // setData(prevState => [
            //   ...prevState,
            //   ...getNormalized(response.cast),
            // ]);

            // console.log('запрос на Cast идет', data);
            // console.log('response.cast', response.cast);
            // console.log('response', response);
          });
      } catch (error) {
        setError(error.message);
        // console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchActor();
  }, [movieId]);

  const getNormalized = array => {
    return array.map(({ name, character, profile_path, id }) => ({
      name,
      character,
      profile_path,
      id,
    }));
  };

  return (
    <div>
      {error && { error }}
      {isLoading && <Loader />}
      <ul>
        {data.map(({ name, character, profile_path, id }) => {
          return (
            <li key={id} className={css.img__item}>
              {profile_path && (
                 <img
                 className={css.img}
                 src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                 alt={name}
               />
              )}
              
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
    </div>
    // <div>{movieId}</div>
  );
};

export default Cast;
