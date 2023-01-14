import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import { BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
`;

export const PagTitle = styled.h1`
  /* margin: 80px 0 70px; */
  text-align: center;
  color: #222420;
  font-size: 26px;
  @media (min-width: 576px) {
    font-size: 36px;
  }
`;

export const Content = styled.div`
  margin-top: 70px;
  display: flex;
  gap: 0 50px;
  flex-direction: column;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const LeftContent = styled.div`
  margin: auto;
  @media (min-width: 1200px) {
    height: 400px;
    width: 405px;
  }
`;

export const Image = styled.img`
  margin-top: 25px;
  height: 300px;
  width: 240px;
  max-width: 400px;
  @media (min-width: 576px) {
    height: 400px;
    width: 340px;
  }
  @media (min-width: 1200px) {
    margin-top: 0;
  }
`;

//   height: 450px;
//   max-height: 450px;
//   max-width: 400;
// `;

export const RightContent = styled.div`
  align-items: center;
  max-width: 80vw;
  @media (min-width: 576px) {
    max-width: 400px;
  }
  @media (min-width: 1200px) {
    max-width: 500px;
    align-items: flex-start;
  }
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
  text-align: center;
  color: #222420;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  font-size: 26px;
  padding: 33px 0;
  @media (min-width: 1200px) {
    text-align: left;
    font-size: 28px;
  }
`;

//   color: #222420;
//   font-family: "Rubik", sans-serif;
//   font-weight: 600;
//   font-size: 28px;
// `;

export const AuthorName = styled.p`
  align-self: flex-start;
  margin: 0;
  color: #6973669b;
  font-size: 19px;
  font-family: "Open Sans", sans-serif;
`;

export const AuthorEmail = styled.p`
  align-self: flex-start;
  margin: 0;
  color: #6973669b;
  font-size: 19px;
  font-family: "Open Sans", sans-serif;
`;

export const Description = styled.p`
  max-width: 100vw;
  padding: 25px 0;
  color: #222420;
  /* font-family: "Open Sans", sans-serif; */
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.3px;
  @media (min-width: 1200px) {
    width: 500px;
  }
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

export const EditPost = styled(Link)`
  text-decoration: none;
  color: black;
`;
