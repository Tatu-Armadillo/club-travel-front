import { FlexContainer } from './home.styled';
import { CardNews, Destinations, LastNews, Modal } from '@/shared/Components';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { EventCalender } from './EventCalender/eventCalender';
import { INews } from '@/shared/Interface';
import { NewsService } from '@/shared/services';

export const Home = () => {
    const auth = useContext(AuthContext);
    const [modalOpen, setModalOpen] = useState(true);
    const [news, setNews] = useState<INews[]>([]);
    const loadInformation = async () => {
        try {
            await NewsService.getNews().then(res => setNews(res.data));
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
            {news.length > 0 ? (
                <LastNews
                    title={'últimas noticias'}
                    children={news.map((item, key) => (
                        <CardNews
                            key={key}
                            title={item.title}
                            url={item.imageLink}
                            description={item.text}
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
