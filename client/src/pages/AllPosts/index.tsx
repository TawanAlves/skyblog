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
  LargeDay,
  LargeMonth,
  LeftContent,
  Line,
  Month,
  PagTitle,
  PostContainer,
  RightContent,
  Title,
} from "./styles";

//assets
import { FiArrowRight } from "react-icons/fi";

const AllPosts: React.FC = () => {
  const [blogPost, setBlogPost] = useState<any>([]);

  // Todo: mudar tipo do state
  const getDay = (_date: any) => {
    const date = new Date(_date);
    const dia = String(date.getDate()).padStart(2, "0");
    return dia;
  };
  const getMonth = (_date: any) => {
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
        {/* olhar tipagem idx */}
        {blogPost.map((postagem: any, idx: number) => (
          <div key={idx}>
            <PostContainer>
              <Content key={postagem.id}>
                <LeftContent>
                  <Day>{getDay(postagem.date)}</Day>
                  <Month>{getMonth(postagem.date)}</Month>
                  <LargeDay>{getDay(postagem.date)}</LargeDay>
                  <LargeMonth>{getMonth(postagem.date)}</LargeMonth>
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
          </div>
        ))}
      </Container>
    </>
  );
};

export default AllPosts;
