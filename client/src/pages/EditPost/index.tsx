import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

//css
import { Container, Form, Image, ImageInput, TitleInput } from "./styles";
import {
  Button,
  EmailInput,
  MessageInput,
  PagTitle,
  TextInput,
} from "../CreatePost/styles";

//
import blogService from "../../services/blogService";
import EndEditCard from "../../components/cards/modals/EndEditCard ";
import LoadingEffect from "../../components/LoadingEffect";

const EditPost: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [blogPost, setBlogPost] = useState<any>([]);
  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<File>();
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  let { postId } = useParams();

  useEffect(() => {
    const handleApi = async () => {
      try {
        setLoading(true);
        const response = await blogService.getPostId(`${postId}`);
        const data = response;
        setBlogPost(data);
        setLoading(false);
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
      setLoading(true);
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
      setShowModal(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {loading ? (
        <LoadingEffect />
      ) : blogPost.length === 0 ? (
        <h1>Nenhuma postagem encontrada</h1>
      ) : (
        <>
          <EndEditCard {...{ show: showModal, setShow: setShowModal }} />
          <PagTitle>Editar Postagem:</PagTitle>
          <Form encType="multipart/form-data" onSubmit={handleUpdatePost}>
            <TextInput
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder={blogPost.nome}
            />

            <EmailInput
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder={blogPost.email}
            />

            <TextInput
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder={blogPost.titulo}
            />

            <MessageInput
              onChange={(e: any) => setMessage(e.target.value)}
              value={message}
              placeholder={blogPost.mensagem}
            />
            <TitleInput>
              Imagem:
              <Image src={blogPost.avatar} alt={"foto"} />
              <ImageInput
                name="image"
                onChange={(e) =>
                  setImage((e.target.files && e.target.files[0]) || undefined)
                }
              />
            </TitleInput>
            <Button type="submit">Editar Postagem</Button>
          </Form>
        </>
      )}
    </Container>
  );
};

export default EditPost;
