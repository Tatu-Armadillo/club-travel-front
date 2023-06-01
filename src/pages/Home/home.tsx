import { FlexContainer } from './home.styled';
import { CardNews, Destinations, LastNews, Modal } from '@/shared/Components';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { EventCalender } from './EventCalender/eventCalender';

interface CardProps {
    original_title: string;
    poster_path: string;
    overview: string;
}

export const Home = () => {
    const auth = useContext(AuthContext);
    const ApiImageLink = 'https://image.tmdb.org/t/p/w500/';
    const [modalOpen, setModalOpen] = useState(true);
    const [ ] = useState()
    const loadInformation = async () => {
        try {

        } catch (error) {
            alert('não foi possível carregar o feed, tente novamente mais tarde');
        }
    };
    useEffect(() => {
        loadInformation();
    }, []);

    return (
        <FlexContainer>
            <Destinations />
            {card.length > 2 ? (
                <LastNews
                    title={'últimas noticias'}
                    children={card.map((item, key) => (
                        <CardNews
                            key={key}
                            title={item.original_title}
                            url={ApiImageLink + item.poster_path}
                            description={item.overview}
                        />
                    ))}
                />
            ) : (
                <h2 className='txtbold '>Não foi possível exibir o feed</h2>
            )}
            <EventCalender />
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
