import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  min-width: 100vw;
  /* max-width: 100vw; */

  height: 40px;
  position: fixed;
  top: 0;
  background-color: transparent;
  backdrop-filter: blur(10px);
  z-index: 1;
  @media (min-width: 576px) {
    width: 100%;
    height: 54px;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const LimiterLine = styled.div`
  width: 100%;
  border-bottom: 2px solid #ffffff;
  padding-top: 9px;
  @media (min-width: 576px) {
    padding-top: 17px;
  }
  /* @media (min-width: 1200px) {
    padding-top: 22px;
  } */
`;

export const HomeLink = styled(Link)`
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  font-size: 18px;
  padding: 3px;
  text-decoration: none;
  text-shadow: 1px 1px 4px black;
  color: #ffffff;
  @media (min-width: 576px) {
    font-size: 23px;
  }
`;

export const RightNav = styled.div``;

export const Nav = styled(Link)`
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  font-size: 18px;
  padding: 3px;
  text-decoration: none;
  text-shadow: 1px 1px 4px black;
  color: #ffffff;
  @media (min-width: 576px) {
    font-size: 23px;
  }
`;
