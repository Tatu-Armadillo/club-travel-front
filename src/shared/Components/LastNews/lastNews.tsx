import { ReactNode } from 'react';
import { TitleTopic } from '@/shared/Components';
import { LastNewsContainer } from './lastNews.styled';
import { GiNewspaper } from 'react-icons/gi'
;
interface LastNewsProps {
    children: ReactNode[];
    title: string;
}

export const LastNews = ({ children, title }: LastNewsProps) => {
    return (
        <div className='pt-12 px-4 sm:px-6 lg:px-8'>
            <div className='flex'>
                <TitleTopic title={title} />
                <GiNewspaper size={'2em'} />
            </div>
            <LastNewsContainer>{children}</LastNewsContainer>
        </div>
    );
};
