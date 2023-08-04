import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from './Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      setIsLoading(true);
      try {
        await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=356db60679791a010148fefe0790ebd1`
        )
          .then(response => {
            return response.json();
          })
          .then(response => {
            // setData(response);

            setData([...getNormalized(response.results)]);
            // setData(prevState => [
            //   ...prevState,
            //   ...getNormalized(response.cast),
            // ]);

            // console.log('запрос на Reviews идет', data);
            // console.log('response.results', response.results);
            // console.log('response', response);
          });
      } catch (error) {
        setError(error.message);
        // console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  const getNormalized = array => {
    return array.map(({ author, content, id }) => ({
      author,
      content,
      id,
    }));
  };

  return (
    <div>
      Reviews
      {error && { error }}
      {isLoading && <Loader />}
      <ul>
        {data.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
