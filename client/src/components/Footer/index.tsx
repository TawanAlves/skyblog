import React from "react";

//css
import { Container, Title } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Title href={"https://github.com/TawanAlves"} target="_blank">
        Created By: TawanAlves
      </Title>
    </Container>
  );
};

export default Footer;
