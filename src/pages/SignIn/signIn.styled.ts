import styled from 'styled-components';

export const MainContainr = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 40vw;
    height: 70vh;
    border-radius: 1rem;
    margin: 1rem;
    border: 4px dashed #03258c;
    background-color: #93cedb;

    &&:hover {
        border: 4px solid #03258c;
    }
`;

export const Input = styled.input``;
