import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import { BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PagTitle = styled.h1`
  margin: 80px 0 70px;
  text-align: center;
  color: #222420;
`;

export const Content = styled.div`
  display: flex;
  gap: 0 50px;
`;

export const LeftContent = styled.div``;

export const Image = styled.img`
  height: 450px;
  max-height: 450px;
  max-width: 400;
`;

export const RightContent = styled.div`
  max-width: 500px;
`;

export const DateContainer = styled.div`
  display: flex;
`;

export const Month = styled.h4`
  color: grey;
  font-size: 20px;
  margin: 0;
  align-self: flex-end;
`;
export const Day = styled.h2`
  color: #5f5f5f;
  font-size: 40px;
  margin: 0;
`;

export const Title = styled.h2`
  color: #222420;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  font-size: 28px;
`;

export const AuthorName = styled.p`
  margin: 0;
  color: #6973669b;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
`;
export const AuthorEmail = styled.p`
  margin: 0;
  color: #6973669b;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
`;

export const Description = styled.p`
  width: 500px;
  color: #222420;
  /* font-family: "Open Sans", sans-serif; */
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.3px;
`;

export const EditContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 10px;
`;
export const Pencil = styled(BsPencilFill)`
  font-size: 25px;
  cursor: pointer;
  color: #222420;
`;

export const Trash = styled(FiTrash2)`
  font-size: 25px;
  cursor: pointer;
  color: #222420;
`;
export const HomeLink = styled(Link)``;

export const EditPost = styled(Link)`
  text-decoration: none;
  color: black;
`;
