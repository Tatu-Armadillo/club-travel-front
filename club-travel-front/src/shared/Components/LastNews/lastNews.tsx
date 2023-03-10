import { ReactNode } from 'react';
import { TitleTopic } from '@/shared/Components';
import { LastNewsContainer } from './lasNews.styled';
import { GiNewspaper } from 'react-icons/gi';
interface LastNewsProps {
    children: ReactNode[];
    title: string;
}

export const LastNews = ({ children, title }: LastNewsProps) => {
    return (
        <div className='p-3'>
            <div className='flex gap-2'>
                <TitleTopic title={title} />
                <GiNewspaper size={'2em'} />
            </div>
            <LastNewsContainer>{children}</LastNewsContainer>
        </div>
    );
};
