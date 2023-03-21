import styled from "styled-components";

export const BoxInfo = styled.section`
    display: flex;
    justify-content: space-between;
    background-color: #000000;
    width: 95%; 
    padding: 1.5rem;
    border-radius: .8rem 0;
    
    &&:nth-child(2n) {
        flex-direction: row-reverse;
    }

    @media (max-width: 500px) {
        flex-direction: column-reverse;

        &&:nth-child(2n) {
            flex-direction: column-reverse;
        }
    }

    @media (max-width: 1023px) {
        max-width: 85%; 
    }
`;

export const BoxText = styled.div`
    display: flex;
    align-items: center;
    max-width: 60rem;
    text-align: justify;
    padding: 20px;
    color: #FFFFFF;
`;

export const InfoImg = styled.img`
    max-width: 10rem;
    height: 10rem;
`;

export const BoxImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;