import { NavLink } from 'react-router-dom';

const Movies = () => {
  // const location = useLocation();
  // console.log('location', location);

  return (
    <main>
      <li>
        <NavLink to="/movies" >Movies</NavLink>
        {/* <NavLink to="/movies" state={{from: location}}>Movies</NavLink> */}
      </li>
    </main>
  );
};

export default Movies;