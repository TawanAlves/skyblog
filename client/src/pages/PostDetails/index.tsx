import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  PagTitle,
  Pencil,
  RightContent,
  Title,
  Trash,
} from "./styles";

//
import blogService from "../../services/blogService";
import DeleteCard from "../../components/cards/modals/DeleteCard";
import LoadingEffect from "../../components/LoadingEffect";

const PostDetails: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [blogPost, setBlogPost] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Todo: mudar tipo do state

  let { postId } = useParams();

  useEffect(() => {
    const handleApi = async () => {
      try {
        setLoading(true);
        const response = await blogService.getPostId(`${postId}`);
        const data = response;
        setBlogPost(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    handleApi();
  }, []);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const response = await blogService.deletPost(`${postId}`);
      setShowModal(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {loading ? (
        <LoadingEffect />
      ) : blogPost.length === 0 ? (
        <h1>Nenhuma postagem encontrada</h1>
      ) : (
        <>
          <DeleteCard {...{ show: showModal, setShow: setShowModal }} />
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
        </>
      )}
    </Container>
  );
};

export default PostDetails;
