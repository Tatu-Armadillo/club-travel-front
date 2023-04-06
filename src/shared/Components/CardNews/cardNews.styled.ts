import styled from 'styled-components';

export const BoxMain = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin: 0 2.5rem;   

    &&:hover { 
        box-shadow: 5px 5px 10px #03738c;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    margin: 0 .5rem;

    p { 
        text-align: justify;
    }
`;

export const BoxBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
`;

export const Img = styled.img`
    height: 300px;
    width: 25rem;
`;