import React, { useState, useEffect } from "react";

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

//
import blogService from "../../services/blogService";
import ProceedCard from "../../components/cards/modals/ProceedCard";

const CreatePost: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<File>();

  const handleNewPost = async (e: any) => {
    e.preventDefault();
    try {
      const objectNewPost = {
        date: new Date(),
        nome: name,
        email: email,
        titulo: title,
        mensagem: message,
        avatar: image,
      };
      const response = await blogService.createBlogPost(objectNewPost);

      // console.log(objectNewPost);
      setShowModal(true);
      setTitle("");
      setName("");
      setEmail("");
      setMessage("");
      setImage(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <ProceedCard
        {...{
          show: showModal,
          setShow: setShowModal,
        }}
      />
      <PagTitle>Compartilhe sua história</PagTitle>
      <Form encType="multipart/form-data" onSubmit={handleNewPost}>
        <TextInput
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder={"Titulo da Postagem:"}
        />
        <TextInput
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder={"Nome:"}
        />

        <EmailInput
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"Email:"}
          value={email}
        />

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
            required
            onChange={(e) =>
              setImage((e.target.files && e.target.files[0]) || undefined)
            }
          />
        </TitleInput>
        <Warning>*Escolha uma imagem em formato vertical</Warning>

        <Button type="submit">Criar Postagem</Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
