import ImgNotFound from '@/shared/img/page-not-found.png';
import { Link } from 'react-router-dom';
export const NotFound = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <img
                src={ImgNotFound}
                alt='Page not found'
                style={{
                    width: '70vw',
                    height: '80vh',
                    transition: 'linear all .5s',
                }}
            />
            <h1>
                Página não encontrada clique
                {
                    <Link
                        to={'/'}
                        className='text-sm font-semibold leading-6 text-orange-500'
                    >
                        AQUI
                    </Link>
                }
                para voltar a página inicial.
            </h1>
        </div>
    );
};
