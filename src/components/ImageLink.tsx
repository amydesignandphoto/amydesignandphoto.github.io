import React from "react";
import styled from "styled-components";

const Container = styled.a`
  display: flex;
  flex-direction: column;
  background-color: #002fa7;
  &:hover {
    background-color: #ff0d70;
  }
  align-items: stretch;
  text-decoration: none;
  min-width: 384px;
  width: 48%;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const TextContainer = styled.div`
  box-sizing: border-box;
  padding: 20px;
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
