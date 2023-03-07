import styled from 'styled-components';

export const LinkWraper = styled.a`
    display: flex;
    transition: all 0.5s;
    align-items: center;
    padding: 0;
    border-radius: 1rem;

    &&:hover > p,
    a {
        opacity: 1;
        color: white;
        text-decoration: none;
    }

    &&:hover {
        transform: scale(0.9);
    }

    && > p {
        opacity: 0;
        position: relative;
        top: -25%;
        left: -25%;
        transition: all linear 0.5s;
        background-color: rgba(0, 0, 0, 0.295);
        padding: 1rem;
    }
    img {
        border-radius: 1rem;
    }
`;
