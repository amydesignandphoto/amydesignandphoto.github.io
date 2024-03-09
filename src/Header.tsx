import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    z-index: 100;
`;

const TopRow = styled.div<{ isOpen: boolean }>`
    position: relative;
    display: flex;
    background-color: white;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    z-index: 12;
    ${({ isOpen }) => (isOpen ? "" : "box-shadow: 0px 3px 6px #00000029;")};
`;

const MenuPositioner = styled.div.attrs({ id: "MenuPositioner" })`
    background-color: white;
    position: relative;
    z-index: 10;
`;

const Menu = styled.div.attrs({ id: "Menu" })`
    position: relative;
    background-color: white;
    width: 100vw;
`;

const MenuContent = styled.div.attrs({ id: "MenuContent" })`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: white;
    box-shadow: 0px 3px 6px #00000029;
    padding: 1.5rem;

    @media (min-width: 480px) {
        flex-direction: row;
        box-sizing: border-box;
        gap: 25px;
        justify-content: flex-end;
        padding: 20px;
        padding-bottom: 0;
    }
`;

const MenuItem = styled.a<{ isLast: boolean }>`
    position: relative;
    color: black;
    text-decoration: none;
    ${({ isLast }) => (isLast ? "" : "margin-bottom: 1.25rem;")}
    z-index: 10;
`;

const Image = styled.img`
    height: 100%;
`;

const Icon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    background-color: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    margin-right: 1.5rem;
`;

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <Container>
            <TopRow isOpen={isOpen}>
                <a href="/" style={{ height: "100%" }}>
                    <Image src="assets/logos/color-logo-no-text.svg" />
                </a>
                <Icon onClick={() => setIsOpen((o) => !o)}>
                    {isOpen ? (
                        <FontAwesomeIcon icon={faClose} fontSize={"30px"} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} fontSize={"30px"} />
                    )}
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
