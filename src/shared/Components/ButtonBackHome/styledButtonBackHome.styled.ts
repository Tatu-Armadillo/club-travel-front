import styled from 'styled-components';
export const StyledButtonBackHome = styled.button`
    background: none;
    border-radius: 50%;
    padding: 0.5rem;
    position: fixed;
    z-index: 999;
    top: 12%;
    right: 1%;
    transition: 0.5s all;

    &&:hover {
        background-color: #99bddd;
        cursor: pointer;
        transform: scale(1.1);
    }
`;
