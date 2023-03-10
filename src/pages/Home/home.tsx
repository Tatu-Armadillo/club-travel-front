import { GridContainer, FlexContainer } from './styles';
import {
    CardNews,
    Destinations,
    Highlights,
    LastNews,
    Modal,
} from '@/shared/Components';
import { useEffect, useState } from 'react';
import { api } from '@/shared/Service';
interface FlagProps {
    original_title: string;
    poster_path: string;
    overview: string;
}

export const Home = () => {
    const ApiImageLink = 'https://image.tmdb.org/t/p/w500/';
    const [flag, setFlag] = useState<FlagProps[]>([]);
    const [modalOpen, setModalOpen] = useState(true);
    const loadInformation = async () => {
        let json = await api.getAll();
        setFlag(json.results);
    };
    useEffect(() => {
        loadInformation();
    }, []);
    // useEffect(() => {
    //     fetch(
    //         'https://api.themoviedb.org/3/movie/popular?api_key=d9933aa94f6c72dd8b077673c359fc82&language=en-US&page=1'
    //     )
    //         .then((response) => response.json())
    //         .then((json) => setFlag(json.results));
    // }, []);

    return (
        <GridContainer>
            <FlexContainer>
                <Destinations />
                <LastNews
                    title={'Últimas noticias'}
                    children={flag.map((item, key) => (
                        <CardNews
                            key={key}
                            title={item.original_title}
                            url={ApiImageLink + item.poster_path}
                            description={item.overview}
                        />
                    ))}
                />
            </FlexContainer>

            <FlexContainer viewHeightControl={50}>
                <Highlights />
            </FlexContainer>
            {modalOpen && (
                <Modal
                    externFunc={() => {
                        setModalOpen(!modalOpen);
                    }}
                />
            )}
        </GridContainer>
    );
};
