import React from "react";
import { useMediaQueryContext } from "../context/MediaQueryContext";
import { ImageLink } from "./ImageLink";
import { MobileImageLink } from "./MobileImageLink";
import styled from "styled-components";

const DesktopImageLinkContainer = styled.div`
    display: flex;
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
            <DesktopImageLinkContainer>
                {config.home.links.map((props) => (
                    <ImageLink {...props} />
                ))}
            </DesktopImageLinkContainer>
        );
    else
        return config.home.links.map((props) => <MobileImageLink {...props} />);
};

export default MainMenuImageLinks;
