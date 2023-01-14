import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  background-color: #00000077;
  box-sizing: border-box;

  width: 100%;
  height: 100vh;
  z-index: 10;
`;

export const ContainerCloseModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 1;
  cursor: pointer;
`;

export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 0.3rem;
  width: 498px;
  max-width: 90%;
  height: auto;
  z-index: 10;
  padding: 8px 14px;
  @media (min-width: 576px) {
    height: 206px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 26px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #222420;
`;

export const CloseTitle = styled.h2`
  margin: 0;
  font-size: 26px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #222420;
  cursor: pointer;
`;

export const Line = styled.div`
  border-top: 1px solid black;
`;

export const Message = styled.h3`
  padding: 1.5rem;
  margin: 0 auto;
  text-align: left;

  font-size: 23px;
  font-weight: 400;
  color: #697366;
  @media (min-width: 576px) {
    text-align: center;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Button = styled.button`
  justify-self: flex-end;
  /* margin: 10px 3px; */
  padding: 11px;
  color: white;
  background-color: #222420;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 15px;
  font-family: "Roboto", sans-serif;

  cursor: pointer;
  @media (min-width: 576px) {
    font-size: 18px;
  }
`;
