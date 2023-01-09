import React from "react";

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
import { FiTrash2 } from "react-icons/fi";

const PostDetails: React.FC = () => {
  return (
    <Container>
      <h1>Post Details</h1>
      <Content>
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
      </Content>
    </Container>
  );
};

export default PostDetails;
