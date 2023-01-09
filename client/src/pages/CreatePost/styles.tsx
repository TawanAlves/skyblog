import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleInput = styled.label`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
`;

export const NameInput = styled.input.attrs({ type: "text" })`
  margin-top: 10px;
  color: black;
  outline: none;
  width: 300px;
  height: 20px;
`;

export const EmailInput = styled.input.attrs({ type: "email" })`
  color: black;
  outline: none;
  width: 300px;
  height: 20px;
`;

export const TextInput = styled.input.attrs({ type: "text" })`
  margin-top: 10px;
  color: black;
  outline: none;
  width: 300px;
  height: 20px;
`;

export const ImageInput = styled.label`
  margin-top: 15px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.input.attrs({ type: "submit" })`
  margin-top: 15px;
  padding: 20px;
  color: white;
  background-color: #000000;
  font-weight: 600;
  border: none;
  border-radius: 40px;
`;
