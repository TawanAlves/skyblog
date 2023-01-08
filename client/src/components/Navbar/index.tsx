import React from "react";

import { Container, Home, Nav, RightNav } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Home to="/">SkyBlog</Home>
      <RightNav>
        <Nav to="/createpost">Criar Postagem</Nav>
      </RightNav>
    </Container>
  );
};

export default Navbar;
