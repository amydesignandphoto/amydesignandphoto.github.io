import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
`
const TopRow = styled.div<{ isOpen: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
`

const Image = styled.img`
    height: 100%;
`

const Icon = styled.button`
    font-size: 3rem;
    background-color: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    margin-right: 1.5rem;
`

type HeaderProps = {
    ids: string[]
    isOpen: boolean
    onClick: () => void
}

const Header = ({ ids, isOpen, onClick }: HeaderProps) => {
    return (
        <Container>
            <TopRow isOpen={isOpen}>
                <Image src="assets/logos/color-logo-no-text.svg" />
                <Icon onClick={onClick}>{isOpen ? 'x' : '='}</Icon>
            </TopRow>
        </Container>
    )
}

export default Header
