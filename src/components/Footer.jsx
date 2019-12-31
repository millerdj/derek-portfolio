import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import Logo from "components/_ui/Logo";

const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 50px;
    }
`

const Footer = () => (
    <FooterContainer>
        <Link to="/">
            <Logo />
        </Link>
    </FooterContainer>
)

export default Footer;
