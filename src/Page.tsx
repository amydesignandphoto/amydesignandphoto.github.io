import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'

const Container = styled.div``

const PageContent = styled.div`
    position: relative;
`

const Menu = styled.div`
    position: absolute;
    top: 0;

    box-shadow: 0px 3px 6px #00000029;
    width: 100%;
    padding: 1.5rem;
`

const TextContent = styled.div`
    position: relative;
    margin: 1.5rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`

const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    color: #002fa7;
    text-align: center;
    margin-top: 0;
    margin-bottom: 3rem;
    z-index: 1;
`

const Paragraph = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
`

const Image = styled.img`
    width: 100vw;
    margin: 0;
    padding: 0;
    border: 0;
`

type PageProps = {
    ids: string[]
    page: PageConfig
}

const Page = ({ ids, page }: PageProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <Container>
            <Header ids={ids} isOpen={isOpen} onClick={() => setIsOpen(o => !o)} />
            <PageContent>
                <TextContent>
                    <Title>{page.title}</Title>
                    <div>
                        {page.paragraphs.map(par => (
                            <Paragraph>{par}</Paragraph>
                        ))}
                    </div>
                    {isOpen && <Menu>menu</Menu>}
                </TextContent>
                <div>
                    {page.images.map(i => (
                        <Image src={'assets/' + i} />
                    ))}
                </div>
            </PageContent>
        </Container>
    )
}

export default Page
