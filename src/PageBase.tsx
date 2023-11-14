import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div.attrs({ id: "Page" })`
    display: relative;
`;

const PageContent = styled.div.attrs({ id: "PageContent" })``;

type PageBaseProps = {
    children: ReactNode;
};

const PageBase = ({ children }: PageBaseProps) => {
    return (
        <Container>
            <Header />
            <PageContent>{children}</PageContent>
        </Container>
    );
};

export default PageBase;
