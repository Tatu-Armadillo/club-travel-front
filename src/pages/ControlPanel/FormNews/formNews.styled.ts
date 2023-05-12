import styled from "styled-components";

export const BoxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`;

export const BoxMiddle = styled.div`
    max-width: 80rem;
    width: 30%;
    margin: 0 3rem;
    background-color: rgba(170, 170, 170, 0.17);
    border-radius: .375rem;
`;


export const BoxForms = styled.div`
    margin: 1rem 0rem;
    gap: 1rem;
    display: grid;
    grid-template-rows: 3;
    justify-content: center;

    @media (max-width: 790px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    };
`;

export const BoxInput = styled.div`
    width: 100%;
    @media (max-width: 790px) { 
        width: 80%;
    }

    label { 
        text-transform: capitalize;
        color: ${props => props.theme.colors.secundaryTxt};
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;
    }

    input { 
        width: 100%;
        display: block;
        padding: 0.5rem;
        border-radius: .375rem;
        font-size: 1rem;
        line-height: 1.5rem;
        color: rgb(32, 27, 44);
        border: .0625rem solid rgb(110, 122, 137);
    }

    input:focus { 
        outline: none;
        border-color: rgb(75, 85, 99);
    }

    textarea { 
        resize: none;
        display: block;
        border-radius: .375rem;
        font-size: 1rem;
        line-height: 1.5rem;
    }

    span { 
        color: ${props => props.theme.colors.secundaryTxt};
    }
`;

export const BoxButtons = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    
    button { 
        width: 15rem;
        margin: .5rem 0;
        font-size: .9rem;
        font-weight: 500;
        line-height: 1.5rem;
        text-transform: uppercase;
    }
`;
