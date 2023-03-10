import { LinkWraper, LinkWraperProps } from './hotItem.styled';

interface HotItemProps {
    config: LinkWraperProps;
    title: string;
    url?: string;
}

export const HotItem = ({ config, title, url }: HotItemProps) => {
    return (
        <LinkWraper {...config}>
            <p>{title}</p>
            <img
                src={url || 'https://www.maladeaventuras.com/wp-content/uploads/2022/05/Pipa.jpg'}
                alt='Imagem do Local'
            />
        </LinkWraper>
    );
};
