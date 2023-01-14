import styled from "styled-components";
import ReactLoading from "react-loading";

export const Container = styled.div`
  position: fixed;
  top: 0;
  background-color: #00000077;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Bubbles = styled(ReactLoading)``;
