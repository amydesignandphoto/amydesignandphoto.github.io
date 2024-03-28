import React from "react";
import styled from "styled-components";
import PageBase from "./PageBase";
import ContactLogo from "./components/ContactLogo";
import { useMediaQueryContext } from "./context/MediaQueryContext";
const PageContent = styled.div.attrs({ id: "PageContent" })`
    display: flex;
    justify-content: center;
`;

const TextContent = styled.div.attrs({ id: "TextContent" })`
    margin: 1.5rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-family: "all-round-gothic", sans-serif;
    text-transform: uppercase;
    color: #002fa7;
    text-align: center;
    margin: 0;
`;

const Paragraph = styled.p`
    text-align: center;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const DesktopImageClip = styled.div`
    width: 365px;
    height: 365px;
    overflow: clip;
    border-radius: 1000px;
    border: 0.75rem solid #002fa7;
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

const DesktopContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 185px;
    max-width: 1000px;
    justify-content: center;
    align-items: center;
`;

const About = () => {
    const { isTabletOrLarger } = useMediaQueryContext();
    if (isTabletOrLarger)
        return (
            <PageBase>
                <PageContent>
                    <DesktopContainer>
                        <DesktopFancyImage />
                        <TextContent>
                            <Title>About Me</Title>
                            {config.about.paragraphs.map((par) => (
                                <Paragraph>{par}</Paragraph>
                            ))}
                            <ContactLogo />
                            <Paragraph>amy.designandphoto@gmail.com</Paragraph>
                        </TextContent>
                    </DesktopContainer>
                </PageContent>
            </PageBase>
        );
    return (
        <PageBase>
            <TextContent>
                <Title>About Me</Title>
            </TextContent>
            <FancyImage />
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

const DesktopFancyImage = () => {
    return (
        <div>
            <ImageBoarder>
                <DesktopImageClip>
                    <Image src={"assets/" + config.about.image} />
                </DesktopImageClip>
            </ImageBoarder>
        </div>
    );
};

const FancyImage = () => {
    return (
        <ImageContainer>
            <ImageBoarder>
                <ImageClip>
                    <Image src={"assets/" + config.about.image} />
                </ImageClip>
            </ImageBoarder>
        </ImageContainer>
    );
};

export default About;
