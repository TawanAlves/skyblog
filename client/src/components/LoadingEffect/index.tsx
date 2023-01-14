import React from "react";

//css
import { Bubbles, Container, Content } from "./styles";

const LoadingEffect: React.FC = () => {
  return (
    <Container>
      <Content>
        <Bubbles type={"bubbles"} color={"white"} height={100} width={200} />
      </Content>
    </Container>
  );
};

export default LoadingEffect;
