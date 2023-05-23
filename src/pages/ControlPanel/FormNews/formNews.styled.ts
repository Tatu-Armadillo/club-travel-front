import styled from "styled-components";

export const BoxContainer = styled.div`
    display: flex;
    grid-template-columns: repeat(3, 27rem);
    justify-content: center;
    align-items: center;
    min-height: 100vh; 

    @media (max-width: 1300px) { 
        grid-template-columns: repeat(2, 27rem);
    }

    @media (max-width: 830px) { 
        grid-template-columns: repeat(1, 27rem);
    }
`;

export const BoxMiddle = styled.div`
    margin: 2rem 3rem;
    padding: 2rem 3rem 2rem;
    background-color: rgba(170, 170, 170, 0.17);
    border-radius: .375rem;

    h3 { 
        color: ${props => props.theme.colors.secundaryTxt};
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.5rem;
        margin-bottom: .8rem;
    }

    && > span { 
        display: block;
        border: 1px solid #F2B705;
        border-radius: 5rem;
        width: 60%;
    }
`;


export const BoxForms = styled.div`
    margin: 1rem 0rem;
    gap: 1rem;
    display: grid;
    grid-template-rows: 3;
    justify-content: center;
`;

export const BoxInput = styled.div`
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
        color: rgb(32, 27, 44);
        border: .0625rem solid rgb(110, 122, 137);
    }

    span { 
        color: #da5d5d;
    }
`;

export const BoxButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    button { 
        width: 15rem;
        font-size: .9rem;
        font-weight: 500;
        line-height: 1.5rem;
        text-transform: uppercase;
    }
`;
