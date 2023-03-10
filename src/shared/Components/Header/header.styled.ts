import styled from "styled-components";

type Props = {
    open: boolean
};

export const Navbar = styled.nav`
    background-color: #03258C;
`;

export const BoxImages = styled.div`
    a {
        display: flex;
        align-items: center;
        gap: .4rem;
    }
`;

export const BoxLogo = styled.img`
    height: 3.5rem;
    width: auto;
`;