import { GridContainer, FlexContainer } from './styles';
import { Destinations } from '../Destinations';
import { Highlights } from '../Highlights';
import { LastNewsContainer } from '../LastNewsContainer';
export const Main = () => {
    return (
        <GridContainer>
            <FlexContainer>
                <Destinations />
                <LastNewsContainer>
                    <div>News1</div>
                    <div>News1</div>
                    <div>News1</div>
                    <div>News1</div>
                    <div>News1</div>
                </LastNewsContainer>
            </FlexContainer>
            <FlexContainer>
                <Highlights />
            </FlexContainer>
        </GridContainer>
    );
};
