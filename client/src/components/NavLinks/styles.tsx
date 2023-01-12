import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  width: 100%;
  height: 54px;
  position: fixed;
  top: 0;
  background-color: transparent;
  backdrop-filter: blur(10px);
  z-index: 1;
`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const LimiterLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #ffffff;
  padding-top: 19px;
`;

export const Home = styled(Link)`
  /* color: #00000087; */
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 30px;
  text-decoration: none;

  color: #ffffff;
  text-shadow: 2px 2px 7px #00000087;
`;

export const RightNav = styled.div``;

export const Nav = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #00000087;
`;
