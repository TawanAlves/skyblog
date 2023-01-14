import React from "react";
import NavLinks from "../NavLinks";

//css
import { Container, GlassContainer, PagTitle } from "./styles";

//assets

const Navbar: React.FC = () => {
  return (
    <Container>
      <NavLinks />
      <GlassContainer>
        <PagTitle>SKY BLOG</PagTitle>
      </GlassContainer>
    </Container>
  );
};

export default Navbar;
