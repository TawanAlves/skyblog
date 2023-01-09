import React, { useState } from "react";

//css
import {
  Button,
  Container,
  EmailInput,
  Form,
  Image,
  ImageInput,
  MessageInput,
  NameInput,
  TextInput,
  TitleInput,
} from "./styles";

//assets
import Foto from "../../assets/img/airplane.jpg";

const EditPost: React.FC = () => {
  const [title, setTitle] = useState("Aiplane");
  const [name, setName] = useState("Tawan");
  const [email, setEmail] = useState("teste@gmail.com");
  const [message, setMessage] = useState("Olha que foto Legal");
  return (
    <Container>
      <h1>Editar Postagem</h1>
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
        <TitleInput>
          Escreva sua Mensagem
          <MessageInput
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </TitleInput>

        <ImageInput>
          {/* //! Não editar imagem */}
          Imagem:
          <Image src={Foto} alt={"foto"} />
          <input type="file" name="arquivos" />
        </ImageInput>
        <Button />
      </Form>
    </Container>
  );
};

export default EditPost;
