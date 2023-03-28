import { GridContainer, FlexContainer } from './home.styled';
import {
    CardNews,
    Destinations,
    Highlights,
    LastNews,
    Modal,
} from '@/shared/Components';
import { useContext, useEffect, useState } from 'react';
import { useApi } from '@/shared/hooks';
import { AuthContext } from '@/context/AuthContext';
interface FlagProps {
    original_title: string;
    poster_path: string;
    overview: string;
}

export const Home = () => {
    const auth = useContext(AuthContext);
    const { generalSearchs } = useApi();
    const ApiImageLink = 'https://image.tmdb.org/t/p/w500/';
    const [flag, setFlag] = useState<FlagProps[]>([]);
    const [modalOpen, setModalOpen] = useState(true);
    const loadInformation = async () => {
        try {
            let json = await generalSearchs.getAll();
            setFlag(json.results);
        } catch (error) {
            alert(
                'não foi possível carregar o feed, tente novamente mais tarde'
            );
        }
    };
    useEffect(() => {
        loadInformation();
    }, []);

    return (
        <FlexContainer>
            <FlexContainer>
                <Destinations />
                {flag.length > 2 ? (
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
                ) : (
                    <h2 className='txtbold'>Não foi possível exibir o feed</h2>
                )}
            </FlexContainer>
            {modalOpen &&
                !auth.user &&
                !sessionStorage.getItem('modalOpen') && (
                    <Modal
                        externFunc={() => {
                            setModalOpen(!modalOpen);
                            sessionStorage.setItem('modalOpen', 'never');
                        }}
                    />
                )}
        </FlexContainer>
    );
};
