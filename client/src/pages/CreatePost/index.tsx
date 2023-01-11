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
  NameInput,
  TextInput,
  TitleInput,
} from "./styles";

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [day, setDay] = useState(12);
  const [month, setMonth] = useState("Jun");
  const [image, setImage] = useState<File>();

  const handleNewPost = async (e) => {
    e.preventDefault();
    // console.log(image);
    const imgData = new FormData();
    imgData.append("image", image);

    const objectNewPost = {
      nome: name,
      dia: day,
      mes: month,
      email: email,
      titulo: title,
      mensagem: message,
      avatar: imgData,
    };

    try {
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
      <h1>Criar Post</h1>
      <Form encType="multipart/form-data">
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
          Imagem:
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </ImageInput>
        <button onClick={handleNewPost}>SUBMETER ISSO</button>
        {/* <Button /> */}
      </Form>
    </Container>
  );
};

export default CreatePost;
