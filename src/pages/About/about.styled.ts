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
    }

    p {
        font-weight: 400;
        font-style: italic;
        text-shadow: 0px 0px 10px #0000004d;
    }
`;

export const BoxCards = styled.div`
    justify-items: center;
    padding: 2.5rem 0;
`;

export const Card = styled.section`
    background-color: #F2B705;
    border-radius: .8rem 0rem;
    width: 85%;
    min-width: auto;
    padding: 2rem;
    box-shadow: 5px 5px 12px black;

    h3 {
        font-weight: 800;
        text-transform: capitalize;
        font-size: 1.5rem;
    }

    p {
        letter-spacing: .04rem;
        font-weight: 400;
    }
`;

export const BoxInfo = styled.section`
    /* border-radius: .8rem 0rem; */
`;

export const InfoText = styled.p`
    max-width: 60rem;
    padding: 1rem;
    /* border-radius: .8rem 0 .1rem; */
`;

export const InfoImg = styled.img`
    /* border-radius: .8rem 0rem; */
`;