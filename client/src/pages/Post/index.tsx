import React, { useState, useEffect } from "react";
// import api from "../../services/api";

import blogService from "../../services/blogService";

//css
import {
  AuthorEmail,
  AuthorName,
  CenterContent,
  Container,
  Content,
  Day,
  Description,
  GotoPost,
  Image,
  Imagecontainer,
  LeftContent,
  Line,
  Month,
  PostContainer,
  RightContent,
  Title,
} from "./styles";

//assets
import Foto from "../../assets/img/airplane.jpg";
import { FiArrowRight } from "react-icons/fi";

const Post: React.FC = () => {
  const [blogPost, setBlogPost] = useState<any>([]);

  // Todo: mudar tipo do state

  useEffect(() => {
    const handleApi = async () => {
      try {
        const response = await blogService.getBlogPost();
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
    <>
      <h1>Postagem</h1>
      <Container>
        {blogPost.map((postagem) => (
          <>
            <PostContainer>
              <Content key={postagem.id}>
                <LeftContent>
                  <Month>{postagem.mes}</Month>
                  <Day>{postagem.dia}</Day>
                </LeftContent>
                <CenterContent>
                  <Imagecontainer>
                    <Image src={postagem.avatar} alt={postagem.avatar} />
                  </Imagecontainer>
                </CenterContent>
                <RightContent>
                  <Title>{postagem.titulo} </Title>
                  <AuthorEmail>{postagem.email}</AuthorEmail>
                  <AuthorName> {postagem.nome}</AuthorName>
                  <Description>{postagem.mensagem}</Description>
                  <GotoPost to={`/post-details/${postagem.id}`}>
                    Visualizar Postagem <FiArrowRight />
                  </GotoPost>
                </RightContent>
              </Content>
            </PostContainer>
            <Line />
          </>
        ))}

        {/* <PostContainer>
          <Content>
            <LeftContent>
              <Month>JUL</Month>
              <Day>27</Day>
            </LeftContent>
            <CenterContent>
              <Image src={Foto} alt="aiplane" />
            </CenterContent>
            <RightContent>
              <Title>Titulo da Postagem</Title>
              <AuthorEmail>Jubileu</AuthorEmail>
              <AuthorName>authorname@gmail.com</AuthorName>

              <Description>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                qui ipsam voluptas cupiditate sed, sint odio repellat facilis
                nulla eaque doloremque aperiam perspiciatis autem eveniet sequi
                vitae id pariatur ipsum.
              </Description>

              <GotoPost to={`/post-details/${"post2"}`}></GotoPost>
            </RightContent>
          </Content>
        </PostContainer> 
        {/* <Line /> */}
      </Container>
    </>
  );
};

export default Post;
