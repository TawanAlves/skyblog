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
