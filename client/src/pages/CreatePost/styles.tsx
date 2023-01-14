import styled from "styled-components";

export const Container = styled.div``;

export const PagTitle = styled.h1`
  margin: 80px 0 20px;
  text-align: center;
  color: #222420;
  font-size: 26px;
  @media (min-width: 576px) {
    font-size: 36px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextInput = styled.input.attrs({ type: "text" })`
  width: 225px;
  height: 25px;
  margin-top: 30px;
  outline: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #697366;
  color: #697366;
  font-size: 15px;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;

  ::placeholder {
    color: #6973669b;
    font-weight: 800;
  }
  @media (min-width: 576px) {
    width: 500px;
    font-size: 20px;
  }
`;

export const EmailInput = styled.input.attrs({ type: "email" })`
  width: 225px;
  height: 25px;
  margin-top: 30px;
  outline: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #697366;
  color: #697366;
  font-size: 15px;

  font-weight: 600;
  font-family: "Open Sans", sans-serif;

  ::placeholder {
    color: #6973669b;
    font-weight: 800;
  }
  @media (min-width: 576px) {
    width: 500px;
    font-size: 20px;
  }
`;

export const MessageInput = styled.textarea`
  width: 225px;
  height: auto;
  margin-top: 30px;
  outline: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #697366;
  color: #697366;
  font-size: 15px;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;

  ::placeholder {
    color: #6973669b;
    font-weight: 800;
  }
  @media (min-width: 576px) {
    width: 500px;
    font-size: 20px;
  }
`;

export const TitleInput = styled.label`
  /* margin-top: 20px; */
  margin-top: 30px;
  color: #697366;
  font-size: 15px;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
    font-size: 20px;
    font-size: 20px;
  }
`;
export const Warning = styled.p`
  color: #6973669b;
  font-weight: 800;
  font-size: 15px;
  text-align: center;
  @media (min-width: 576px) {
    text-align: left;
  }
`;

export const ImageInput = styled.input.attrs({ type: "file" })`
  width: 50vw;
  height: 25px;
  margin-top: 30px;
  outline: none;
  border: none;
  background-color: transparent;
  color: #697366;
  font-size: 15px;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;

  ::placeholder {
    color: #697366;
    font-weight: 800;
  }
  @media (min-width: 576px) {
    width: 400px;
  }
`;

export const Button = styled.button`
  margin-top: 50px;
  padding: 20px;
  color: white;
  background-color: #222420;
  border: none;
  border-radius: 40px;
  font-weight: 600;
  font-size: 15px;
  font-family: "Roboto", sans-serif;

  cursor: pointer;
  &:hover {
    background-color: #625e5e;
  }
  @media (min-width: 576px) {
    font-size: 18px;
  }
`;
