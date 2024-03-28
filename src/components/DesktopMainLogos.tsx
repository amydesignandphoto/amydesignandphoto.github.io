import React from "react";
import { useScrollableAnimation } from "../useScrollableAnimation";
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

export const DesktopMainLogos = ({ vert, width }: AnimationParams) => {
    const centered = width / 2 - 207;
    const vertMul = vert * 1;
    return (
        <Container>
            <DesktopBlackLogoRow
                offset={centered - cell * 20 + vertMul}
                count={7}
            />
            <DesktopBlackLogoRow offset={centered + cell - vertMul} count={7} />
            <DesktopPinkLogoMain />
            <div style={{ height: "37px" }} />
            <DesktopBlackLogoRow
                offset={centered + cell * 2 - vertMul}
                count={7}
            />
            <DesktopBlackLogoRow
                offset={centered - cell * 19 + vertMul}
                count={7}
            />
            <DesktopBlackLogoRow offset={centered + cell - vertMul} count={7} />
        </Container>
    );
};
