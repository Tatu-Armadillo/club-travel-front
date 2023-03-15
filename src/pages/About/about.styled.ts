import styled from "styled-components";

export const BoxContainer = styled.div``;

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

export const Card = styled.section`
    background-color: #F2B705;
    border-radius: .8rem 0rem;
    width: 85%;
    min-width: auto;
    padding: 2rem;

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