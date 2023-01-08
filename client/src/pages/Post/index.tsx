import React from "react";

//css
import {
  AuthorEmail,
  AuthorName,
  CenterContent,
  Container,
  Content,
  Day,
  Description,
  ImgDiv,
  LeftContent,
  Line,
  Month,
  PostContainer,
  RightContent,
  Title,
} from "./styles";

//assets

const Post: React.FC = () => {
  return (
    <>
      <h1>Postagem</h1>
      <Container>
        <PostContainer>
          <Content>
            <LeftContent>
              <Month>JUL</Month>
              <Day>27</Day>
            </LeftContent>
            <CenterContent>
              <ImgDiv>
                <img src="assets/img/airplane.jpg" alt="aiplane" />
              </ImgDiv>
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
              <ImgDiv>
                <img src="assets/img/airplane.jpg" alt="aiplane" />
              </ImgDiv>
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
            </RightContent>
          </Content>
        </PostContainer>
        <Line />
      </Container>
    </>
  );
};

export default Post;
