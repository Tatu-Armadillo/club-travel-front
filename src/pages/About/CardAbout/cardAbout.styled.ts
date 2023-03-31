import styled from "styled-components";

export const Card = styled.section`
    background-color: ${props => props.theme.colors.backgroundCardAbout};
    color: ${props => props.theme.colors.paragraphCardAbout};
    border-radius: .8rem 0rem;
    width: 85%;
    min-width: auto;
    padding: 2rem;
    box-shadow: 5px 5px 12px ${props => props.theme.colors.boxShadowCardAbout};
    text-align: justify;

    h3 {
        font-weight: 800;
        text-transform: capitalize;
        font-size: 1.5rem;
    }

    p {
        font-weight: 400;
    }
`;
