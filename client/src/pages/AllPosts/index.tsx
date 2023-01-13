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
  PagTitle,
  PostContainer,
  RightContent,
  Title,
} from "./styles";

//assets
import Foto from "../../assets/img/airplane.jpg";
import { FiArrowRight } from "react-icons/fi";

const AllPosts: React.FC = () => {
  const [blogPost, setBlogPost] = useState<any>([]);

  // Todo: mudar tipo do state
  const getDay = (_date: any) => {
    const date = new Date(_date);
    const dia = String(date.getDate()).padStart(2, "0");
    return dia;
  };
  const getMonth = (_date) => {
    const date = new Date(_date);
    const dateString = date.toString();
    const resultadoEspaco = dateString.split(" ", 3).reverse();
    const mes = resultadoEspaco[1];
    return mes;
  };
  useEffect(() => {
    const handleApi = async () => {
      try {
        const response = await blogService.getBlogPost();
        setBlogPost(response);
      } catch (error) {
        console.log(error);
      }
    };
    handleApi();
  }, []);

  return (
    <>
      <PagTitle>Últimas Postagens</PagTitle>

      <Container>
        {blogPost.map((postagem, idx) => (
          <div key={idx}>
            <PostContainer>
              <Content key={postagem.id}>
                <LeftContent>
                  <Month>{getMonth(postagem.date)}</Month>
                  <Day>{getDay(postagem.date)}</Day>
                </LeftContent>
                <CenterContent>
                  <Imagecontainer>
                    <Image src={postagem.avatar} alt={postagem.avatar} />
                    {/* {postagem.avatar} */}
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
          </div>
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

export default AllPosts;
