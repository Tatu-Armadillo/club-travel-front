import styled from 'styled-components';

export const BoxMain = styled.div`
    display: flex;
    flex-direction: column-reverse;
    min-height: 35rem;
    
    &&:hover { 
        box-shadow: 5px 5px 10px #03738c;
        border-radius: 1rem;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        min-height: auto;
    }
`;

export const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 1024px) {
        min-height: 17rem;
    }
`;

export const BoxTop = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    padding: 0 .1rem;

    h2 { 
        font-weight: 700;
        letter-spacing: -0.025em;
        font-size: 1.5rem;
        line-height: 2rem;
        color: rgb(17, 24, 39);
    }
`;

export const BoxMiddle = styled.div`
    margin: 0 1rem;

    p { 
        text-align: justify;
    }
`;

export const BoxBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    height: 300px;
    max-width: 40%;
    border-radius: 0 1rem 1rem 0;
    object-fit: cover;
    
    @media (max-width: 1024px) {
        min-width: 100%;
        border-radius: 1rem 1rem 0 0;
    } 
`;