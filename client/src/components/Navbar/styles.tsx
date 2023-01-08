import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Home = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5em;
  color: black;
`;

export const RightNav = styled.div``;

export const Nav = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 600;
`;
