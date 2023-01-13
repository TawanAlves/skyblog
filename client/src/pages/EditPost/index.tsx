import React, { useState, useEffect } from "react";
import blogService from "../../services/blogService";
import { useParams, useNavigate } from "react-router-dom";

//css
import {
  Button,
  Container,
  EmailInput,
  Form,
  Image,
  ImageInput,
  MessageInput,
  PagTitle,
  TextInput,
  TitleInput,
} from "./styles";

//assets
import Foto from "../../assets/img/airplane.jpg";

const EditPost: React.FC = () => {
  const [blogPost, setBlogPost] = useState<any>([]);

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File>();
  const navigate = useNavigate();

  let { postId } = useParams();

  useEffect(() => {
    const handleApi = async () => {
      try {
        const response = await blogService.getPostId(`${postId}`);
        const data = response;
        setBlogPost(data);
      } catch (error) {
        console.log(error);
      }
      console.log(blogPost);
    };
    handleApi();
  }, []);

  const handleUpdatePost = async (e: any) => {
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
      const response = await blogService.updateBlogPost(
        `${postId}`,
        objectNewPost
      );
      // console.log(response.data);
      console.log(objectNewPost);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  return (
    <Container>
      <PagTitle>Editar Postagem:</PagTitle>
      <Form encType="multipart/form-data" onSubmit={handleUpdatePost}>
        {/* Nome: */}
        <TextInput
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder={blogPost.nome}
        />

        {/* Email: */}
        <EmailInput
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder={blogPost.email}
        />

        {/* Titulo da Postagem: */}
        <TextInput
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder={blogPost.titulo}
        />

        {/* Escreva sua Mensagem */}
        <MessageInput
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder={blogPost.mensagem}
        />
        <TitleInput>
          {/* //! Não editar imagem */}
          Imagem:
          <Image src={blogPost.avatar} alt={"foto"} />
          <ImageInput
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </TitleInput>
        <Button type="submit">Editar Postagem</Button>
      </Form>
    </Container>
  );
};

export default EditPost;
