import styled from "styled-components";
import { Link } from "react-router-dom";
import Airport from "../../assets/img/airport.jpeg";

export const Container = styled.div`
  height: 400px;
  background-image: url(${Airport});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% auto;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const PagTitle = styled.h1`
  text-align: center;
  text-decoration: none;
  font-weight: 400;
  /* font-style: italic; */
  font-size: 150px;
  color: #bdc7bb;
  text-shadow: 5px 4px 9px black;
  font-family: "Courgette", cursive;
`;

export const Home = styled(Link)`
  /* color: #00000087; */
  text-decoration: none;
  font-weight: 700;
  font-size: 30px;
  color: #ffffff;
  text-shadow: 3px 3px 3px #00000087;
`;

export const RightNav = styled.div``;

export const Nav = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  text-shadow: 3px 3px 3px #00000087;
`;

export const UpButton = styled.button`
  color: #ffffff;
  background-color: #0000006c;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  border: 1px solid white;
  position: fixed;
  bottom: 14px;
  right: 14px;
`;
