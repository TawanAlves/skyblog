import React, { useState, useEffect } from "react";
import blogService from "../../services/blogService";
import { useParams } from "react-router-dom";

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
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [image, setImage] = useState<File>();

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

  // let dia;
  // let mes;

  // const getDate = async () => {
  //   const date = new Date();
  //   const today = date.toString();
  //   dia = String(date.getDate()).padStart(2, "0");
  //   const resultadoEspaco = today.split(" ", 3).reverse();
  //   mes = resultadoEspaco[1];
  //   console.log(dia, mes);
  //   setDay(dia);
  //   setMonth(mes);
  // };

  // const handleUpdatePost = async (e) => {
  //   e.preventDefault();
  //   getDate();

  //   // console.log(image);
  //   const imgData = new FormData();
  //   imgData.append("image", image);

  //   const objectNewPost = {
  //     nome: name,
  //     dia: day,
  //     mes: month,
  //     email: email,
  //     titulo: title,
  //     mensagem: message,
  //     avatar: imgData,
  //   };

  //   try {
  //     // const response = await blogService.updateBlogPost(objectNewPost);
  //     // console.log(response.data);
  //     console.log(objectNewPost);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      <PagTitle>Editar Postagem:</PagTitle>
      <Form encType="multipart/form-data">
        {/* Nome: */}
        <TextInput
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder={blogPost.nome}
        />

        {/* Email: */}
        <EmailInput
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder={blogPost.email}
        />

        {/* Titulo da Postagem: */}
        <TextInput
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder={blogPost.titulo}
        />

        {/* Escreva sua Mensagem */}
        <MessageInput
          required
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder={blogPost.mensagem}
        />
        <TitleInput>
          {/* //! Não editar imagem */}
          Imagem:
          <Image src={Foto} alt={"foto"} />
          <ImageInput
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </TitleInput>
        <Button>Editar Postagem</Button>
      </Form>
    </Container>
  );
};

export default EditPost;
