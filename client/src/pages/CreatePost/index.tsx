import React, { useState, useEffect } from "react";
import blogService from "../../services/blogService";
import { useNavigate } from "react-router-dom";

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
  Warning,
} from "./styles";
import ProceedCard from "../../components/cards/modals/ProceedCard";

const CreatePost: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File>();

  const navigate = useNavigate();

  const handleNewPost = async (e: any) => {
    e.preventDefault();
    try {
      // console.log(image);
      // const imgData = new FormData();
      // imgData.append("image", image);

      const objectNewPost = {
        date: new Date(),
        nome: name,
        email: email,
        titulo: title,
        mensagem: message,
        avatar: image,
      };
      const response = await blogService.createBlogPost(objectNewPost);
      // console.log(response.data);
      console.log(objectNewPost);
    } catch (error) {
      console.log(error);
    }
    // navigate("/");
    setShowModal(true);
  };

  return (
    <Container>
      <ProceedCard {...{ show: showModal, setShow: setShowModal }} />
      {/* <button onClick={createBlogPost}>criar</button> */}
      <PagTitle>Compartilhe sua história</PagTitle>
      <Form encType="multipart/form-data" onSubmit={handleNewPost}>
        {/* Nome: */}
        <TextInput
          required
          onChange={(e) => setName(e.target.value)}
          // value={name}
          placeholder={"Nome:"}
        />

        {/* Email: */}
        <EmailInput
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"Email:"}
          // value={email}
        />

        {/* Titulo da Postagem: */}
        <TextInput
          required
          onChange={(e) => setTitle(e.target.value)}
          // value={title}
          placeholder={"Titulo da Postagem:"}
        />

        {/* Escreva sua Mensagem */}
        <MessageInput
          required
          onChange={(e) => setMessage(e.target.value)}
          // value={message}
          placeholder={"Escreva sua Mensagem:"}
        />

        <TitleInput>
          Imagem:
          <ImageInput
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </TitleInput>
        <Warning>*Escolha uma imagem em formato vertical</Warning>

        <Button type="submit">Criar Postagem</Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
