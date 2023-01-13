import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PagTitle = styled.h1`
  text-align: center;
  color: #222420;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextInput = styled.input.attrs({ type: "text" })`
  width: 500px;
  height: 25px;
  margin-top: 30px;
  outline: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #697366;
  color: #697366;
  font-size: 20px;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;

  ::placeholder {
    color: #69736691;
    font-weight: 800;
    opacity: 1;
  }
`;

export const EmailInput = styled.input.attrs({ type: "email" })`
  width: 500px;
  height: 25px;
  margin-top: 30px;
  outline: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #697366;
  color: #697366;
  font-size: 20px;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;

  ::placeholder {
    color: #6973669b;
    font-weight: 800;
    opacity: 1;
  }
`;

export const MessageInput = styled.textarea`
  width: 500px;

  height: auto;
  margin-top: 30px;
  outline: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #697366;
  color: #697366;
  font-size: 20px;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;

  ::placeholder {
    color: #6973669b;
    font-weight: 800;
    opacity: 1;
  }
`;

export const TitleInput = styled.label`
  /* margin-top: 20px; */
  margin-top: 30px;
  color: #697366;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
`;

export const ImageInput = styled.input.attrs({ type: "file" })`
  width: 400px;
  height: 25px;
  margin-top: 30px;
  outline: none;
  border: none;
  background-color: transparent;
  color: #697366;
  font-size: 15px;
  font-weight: 600;

  ::placeholder {
    color: #6973669b;
    font-weight: 800;
    opacity: 1;
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
  font-size: 18px;
  font-family: "Open Sans", sans-serif;

  cursor: pointer;
  &:hover {
    background-color: #625e5e;
  }
`;

export const Image = styled.img`
  margin: 15px 0;
  max-height: 400px;
`;
