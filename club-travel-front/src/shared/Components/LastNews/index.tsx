import { ReactNode } from 'react';
import { TitleTopic } from '../TitleTopic';
import { LastNewsContainer } from './styles';
interface LastNewsProps {
    children: ReactNode;
    title: string;
}

export const LastNews = ({ children, title }: LastNewsProps) => {
    return (
        <div>
            <TitleTopic title={title} />
            <LastNewsContainer>{children}</LastNewsContainer>
        </div>
    );
};
