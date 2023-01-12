import React from "react";
import AllPosts from "../AllPosts";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <AllPosts />
    </Container>
  );
};

export default Home;
