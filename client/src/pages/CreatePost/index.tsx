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
  const [newPost, setNewPost] = useState<any>();

  const handleNewPost = async (e) => {
    e.preventDefault();

    const objectNewPost = {
      nome: name,
      dia: day,
      mes: month,
      email: email,
      titulo: title,
      mensagem: message,
      avatar: "airplane.jpg",
    };
    try {
      const response = await blogService.createBlogPost(
        objectNewPost
        //   {
        //   nome: "Maria A",
        //   dia: 12,
        //   mes: "AGO",
        //   email: "maria@email.com",
        //   titulo: "Titulo da postagem 3 ",
        //   mensagem:
        //     "Viajar é preciso 3.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora esse natus quibusdam neque illum? Cumque necessitatibus facilis eum. Facere amet, animi aut sequi nostrum atque? Impedit laudantium ab ipsum velit.",
        //   avatar: "airplane.jpg",
        // }
      );
      console.log(response.data);
      // setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleNewPost = (e) => {
  //   e.preventDefault();
  //   const novoPost = newPost;
  //   const createBlogPost = async () => {
  //     try {
  //       const response = await blogService.createBlogPost(
  //         novoPost
  //         //   {
  //         //   nome: "Maria A",
  //         //   dia: 12,
  //         //   mes: "AGO",
  //         //   email: "maria@email.com",
  //         //   titulo: "Titulo da postagem 3 ",
  //         //   mensagem:
  //         //     "Viajar é preciso 3.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora esse natus quibusdam neque illum? Cumque necessitatibus facilis eum. Facere amet, animi aut sequi nostrum atque? Impedit laudantium ab ipsum velit.",
  //         //   avatar: "airplane.jpg",
  //         // }
  //       );
  //       console.log(response.data);
  //       // setStudents(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   const objectNewPost = {
  //     nome: name,
  //     dia: day,
  //     mes: month,
  //     email: email,
  //     titulo: title,
  //     mensagem: message,
  //     avatar: "airplane.jpg",
  //   };

  //   createBlogPost();
  // };

  // const createBlogPost = async () => {
  //   try {
  //     const response = await blogService.createBlogPost(
  //       novoPost
  //       //   {
  //       //   nome: "Maria A",
  //       //   dia: 12,
  //       //   mes: "AGO",
  //       //   email: "maria@email.com",
  //       //   titulo: "Titulo da postagem 3 ",
  //       //   mensagem:
  //       //     "Viajar é preciso 3.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora esse natus quibusdam neque illum? Cumque necessitatibus facilis eum. Facere amet, animi aut sequi nostrum atque? Impedit laudantium ab ipsum velit.",
  //       //   avatar: "airplane.jpg",
  //       // }
  //     );
  //     console.log(response.data);
  //     // setStudents(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      {/* <button onClick={createBlogPost}>criar</button> */}
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
          <input type="file" name="arquivos" />
        </ImageInput>
        <button onClick={handleNewPost}>SUBMETER ISSO</button>
        {/* <Button /> */}
      </Form>
    </Container>
  );
};

export default CreatePost;
