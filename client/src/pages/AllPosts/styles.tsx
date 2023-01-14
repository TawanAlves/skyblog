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
  font-size: 26px;
  @media (min-width: 576px) {
    font-size: 36px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0 50px;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0 6px;
  @media (min-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LargeMonth = styled.h4`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    color: grey;
    font-size: 30px;
    margin: 0;
  }
`;

export const LargeDay = styled.h2`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    color: #5f5f5f;
    font-size: 70px;
    margin: 0;
  }
`;

export const Month = styled.h4`
  color: #5f5f5f;
  font-size: 35px;
  margin: 0;
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Day = styled.h2`
  color: #5f5f5f;
  font-size: 45px;
  margin: 0;
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const CenterContent = styled.div`
  /* display: flex;
  align-items: center; */
`;

export const Imagecontainer = styled.div`
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

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 80vw;
  @media (min-width: 576px) {
    max-width: 400px;
  }
  @media (min-width: 1200px) {
    max-width: 500px;
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: #222420;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  font-size: 26px;
  @media (min-width: 1200px) {
    text-align: left;
    font-size: 28px;
  }
`;

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
  color: #222420;
  /* font-family: "Open Sans", sans-serif; */
  font-size: 20px;
  text-align: start;
  line-height: 27px;
  letter-spacing: 0.3px;
  @media (min-width: 1200px) {
    width: 500px;
  }
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
