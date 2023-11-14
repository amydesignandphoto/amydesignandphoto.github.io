import React from "react";
import styled from "styled-components";
import PageBase from "./PageBase";
import ContactLogo from "./components/ContactLogo";

const TextContent = styled.div.attrs({ id: "TextContent" })`
    margin: 1.5rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    color: #002fa7;
    text-align: center;
    margin: 0;
`;

const Paragraph = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const ImageClip = styled.div`
    width: 70vw;
    height: 70vw;
    overflow: clip;
    border-radius: 1000px;
    border: 0.75rem solid #002fa7;
`;

const Image = styled.img`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    overflow: clip;
    height: inherit;
`;

const ImageBoarder = styled.div`
    padding: 0.75rem;
    border: 0.75rem solid #ff0d70;
`;

const About = () => {
    return (
        <PageBase>
            <TextContent>
                <Title>About Me</Title>
            </TextContent>
            <ImageContainer>{<FancyImage />}</ImageContainer>
            <TextContent>
                {config.about.paragraphs.map((par) => (
                    <Paragraph>{par}</Paragraph>
                ))}
                <ContactLogo />
                <Paragraph>amy.designandphoto@gmail.com</Paragraph>
            </TextContent>
        </PageBase>
    );
};

const FancyImage = () => {
    return (
        <ImageBoarder>
            <ImageClip>
                <Image src={"assets/" + config.about.image} />
            </ImageClip>
        </ImageBoarder>
    );
};

export default About;
