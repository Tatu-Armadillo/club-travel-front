import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 44%;
    min-width: auto;
    height: 70vh;
    border-radius: 1rem;
    margin: 3rem auto;
    background-color: ${props => props.theme.colors.secundaryBg};
    color: ${props => props.theme.colors.primaryTxt};
    text-transform: uppercase;

    @media (max-width: 660px) { 
        width: 85%;
    }
`;

export const Image = styled.img`
    width: 50%;
    height: 70vh;

    @media (max-width: 660px) { 
        display: none;
    }
`;
