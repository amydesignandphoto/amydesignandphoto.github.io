import React from "react";
import { useScrollableAnimation } from "../useWithLogos";
import DesktopBlackLogoRow from "./DesktopBlackLogoRow";
import styled from "styled-components";
import DesktopPinkLogoMain from "./DesktopPinkLogoMain";

const cell = 138;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 5vw;
`;

export const DesktopMainLogos = () => {
    const { vert, width } = useScrollableAnimation();
    const centered = width / 2 - 207;
    const vertMul = vert * 1;
    return (
        <Container>
            <DesktopBlackLogoRow
                offset={centered - cell * 14 + vertMul}
                count={5}
            />
            <DesktopBlackLogoRow offset={centered + cell - vertMul} count={5} />
            <DesktopPinkLogoMain />
            <DesktopBlackLogoRow
                offset={centered + cell * 2 - vertMul}
                count={5}
            />
            <DesktopBlackLogoRow
                offset={centered - cell * 13 + vertMul}
                count={5}
            />
            <DesktopBlackLogoRow offset={centered + cell - vertMul} count={5} />
        </Container>
    );
};
