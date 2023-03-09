import { CardImage } from './styles';

interface CardNewsProps {
    url: string;
    title: string;
}
export const CardNews = ({ url, title }: CardNewsProps) => {
    return (
        <div className='flex gap-2'>
            <p>{title}</p>
            <CardImage src={url} alt={title} />
        </div>
    );
};
