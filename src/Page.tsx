import React from "react";
import styled from "styled-components";
import PageBase from "./PageBase";

const TextContent = styled.div.attrs({ id: "TextContent" })`
    margin: 1.5rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`;

const Title = styled.h1`
    color: #002fa7;
    text-align: center;
    margin-top: 0;
    margin-bottom: 3rem;
    z-index: 1;
`;

const Paragraph = styled.p`
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
  page: PageConfig;
};

const Page = ({ page }: PageProps) => {
  return (
    <PageBase>
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
    </PageBase>
  );
};

export default Page;
