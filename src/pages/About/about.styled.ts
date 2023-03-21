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

export const BoxInfo = styled.section`
    display: flex;
    
    @media (max-width: 700px) {
        flex-direction: column-reverse;
    }

    &&.inverter {
        @media (max-width: 700px) {
            flex-direction: column;
        }   
    }
`;

export const InfoText = styled.p`
    max-width: 60rem;
    padding: 1rem;
    background-color: #000000;
    color: #FFFFFF;
    border-radius: .8rem 0 0;

    &&.leftTxt {
        border-radius: 0 .8rem 0 0;
    }

    @media (max-width: 700px) {
        border-radius: 0 0 .8rem;
        
        &&.leftTxt {    
            border-radius: 0 0 .8rem;
        }
    }
`;

export const InfoImg = styled.img`
    border-radius: 0 0 .8rem;

    &&.leftImg {
        border-radius: 0 0 0 .8rem;
    }

    @media (max-width: 700px) {
        border-radius: .8rem 0 0;

        &&.leftImg {
            border-radius: .8rem 0 0 0;
        }
    }
`;