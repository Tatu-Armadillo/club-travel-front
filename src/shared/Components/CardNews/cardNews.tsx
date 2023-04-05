import { Img, BoxMain, BoxDetails, BoxImg } from './cardNews.styled';
import { Button } from '@/shared/Components';

interface CardNewsProps {
    url: string;
    title: string;
    description?: string;
}

export const CardNews = ({ url, title, description }: CardNewsProps) => {
    return (
        <BoxMain>
            <BoxDetails>
                <h2 className='font-bold tracking-tight text-gray-900 sm:text-2xl'>
                    {title}
                </h2>
                <hr />
                <p>{description}</p>
                <Button
                    typeButton={'button'}
                    text={'ler mais'}
                    classButton={'rounded-md capitalize bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-indigo-600 '}
                />
            </BoxDetails>
            <BoxImg>
                <Img src={url} alt={title} className='hidden md:block' />
            </BoxImg>
        </BoxMain>
    );
};
