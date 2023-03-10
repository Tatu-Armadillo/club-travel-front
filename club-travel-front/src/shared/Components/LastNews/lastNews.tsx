import { ReactNode } from 'react';
import { TitleTopic } from '@/shared/Components';
import { LastNewsContainer } from './lasNews.styled';
interface LastNewsProps {
    children: ReactNode;
    title: string;
}

export const LastNews = ({ children, title }: LastNewsProps) => {
    return (
        <div className='p-3'>
            <TitleTopic title={title} />
            <LastNewsContainer>{children}</LastNewsContainer>
        </div>
    );
};
