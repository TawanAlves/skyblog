import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  }
`;

export const Image = styled.img`
  margin: 15px auto;
  max-height: 400px;
  max-width: 80vw;
  @media (min-width: 576px) {
    height: 400px;
    width: 340px;
  }
`;
