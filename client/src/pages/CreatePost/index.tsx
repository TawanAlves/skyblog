import React, { useState } from "react";

//css
import {
  Button,
  Container,
  EmailInput,
  Form,
  ImageInput,
  NameInput,
  TextInput,
  TitleInput,
} from "./styles";

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Container>
      <h1>Criar Post</h1>
      <Form>
        <TitleInput>
          Nome:
          <NameInput
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </TitleInput>
        <TitleInput>
          Email:
          <EmailInput
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </TitleInput>
        <TitleInput>
          Titulo da Postagem:
          <TextInput
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </TitleInput>
        <ImageInput>
          Imagem:
          <input type="file" name="arquivos" />
        </ImageInput>
        <Button />
      </Form>
    </Container>
  );
};

export default CreatePost;
