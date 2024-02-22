import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100vw;
    margin-bottom: 5vw;
`;

const Image = styled.img`
    width: 100vw;
    max-height: 100vw;
    object-fit: cover;
`;

const Text = styled.a`
    box-sizing: border-box;
    background-color: #002fa7;
    color: white;
    width: 100%;
    text-decoration: none;
    padding: 5vw;
    font-size: 6vw;
    line-height: 8vw;
`;

export const MobileImageLink = ({ img, text, linksTo }: ImageLinkProps) => {
    return (
        <Container>
            <Image src={`assets/${img}`} />
            <Text href={`${linksTo}.html`}>{text}</Text>
        </Container>
    );
};
