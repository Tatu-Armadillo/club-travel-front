import { GridContainer, FlexContainer } from './styles';
import { Destinations } from '../Destinations';
import { Highlights } from '../Highlights';
import { LastNews } from '../LastNews';
import { useEffect, useState } from 'react';
import { CardNews } from '../CardNews';

interface FlagProps {
    original_title: string;
    poster_path: string;
}

export const Main = () => {
    const ApiImageLink = 'https://image.tmdb.org/t/p/w500/';
    const [flag, setFlag] = useState<FlagProps[]>([]);
    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/movie/popular?api_key=d9933aa94f6c72dd8b077673c359fc82&language=en-US&page=1'
        )
            .then((response) => response.json())
            .then((json) => setFlag(json.results));
    }, []);

    return (
        <GridContainer>
            <FlexContainer>
                <Destinations />
                <LastNews
                    title={'Últimas noticias'}
                    children={flag.map((item) => (
                        <CardNews
                            title={item.original_title}
                            url={ApiImageLink + item.poster_path}
                        />
                    ))}
                />
            </FlexContainer>
            <FlexContainer>
                <Highlights />
            </FlexContainer>
        </GridContainer>
    );
};
