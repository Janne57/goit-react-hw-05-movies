// import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader.js';

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

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
            console.log('запрос на HOME идет');
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

  // useEffect(() => {
  //   try {
  //     fetch(
  //       // `https://api.themoviedb.org/3/movie/157336?api_key=356db60679791a010148fefe0790ebd1`
  //       `https://api.themoviedb.org/3/trending/movie/day?api_key=356db60679791a010148fefe0790ebd1`
  //       // `https://api.themoviedb.org/3/search/movie?query=Trending+today&api_key=356db60679791a010148fefe0790ebd1`

  //       // https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=
  //     )
  //       .then(response => {
  //         return response.json();
  //       })
  //       .then(response => {
  //         console.log(response.results);
  //         // .then(response => console.log(response.results[original_title]));

  //         setMovie([...response.results]);
  //         console.log(movie);
  //       });
  //   } catch (error) {}
  // }, []);


  console.log('location Home', location);
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
                <Link key={mov.id} to={`movies/${mov.id}`} state={{from: location}}>
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




// useEffect(() => {
//     if (query === '') {
//       return;
//     }

//     async function foo() {
//       try {
//         setLoading(true);
//          await fetch(
//           `https://pixabay.com/api/?q=${query}&key=36926934-069e003b546c638e37e68c3ce&image_type=photo&page=${page}&orientation=horizontal&per_page=12`
//         )
//           .then(response => {
//             return response.json();
//           })
//           .then(response => {
//             if (!response.hits.length) {
//               Notiflix.Notify.failure('There are not any images....');
//               setIsBtnLoadVisible(false);
//               return;
//             }

//             setImages(prevImages => [
//               ...prevImages,
//               ...getNormalizedImages(response.hits),
//             ]);

//             setIsBtnLoadVisible(page < Math.ceil(response.total / 12));

//           });
//       } catch (error) {
//       } finally {
//         setLoading(false);
//       }
//     }

//     foo();
//   }, [query, page]);
