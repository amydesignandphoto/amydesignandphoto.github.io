import React from "react";
import styled from "styled-components";

const SUPPORTED_HEIGHT = 1366;

const Container = styled.div`
    position: relative;
    display: flex;
    width: 48%;
    height: 15%;
    flex-direction: column;
    justify-content: space-between;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const TextContainer = styled.div`
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    background-color: #002fa7;
`;

const Text = styled.a`
    color: white;
    text-decoration: none;
    font-size: 28px;
`;

export const ImageLink = ({ linksTo, img, text }: ImageLinkProps) => {
    return (
        <Container>
            <Image src={`assets/${img}`} />
            <TextContainer>
                <Text href={`${linksTo}.html`}>{text}</Text>
            </TextContainer>
        </Container>
    );
};
