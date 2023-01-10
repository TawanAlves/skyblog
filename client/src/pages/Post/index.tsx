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
  const [blogPost, setBlogPost] = useState([]);
  // Todo: mudar tipo do state

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

  useEffect(() => {
    handleApi;
    //   api;
    //   // .get("/post/1")

    //   // .then((response) => setBlog(response.data))
    //   // .catch((err) => {
    //   //   console.error("ops! ocorreu um erro" + err);
    //   // });
  }, [blogPost]);

  return (
    <>
      <div>
        {blogPost.map((item, idx) => (
          <div key={idx}>
            <span>{item.nome}</span>
          </div>
        ))}
      </div>
      <button onClick={handleApi}>testar</button>
      <Line />

      <h1>Postagem</h1>
      <Container>
        <PostContainer>
          <Content>
            <LeftContent>
              <Month>JUL</Month>
              <Day>27</Day>
            </LeftContent>
            <CenterContent>
              <Image src={Foto} alt="aiplane" />
            </CenterContent>
            <RightContent>
              <Title> </Title>
              <AuthorEmail> </AuthorEmail>
              <AuthorName> </AuthorName>
              <Description>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                qui ipsam voluptas cupiditate sed, sint odio repellat facilis
                nulla eaque doloremque aperiam perspiciatis autem eveniet sequi
                vitae id pariatur ipsum.
              </Description>

              <GotoPost to={`/post-details/${"post1"}`}>
                Visualizar Postagem <FiArrowRight />
              </GotoPost>
            </RightContent>
          </Content>
        </PostContainer>
        <Line />

        <PostContainer>
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
        <Line />
      </Container>
    </>
  );
};

export default Post;
