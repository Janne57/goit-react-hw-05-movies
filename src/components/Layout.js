import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Container, Header, Link} from "./Layout.styled"

const Layout = () => {
  return (
    // <div>
    <Container>
      <Header>
        <nav>
            {/* <NavLink to="/">Home</NavLink>
          
            <NavLink to="/movies">Movies</NavLink> */}
            <Link to="/">Home</Link>
          
          <Link to="/movies">Movies</Link>
        
          </nav>
        {/* <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul> */}
      </Header>
      <main>
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* </div> */}
    </Container>
  );
};

export default Layout;
