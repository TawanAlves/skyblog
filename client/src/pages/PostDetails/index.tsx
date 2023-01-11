import React, { useState, useEffect } from "react";

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
  Image,
  LeftContent,
  Month,
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

  useEffect(() => {
    const handleApi = async () => {
      try {
        const response = await blogService.getPostId();
        const data = response.data;
        setBlogPost(data);
      } catch (error) {
        console.log(error);
      }
      console.log(blogPost);
    };
    handleApi();
  }, []);

  return (
    <Container>
      <h1>Post Details</h1>

      <Content>
        <LeftContent>
          <Image src={blogPost.avatar} alt={blogPost.avatar} />
        </LeftContent>
        <RightContent>
          <DateContainer>
            <Day>{blogPost.dia}</Day>
            <Month>{blogPost.mes}</Month>
          </DateContainer>
          <Title>{blogPost.titulo} </Title>
          <AuthorEmail>{blogPost.email}</AuthorEmail>
          <AuthorName> {blogPost.nome}</AuthorName>
          <Description>{blogPost.mensagem}</Description>
          <EditContainer>
            <EditPost to={`/edit-post/${"post1"}`}>
              <Pencil />
            </EditPost>
            <Trash />
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
