import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  // const [actor, setActor ] = useState(null);
  const [error, setError] = useState(null);

  // console.log('movieId', movieId);

  useEffect(() => {
    async function fetchActor() {
        setIsLoading(true);
        try {
            await fetchActor(`
            https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=356db60679791a010148fefe0790ebd1`
            )
            .then(responseCast => {
                return responseCast.json();
            })
            .then (responseCast => { 
              console.log('responseCast', responseCast);
                // setActor(responseCast);
      
            })
        } catch (error ) {
          setError(error.message); 
          // console.log(error);
        }
        finally{
            setIsLoading(false)
        }
    }
    fetchActor();
  }, [movieId]);


  return (
    <div>Cast
      {error && {error}}
    {isLoading && <Loader />}
    </div>
    // <ul>
    //     {actor.map(actorName=> {
    //         return (
    //             <li>
    //                 {/* <img src="{}" */}
    //             </li>
    //         )
    //     })}
    // </ul>
    // <div>{movieId}</div>
  );
};

export default Cast;
