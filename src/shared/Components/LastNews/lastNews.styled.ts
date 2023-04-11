import styled from 'styled-components';

export const BoxTitle = styled.div`
    display: flex;
    color: ${props => props.theme.colors.secundaryTxt};
    
    svg { 
        fill: ${props => props.theme.colors.secundaryTxt};
    }
`; 

export const LastNewsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    @media (max-width: 660px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
