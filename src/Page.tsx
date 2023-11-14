import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div.attrs({ id: "Page" })`
    display: relative;
`;

const PageContent = styled.div.attrs({ id: "PageContent" })``;

const TextContent = styled.div.attrs({ id: "TextContent" })`
    margin: 1.5rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`;

const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    color: #002fa7;
    text-align: center;
    margin-top: 0;
    margin-bottom: 3rem;
    z-index: 1;
`;

const Paragraph = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
`;

const Image = styled.img`
    width: 100vw;
    margin: 0;
    margin-bottom: -4px;
    padding: 0;
    border: 0;
`;

type PageProps = {
    ids: string[];
    page: PageConfig;
};

const Page = ({ ids, page }: PageProps) => {
    return (
        <Container>
            <Header ids={ids} />
            <PageContent>
                <TextContent>
                    <Title>{page.title}</Title>
                    <div>
                        {page.paragraphs.map((par) => (
                            <Paragraph>{par}</Paragraph>
                        ))}
                    </div>
                </TextContent>
                <div>
                    {page.images.map((i) => (
                        <Image src={"assets/" + i} />
                    ))}
                </div>
            </PageContent>
        </Container>
    );
};

export default Page;
