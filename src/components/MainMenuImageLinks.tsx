import React from "react";
import { useMediaQueryContext } from "../context/MediaQueryContext";
import { ImageLink } from "./ImageLink";
import { MobileImageLink } from "./MobileImageLink";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: row;
    justify-content: center;
`;
const DesktopImageLinkContainer = styled.div`
    display: flex;
    max-width: 1800px;
    align-content: flex-start;
    flex-direction: row;
    margin: 32px;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;
`;

const MainMenuImageLinks = () => {
    const { isDesktop } = useMediaQueryContext();
    if (isDesktop)
        return (
            <Container>
                <DesktopImageLinkContainer>
                    {config.home.links.map((props) => (
                        <ImageLink {...props} />
                    ))}
                </DesktopImageLinkContainer>
            </Container>
        );
    else
        return config.home.links.map((props) => <MobileImageLink {...props} />);
};

export default MainMenuImageLinks;
