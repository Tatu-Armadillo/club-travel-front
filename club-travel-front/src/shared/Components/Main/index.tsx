import { GridContainer, FlexContainer } from './styles';
import { Destinations } from '../Destinations';
import { Highlights } from '../Highlights';
import { LastNews } from '../LastNewsContainer';
export const Main = () => {
    return (
        <GridContainer>
            <FlexContainer>
                <Destinations />
                <LastNews children={<button>Olá</button>} />
            </FlexContainer>
            <FlexContainer>
                <Highlights />
            </FlexContainer>
        </GridContainer>
    );
};
