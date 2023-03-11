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

    return (
        <GridContainer>
            <FlexContainer>
                <Destinations />
                <LastNews
                    title={'últimas noticias'}
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
