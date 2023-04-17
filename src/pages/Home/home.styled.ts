import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-evenly;
    height: 100%;
`;

interface FlexContainerProps {
    viewHeightControl?: number;
}
export const FlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    flex-direction: column;
    max-width: 80rem;
    margin: 3rem auto;
    height: ${(props) => props.viewHeightControl ? props.viewHeightControl + 'rem' : 'auto'};
`;
