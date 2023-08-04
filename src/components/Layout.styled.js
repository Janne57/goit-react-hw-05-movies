import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1460px;
  margin: 0 auto;
  padding: 0 16px;
  outline: solid 3px red;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    gap: 60px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: blue;
  font-weight: 500;

  &.active {
    color: white;
    background-color: blue;
  }
`;
