import styled from "styled-components";

export const Card = styled.section`
    background-color: ${props => props.theme === "light" ? "#032CA6" : "#F2B705"};
    color: ${props => props.theme === "light" ? "#FFFFFF" : "#000000"};
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
