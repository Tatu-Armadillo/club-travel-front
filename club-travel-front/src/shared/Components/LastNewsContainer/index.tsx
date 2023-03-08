import { ReactNode } from 'react';
import { LastNewsContainer } from './styles';
interface LastNewsProps {
    children: ReactNode;
}

export const LastNews = ({ children }: LastNewsProps) => {
    return (
        <div>
            <h1 className='text-3xl'>Últimas Noticias</h1>
            <LastNewsContainer>{children}</LastNewsContainer>
        </div>
    );
};
