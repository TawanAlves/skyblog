import React from "react";

//css
import {
  AuthorEmail,
  AuthorName,
  Container,
  Content,
  Description,
  Image,
  LeftContent,
  RightContent,
  Title,
} from "./styles";

//assets
import Foto from "../../assets/img/airplane.jpg";
import { FiTrash2 } from "react-icons/fi";
import { BsPencilFill } from "react-icons/bs";

const PostDetails: React.FC = () => {
  return (
    <Container>
      <h1>Post Details</h1>
      <Content>
        <LeftContent>
          <Image src={Foto} alt={"photo"} />
        </LeftContent>
        <RightContent>
          <Title>Titulo da Postagem</Title>
          <AuthorEmail>Jubileu</AuthorEmail>
          <AuthorName>authorname@gmail.com</AuthorName>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis qui
            ipsam voluptas cupiditate sed, sint odio repellat facilis nulla
            eaque doloremque aperiam perspiciatis autem eveniet sequi vitae id
            pariatur ipsum.
          </Description>
          <BsPencilFill style={{ fontSize: "20px" }} />
          <FiTrash2 style={{ fontSize: "20px" }} />
        </RightContent>
      </Content>
    </Container>
  );
};

export default PostDetails;
