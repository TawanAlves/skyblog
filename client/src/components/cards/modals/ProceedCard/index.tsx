import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  CloseTitle,
} from "./styles";

interface IProceedCard {
  show: boolean;
  setShow: (val: boolean) => void;
}

const ProceedCard: React.FC<IProceedCard> = ({ show, setShow }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const body = document.getElementsByTagName("body");
    if (body) {
      if (show) {
        window.scrollTo(0, 0);
        body[0].style.overflow = "hidden";
      } else {
        body[0].style.overflow = "auto";
      }
    }
  }, [show]);

  const handleClose = () => {
    const body = document.getElementsByTagName("body");
    if (body) {
      body[0].style.overflow = "auto";
    }
    setShow(false);
  };

  return show ? (
    <Container>
      <ContainerCloseModal onClick={handleClose} />
      <Content>
        <HeaderContent>
          <Title>Postagem Criada</Title>
          <CloseTitle onClick={handleClose} style={{ cursor: "pointer" }}>
            x
          </CloseTitle>
        </HeaderContent>
        <Line />
        <Message>Obrigado por compartilhar a sua história!</Message>
        <BottomContent>
          <Title></Title>
          <Button
            onClick={() => {
              handleClose();
              navigate("/");
            }}
          >
            Ver Postagem
          </Button>
        </BottomContent>
      </Content>
    </Container>
  ) : null;
};

export default ProceedCard;
