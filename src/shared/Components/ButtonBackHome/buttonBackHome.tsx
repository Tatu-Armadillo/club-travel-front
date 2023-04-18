import { IoLogoGameControllerB } from 'react-icons/io';
import { StyledButtonBackHome } from './styledButtonBackHome.styled';
export type ButtonBackHomeProps = {
    externalFunc: () => void;
};
export const ButtonBackHome = ({ externalFunc }: ButtonBackHomeProps) => {
    return (
        <StyledButtonBackHome type='button' onClick={externalFunc}>
            Voltar
            <IoLogoGameControllerB size={'2rem'} />
        </StyledButtonBackHome>
    );
};
