import { FcHome } from 'react-icons/fc';
import { StyledButtonBackHome } from './styledButtonBackHome.styled';
export type ButtonBackHomeProps = {
    externalFunc: () => void;
};
export const ButtonBackHome = ({ externalFunc }: ButtonBackHomeProps) => {
    return (
        <StyledButtonBackHome type='button' onClick={externalFunc}>
            <FcHome size={'2rem'} />
        </StyledButtonBackHome>
    );
};
