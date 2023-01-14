import React, { useEffect } from "react";

import {
  Container,
  Content,
  ContainerCloseModal,
  HeaderContent,
  Title,
  Line,
  Message,
  Button,
  BottomContent,
} from "./styles";

interface IProceedCard {
  show: boolean;
  setShow: (val: boolean) => void;
}

const ProceedCard: React.FC<IProceedCard> = ({ show, setShow }) => {
  useEffect(() => {
    const body = document.getElementsByTagName("body");
    // console.log(body, show);

    if (body) {
      if (show) {
        window.scrollTo(0, 0);
        body[0].style.overflow = "hidden";
      } else {
        body[0].style.overflow = "auto";
      }
    }
  }, [show]);

  return show ? (
    <Container>
      <ContainerCloseModal onClick={() => setShow(false)} />
      <Content>
        <HeaderContent>
          <Title>Postagem Criada</Title>
          <Title onClick={() => setShow(false)} style={{ cursor: "pointer" }}>
            x
          </Title>
        </HeaderContent>
        <Line />
        <Message>Obrigado por compartilhar a sua história!</Message>
        <BottomContent>
          <Title></Title>
          <Button>Ver Postagem</Button>
        </BottomContent>
      </Content>
    </Container>
  ) : (
    <div></div>
  );
};

export default ProceedCard;
