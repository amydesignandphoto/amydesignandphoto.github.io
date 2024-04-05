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
  background-color: #002fa7;
  &:hover {
    background-color: #ff0d70;
  }
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  cursor: pointer;
`;

const Text = styled.div`
  color: white;
  text-decoration: none;
  font-size: 28px;
  cursor: pointer;
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
