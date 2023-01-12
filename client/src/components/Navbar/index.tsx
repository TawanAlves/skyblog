import React from "react";
import NavLinks from "../NavLinks";

//css
import { Container, GlassContainer, PagTitle, UpButton } from "./styles";

//assets

const Navbar: React.FC = () => {
  return (
    <Container>
      <NavLinks />
      <GlassContainer>
        <PagTitle>SKY BLOG</PagTitle>
      </GlassContainer>
      <UpButton>Top</UpButton>
    </Container>
  );
};

export default Navbar;
