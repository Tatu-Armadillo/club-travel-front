import { ReactNode } from 'react';
import { LastNewsContainer } from './styles';
interface LastNewsProps {
    children: ReactNode;
    title: string;
}

export const LastNews = ({ children, title }: LastNewsProps) => {
    return (
        <div>
            <h1 className='text-3xl mb-8'>{title}</h1>
            <LastNewsContainer>{children}</LastNewsContainer>
        </div>
    );
};
