import styled from 'styled-components';

export const MainContainr = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40vw;
    height: 70vh;
    border-radius: 1rem;
    margin: 1rem;
    border: 4px solid #03258c;
    background-color: rgb(255, 255, 255);

    &&:hover {
        box-shadow: 30px 30px 20px rgba(0, 0, 0, 0.3);
        transform: translateY(-1%);
    }
`;
