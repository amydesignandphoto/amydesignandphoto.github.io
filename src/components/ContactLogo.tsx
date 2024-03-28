import React from "react";
import styled from "styled-components";

const Container = styled.span`
    color: #002fa7;
    font-weight: 900;
    font-size: 4rem;
`;

const AtSpan = styled.span.attrs({ children: "@" })`
    font-family: "Alagard";
`;

const ContactLogo = () => {
    return (
        <Container>
            CONT
            <AtSpan />
            CT
        </Container>
    );
};

export default ContactLogo;
