import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 28vw;
    height: 70vh;
    border-radius: 1rem;
    margin: 3rem 0;
    /* background-color: ${props => props.theme.colors.backgroundCardAbout}; */

    span > p { 
        /* color: ${props => props.theme.colors.paragraphCardLine}; */
    }
`;

export const Image = styled.img`
    width: 34vw;
    height: 70vh;
`;
