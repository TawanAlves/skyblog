import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div``;
export const PostContainer = styled.div`
  display: flex;
  justify-content: center;
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
  color: grey;
  font-size: 40px;
  margin: 0;
`;

export const CenterContent = styled.div``;

export const Image = styled.img`
  max-height: 400px;
`;

export const RightContent = styled.div`
  max-width: 500px;
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

export const GotoPost = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0 10px;
  color: black;
  text-decoration: none;
  font-size: 20px;
`;

export const Line = styled.div`
  margin: 0 auto;
  margin: 50px 0;
  border-top: 1px solid black;
  width: 90%;
`;
