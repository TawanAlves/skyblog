import React from "react";
import { NavLink } from "react-router-dom";

import { Container, Home, Nav, RightNav } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <NavLink to="/">
        <Home>SkyBlog</Home>
      </NavLink>
      <RightNav>
        <NavLink to="/createpost">
          <Nav>Criar Postagem</Nav>
        </NavLink>
      </RightNav>
    </Container>
  );
};

export default Navbar;
