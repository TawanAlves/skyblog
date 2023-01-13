import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div``;
export const PostContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PagTitle = styled.h1`
  margin: 80px 0 70px;
  text-align: center;
  color: #222420;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  /* justify-content: space-around; */
  gap: 0 50px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Month = styled.h4`
  color: grey;
  font-size: 20px;
  margin: 0;
`;
export const Day = styled.h2`
  color: #5f5f5f;
  font-size: 50px;
  margin: 0;
`;

export const CenterContent = styled.div``;

export const Imagecontainer = styled.div`
  height: 400px;
  width: 405px;
`;
export const Image = styled.img`
  height: 400px;
  /* max-height: 400px; */
  max-width: 400px;
`;

export const RightContent = styled.div`
  max-width: 500px;
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
  font-size: 19px;
  font-family: "Open Sans", sans-serif;
`;
export const AuthorEmail = styled.p`
  margin: 0;
  color: #6973669b;
  font-size: 19px;
  font-family: "Open Sans", sans-serif;
`;

export const Description = styled.p`
  width: 500px;
  color: #222420;
  /* font-family: "Open Sans", sans-serif; */
  font-size: 20px;
  text-align: justify;
  line-height: 24px;
  letter-spacing: 0.3px;
`;

export const GotoPost = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0 10px;
  color: #222420;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
`;

export const Line = styled.div`
  margin: 50px auto;

  border-top: 1px solid black;
  width: 90%;
  color: #697366;
`;
