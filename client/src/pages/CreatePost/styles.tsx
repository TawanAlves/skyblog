import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.form``;

export const TitleInput = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
`;

export const TextInput = styled.input.attrs({ type: "text" })`
  margin-top: 4px;
  color: grey;
  outline: none;
  width: 300px;
  height: 20px;
`;

export const ImageInput = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
`;

// export const TextInput = styled.input.attrs({ type: "text" })`
//   margin-top: 4px;
//   color: grey;
//   outline: none;
//   width: 300px;
//   height: 20px;
// `;
