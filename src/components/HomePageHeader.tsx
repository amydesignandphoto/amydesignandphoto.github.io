import React from "react";
import Header from "../Header";
import styled from "styled-components";

const ContainerRel = styled.div<{ isUp: boolean }>`
    position: relative;
    transition: 0.5s ease-in-out;
    ${({ isUp }) => (isUp ? "top: -100px;" : "top: 0;")}
    background-color: white;

    width: 100vw;
`;

const Container = styled.div`
    background-color: white;
    position: fixed;
    z-index: 100;
    width: 100vw;
`;

const HomePageHeader = ({ vert }: AnimationParams) => {
    return (
        <ContainerRel isUp={vert < 300}>
            <Container>
                <Header />
            </Container>
        </ContainerRel>
    );
};

export default HomePageHeader;
