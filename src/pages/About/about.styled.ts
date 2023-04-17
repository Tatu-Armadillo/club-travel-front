import styled from "styled-components";

export const BoxContainer = styled.div`
    max-width: 80rem;  
    margin: 3rem auto;
`;

export const BoxTitle = styled.div`
    text-align: center;
    
    h1 {
        font-size: 2.8rem;
        font-weight: 800;
        text-transform: uppercase;
        color: ${props => props.theme.colors.secundaryTxt};
    }

    p {
        font-weight: 400;
        font-style: italic;
        color: ${props => props.theme.colors.secundaryTxt};
        text-shadow: 0px 0px 10px ${props => props.theme.colors.secundaryShadow};
    }
`;

export const BoxCards = styled.div`
    justify-items: center;
    padding: 2.5rem 0;
`;

