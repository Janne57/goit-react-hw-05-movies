import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <h1>
        <NavLink to="/">The page is not found</NavLink>
      </h1>
    </main>
  );
};

export default NotFound;