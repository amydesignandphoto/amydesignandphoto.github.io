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
  width: 100vw;
  margin-bottom: 5vw;
`;

const Image = styled.img`
  width: 100vw;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Text = styled.div`
  box-sizing: border-box;
  color: white;
  width: 100%;
  padding: 5vw;
  font-size: 6vw;
  line-height: 8vw;
`;

export const MobileImageLink = ({ img, text, linksTo }: ImageLinkProps) => {
  return (
    <Container href={`${linksTo}.html`}>
      <Image src={`assets/${img}`} />
      <Text>{text}</Text>
    </Container>
  );
};
