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
  border-bottom: 2px solid #ffffff;
  padding-top: 22px;
`;

export const HomeLink = styled(Link)`
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  font-size: 23px;
  text-decoration: none;
  text-shadow: 1px 1px 4px black;
  color: #ffffff;
`;

export const RightNav = styled.div``;

export const Nav = styled(Link)`
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  font-size: 23px;
  text-decoration: none;
  text-shadow: 1px 1px 4px black;
  color: #ffffff;
`;
