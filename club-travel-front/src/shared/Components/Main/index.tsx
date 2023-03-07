import { GridContainer } from './styles';
import { Destinations } from '../Destinations';
import { Highlights } from '../Highlights';
import { LastNewsContainer } from '../LastNewsContainer';
export const Main = () => {
    return (
        <GridContainer>
            <div>
                <Destinations />
                <LastNewsContainer>
                    <div>News1</div>
                    <div>News1</div>
                    <div>News1</div>
                    <div>News1</div>
                    <div>News1</div>
                </LastNewsContainer>
            </div>
            <div>
                <Highlights />
            </div>
        </GridContainer>
    );
};
