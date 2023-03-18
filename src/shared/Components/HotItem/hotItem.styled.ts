import styled from 'styled-components';

export interface LinkWraperProps {
    hoverState: boolean;
}
export const LinkWraper = styled.a<LinkWraperProps>`
    display: flex;
    transition: all 0.5s;
    align-items: center;
    padding: 0;
    border-radius: 1rem;
    flex-direction: column;

    &&:hover > p,
    a {
        opacity: 1;
        color: white;
        text-decoration: none;
    }

    &&:hover {
        cursor: pointer;
        transform: ${(props) =>
            props.hoverState === true ? 'scale(0.9) ' : 'none'};
    }

    && > p {
        opacity: 0;
        position: fixed;
        transition: all linear 0.5s;
        background-color: rgba(0, 0, 0, 0.295);
        padding: 1rem;
    }
    img {
        border-radius: 1rem;
    }
`;
