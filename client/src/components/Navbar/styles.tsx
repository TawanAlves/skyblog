import styled from "styled-components";
import Airport from "../../assets/img/airport.jpeg";
import Airport2 from "../../assets/img/airport2.jpeg";

// import Airport from "../../assets/img/back12.jpg";
// import Airport2 from "../../assets/img/back1.jpg";

export const Container = styled.div`
  margin-top: -75px;
  height: 350px;
  background-image: url(${Airport});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% auto;
  @media (min-width: 1000px) {
    background-image: url(${Airport2});
  }
`;

export const GlassContainer = styled.div`
  /* padding-top: 117px; */
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(3px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
export const PagTitle = styled.h1`
  /* align-self: flex-end; */
  /* margin-top: 10px; */
  /* margin-top: 30px;
  text-align: center; */
  text-decoration: none;
  font-weight: 400;
  /* font-style: italic; */
  font-size: 110px;
  color: #fffafa;
  text-shadow: 5px 4px 9px #0000006c;
  font-family: "Courgette", cursive;
`;

export const UpButton = styled.button`
  color: #ffffff;
  background-color: #0000006c;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  border: 1px solid white;
  position: fixed;
  bottom: 14px;
  right: 14px;
`;
