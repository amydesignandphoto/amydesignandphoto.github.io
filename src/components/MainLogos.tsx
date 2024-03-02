import React from "react";
import styled from "styled-components";
import BlackLogoRow from "./BlackLogoRow";
import PinkLogoMain from "./PinkLogoMain";
import { useScrollableAnimation } from "../useWithLogos";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 5vw;
`;

const MainLogos = () => {
    const { vert, width } = useScrollableAnimation();
    return (
        <Container>
            <BlackLogoRow offset={-((width * 5) / 3) + vert} count={2} />
            <BlackLogoRow offset={width / 3 - vert} />
            <PinkLogoMain />
            <BlackLogoRow offset={(width * 2) / 3 - vert} />
            <BlackLogoRow offset={-(width * 7) / 3 + vert} count={3} />
            <BlackLogoRow offset={width / 3 - vert} count={3} />
        </Container>
    );
};

export default MainLogos;
