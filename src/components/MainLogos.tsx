import React from "react";
import styled from "styled-components";
import BlackLogoRow from "./BlackLogoRow";
import PinkLogoMain from "./PinkLogoMain";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 5vw;
`;

const MainLogos = ({ vert, width }: AnimationParams) => {
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
