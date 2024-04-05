import React from "react";
import styled from "styled-components";

const SUPPORTED_HEIGHT = 1366;

const Container = styled.a`
  position: relative;
  display: flex;
  width: 48%;
  height: 15%;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

const Image = styled.img``;

const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  padding: 20px;
  background-color: #002fa7;
  &:hover {
    background-color: #ff0d70;
  }
`;

const Text = styled.div`
  color: white;
  text-decoration: none;
  font-size: 28px;
`;

export const ImageLink = ({ linksTo, img, text }: ImageLinkProps) => {
  return (
    <Container href={`${linksTo}.html`}>
      <Image src={`assets/${img}`} />
      <TextContainer>
        <Text>{text}</Text>
      </TextContainer>
    </Container>
  );
};
