import { FcOvertime } from 'react-icons/fc';
import { useParams } from 'react-router-dom';
import { useApi } from '@/shared/hooks';
import { useEffect, useState } from 'react';
import { INews } from '@/shared/Interface';
import { SubNews } from './SubNews/subNews';

export const Notice = () => {
    const [actualNews, setActualNews] = useState<INews>();
    const params = useParams();
    const { generalSearchs } = useApi();
    const loadInfomation = async () => {
        // const json = await NewsService.getNewsId(params.slug!);
        // setActualNews(json); ajustar pois o service recebe como parametro um "number" para a busca de noticia
    };
    useEffect(() => {
        loadInfomation();
    }, []);
    return (
        <main className='flex flex-col items-center justify-start text-justify m-10'>
            <div className='flex items-center gap-2 border p-1 border-red-200 rounded-md hover:bg-red-200'>
                <FcOvertime size={'2rem'} />
                <i className='font-semibold'>16/04/2022</i>
            </div>
            <h1 className='text-6xl font-bold w-5/6'>
                Pousadas em Barra Grande, Bahia: as 15 mais charmosas Pousadas
                em Barra Grande, Bahia: as 15
            </h1>

            <div className='flex flex-col w-2/3 mt-5 '>
                <p className='text-md text-zinc-700'>
                    No post o que fazer na Península de Maraú: as melhores
                    praias e passeios você vai poder conferir o melhor que a
                    região oferece. Agora, vamos descobrir onde ficar nesse
                    lugar tão especial. Se você está com passagem comprada para
                    conhecer esse cantinho especial da Bahia, precisa ler esse
                    post com dicas de 15 pousadas em Barra Grande, Bahia e nas
                    proximidades, para você curtir com conforto e tranquilidade
                    as principais praias da região.
                </p>
                <img
                    className='block w-4/5 m-auto mt-5'
                    src='https://www.maladeaventuras.com/wp-content/uploads/2017/03/PONTA_DO_MUTA.jpg'
                    alt='Imagem qualquer'
                />
            </div>
            <SubNews />
        </main>
    );
};
