import styled from "styled-components";

export const BoxTitle = styled.div`
    display: flex;
    color: ${props => props.theme.colors.secundaryTxt};
    
    svg { 
        fill: ${props => props.theme.colors.secundaryTxt};
    }
`;