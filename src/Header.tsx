import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const TopRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    box-shadow: 0px 3px 6px #00000029;
`;

const MenuPositioner = styled.div.attrs({ id: "MenuPositioner" })`
    position: relative;
`;

const Menu = styled.div.attrs({ id: "Menu" })`
    position: relative;
    background-color: white;
    width: 100vw;
    z-index: 10;
`;

const MenuContent = styled.div.attrs({ id: "MenuContent" })`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: white;
    box-shadow: 0px 3px 6px #00000029;
    padding: 1.5rem;
`;

const MenuItem = styled.a<{ isLast: boolean }>`
    font-family: "All Round Gothic", sans-serif;
    color: black;
    text-decoration: none;
    ${({ isLast }) => (isLast ? "" : "margin-bottom: 1.25rem;")}
`;

const Image = styled.img`
    height: 100%;
`;

const Icon = styled.button`
    font-size: 3rem;
    background-color: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    margin-right: 1.5rem;
`;

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    useEffect(() => {
        const listener = () => {
            if (window.scrollY > 10 && !isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener("scroll", listener);
        return () => window.removeEventListener("scroll", listener);
    }, []);
    return (
        <Container>
            <TopRow>
                <Image src="assets/logos/color-logo-no-text.svg" />
                <Icon onClick={() => setIsOpen((o) => !o)}>
                    {isOpen ? "x" : "="}
                </Icon>
            </TopRow>
            {isOpen && (
                <DropDownMenu>
                    <MenuItem href={`index.html`} isLast={false}>
                        Home
                    </MenuItem>
                    <MenuItem href={`about.html`} isLast={false}>
                        About
                    </MenuItem>
                    {config.pages.map((page, index) => (
                        <MenuItem
                            href={`${page.id}.html`}
                            isLast={index === config.pages.length - 1}
                        >
                            {page.title}
                        </MenuItem>
                    ))}
                </DropDownMenu>
            )}
        </Container>
    );
};

const DropDownMenu = ({ children }: { children: ReactNode }) => (
    <MenuPositioner>
        <Menu>
            <MenuContent>{children}</MenuContent>
        </Menu>
    </MenuPositioner>
);

export default Header;
