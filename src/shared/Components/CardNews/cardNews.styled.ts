import styled from 'styled-components';

export const BoxMain = styled.div`
    display: flex;
    background-color: black;
    width: auto;
`;

export const BoxDetails = styled.div`
    max-width: 60rem;
    background-color: blue;
    
    h2 { 
        font-weight: 700;
        letter-spacing: -0.025rem;
    }

    p { 
        text-align: justify;
    }
`;

export const BoxImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    max-width: 15rem;
`;