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

export const Content = styled.div`
  display: flex;
  gap: 0 50px;
`;

export const LeftContent = styled.div``;

export const Image = styled.img`
  max-height: 400px;
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
  color: grey;
  font-size: 40px;
  margin: 0;
`;

export const Title = styled.h2`
  color: #2f2e2e;
`;

export const AuthorName = styled.p`
  margin: 0;
  color: grey;
`;
export const AuthorEmail = styled.p`
  margin: 0;
  color: grey;
`;

export const Description = styled.p`
  color: #4a4949;
`;

export const EditContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 10px;
`;
export const Pencil = styled(BsPencilFill)`
  font-size: 20px;
  cursor: pointer;
`;

export const Trash = styled(FiTrash2)`
  font-size: 20px;
  cursor: pointer;
`;

export const EditPost = styled(Link)`
  text-decoration: none;
  color: black;
`;
