import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
width: 1760px;
  margin: 0 auto;
  padding: 0 16px;
  
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 40px;
  margin-bottom: 16px;
  border-bottom: 3px solid grey;

  > nav {
    display: flex;
    gap: 60px;
    
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: #cc99b2;
  font-weight: 500;
  
  


  &.active {
    color: white;
    background-color: #ca99b9;
  }
`;


// export const Container = styled.div`
//   max-width: 1460px;
//   margin: 0 auto;
//   padding: 0 16px;
//   outline: solid 3px red;
// `;