import React from "react";

import {
  HomeLink,
  LimiterLine,
  Nav,
  NavContainer,
  NavContent,
  RightNav,
} from "./styles";

const NavLinks: React.FC = () => {
  return (
    <>
      <NavContainer>
        <NavContent>
          <HomeLink to="/">Home</HomeLink>
          <RightNav>
            <Nav to="/create-post">Criar Postagem</Nav>
          </RightNav>
        </NavContent>
        <LimiterLine />
      </NavContainer>
    </>
  );
};

export default NavLinks;
