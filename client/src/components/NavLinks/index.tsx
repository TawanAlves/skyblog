import React from "react";

import {
  Home,
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
          <Home to="/">Home</Home>
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
