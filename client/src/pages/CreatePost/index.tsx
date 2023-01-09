import React, { useState } from "react";

//css
import { Container, Form, ImageInput, TextInput, TitleInput } from "./styles";

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");

  return (
    <Container>
      <h1>Criar Post</h1>
      <Form>
        <TitleInput>
          Titulo da Postagem:
          <TextInput
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </TitleInput>
        <ImageInput></ImageInput>
      </Form>
    </Container>
  );
};

export default CreatePost;
