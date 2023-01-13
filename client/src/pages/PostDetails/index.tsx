import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import blogService from "../../services/blogService";

//css
import {
  AuthorEmail,
  AuthorName,
  Container,
  Content,
  DateContainer,
  Day,
  Description,
  EditContainer,
  EditPost,
  HomeLink,
  Image,
  LeftContent,
  Month,
  PagTitle,
  Pencil,
  RightContent,
  Title,
  Trash,
} from "./styles";

//assets
import Foto from "../../assets/img/airplane.jpg";

const PostDetails: React.FC = () => {
  const [blogPost, setBlogPost] = useState<any>([]);
  // Todo: mudar tipo do state

  let { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleApi = async () => {
      try {
        const response = await blogService.getPostId(`${postId}`);
        const data = response;
        setBlogPost(data);
      } catch (error) {
        console.log(error);
      }
    };
    handleApi();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await blogService.deletPost(`${postId}`);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  return (
    <Container>
      <PagTitle>Detalhes do Post</PagTitle>
      <Content>
        <LeftContent>
          <Image src={blogPost.avatar} alt={blogPost.avatar} />
        </LeftContent>
        <RightContent>
          <DateContainer>
            <Day>{blogPost.dia}</Day>
            <Month>{blogPost.mes}</Month>
          </DateContainer>
          <Title>{blogPost.titulo}</Title>
          <AuthorEmail>{blogPost.email}</AuthorEmail>
          <AuthorName> {blogPost.nome}</AuthorName>
          <Description>{blogPost.mensagem}</Description>
          <EditContainer>
            <EditPost to={`/edit-post/${`${postId}`}`}>
              <Pencil />
            </EditPost>
            <Trash onClick={handleDelete} />
          </EditContainer>
        </RightContent>
      </Content>

      {/* <Content>
        <LeftContent>
          <Image src={Foto} alt={"photo"} />
        </LeftContent>
        <RightContent>
          <DateContainer>
            <Day>27</Day>
            <Month>JUL</Month>
          </DateContainer>
          <Title>Titulo da Postagem</Title>
          <AuthorEmail>Jubileu</AuthorEmail>
          <AuthorName>authorname@gmail.com</AuthorName>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis qui
            ipsam voluptas cupiditate sed, sint odio repellat facilis nulla
            eaque doloremque aperiam perspiciatis autem eveniet sequi vitae id
            pariatur ipsum.
          </Description>
          <EditContainer>
            <EditPost to={`/edit-post/${"post1"}`}>
              <Pencil />
            </EditPost>
            <Trash />
          </EditContainer>
        </RightContent>
      </Content> */}
    </Container>
  );
};

export default PostDetails;
