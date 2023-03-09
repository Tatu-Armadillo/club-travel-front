import styled from 'styled-components';
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 60% 30%;
    justify-content: space-evenly;
    padding: 1rem;
    height: 100%;
`;

interface FlexContainerProps {
    viewHeightControl?: number;
}
export const FlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    padding: 1rem;
    border-radius: 1rem;
    gap: 1rem;
    height: ${(props) =>
        props.viewHeightControl ? props.viewHeightControl + 'rem' : 'auto'};
`;
