import React from "react";

//css
import {
  Container,
  Home,
  Nav,
  NavContainer,
  PagTitle,
  RightNav,
  UpButton,
} from "./styles";

//assets
import Airport from "../../assets/img/airport.jpeg";

const Navbar: React.FC = () => {
  return (
    <Container>
      <NavContainer>
        <Home to="/">Home</Home>

        <RightNav>
          <Nav to="/create-post">Criar Postagem</Nav>
        </RightNav>
        <UpButton>Top</UpButton>
      </NavContainer>

      <PagTitle>SKY BLOG</PagTitle>
    </Container>
  );
};

export default Navbar;
