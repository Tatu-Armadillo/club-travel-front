import styled from 'styled-components';

export const LastNewsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1rem;

    @media (max-width: 720px) {
        display: flex;
        flex-direction: column;
    }
`;
