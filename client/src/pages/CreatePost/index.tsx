import React, { useState, useEffect } from "react";
import blogService from "../../services/blogService";

//css
import {
  Button,
  Container,
  EmailInput,
  Form,
  ImageInput,
  MessageInput,
  PagTitle,
  TextInput,
  TitleInput,
} from "./styles";

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [image, setImage] = useState<File>();

  const handleNewPost = async (e) => {
    e.preventDefault();
    try {
      // console.log(image);
      const imgData = new FormData();
      imgData.append("image", image);

      const objectNewPost = {
        nome: name,
        date: new Date(),
        email: email,
        titulo: title,
        mensagem: message,
        avatar: imgData,
      };
      const response = await blogService.createBlogPost(objectNewPost);
      // console.log(response.data);
      console.log(objectNewPost);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {/* <button onClick={createBlogPost}>criar</button> */}
      <PagTitle>Compartilhe sua história</PagTitle>
      <Form encType="multipart/form-data" onSubmit={handleNewPost}>
        {/* Nome: */}
        <TextInput
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder={"Nome:"}
        />

        {/* Email: */}
        <EmailInput
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"Email:"}
          value={email}
        />

        {/* Titulo da Postagem: */}
        <TextInput
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder={"Titulo da Postagem:"}
        />

        {/* Escreva sua Mensagem */}
        <MessageInput
          required
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder={"Escreva sua Mensagem:"}
        />

        <TitleInput>
          Imagem:
          <ImageInput
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </TitleInput>

        <Button type="submit">Criar Postagem</Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
