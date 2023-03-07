import { LinkWraper, LinkWraperProps } from './styles';

interface HotItemProps {
    config: LinkWraperProps;
}

export const HotItem = ({ config }: HotItemProps) => {
    return (
        <LinkWraper {...config}>
            <img
                src='https://www.maladeaventuras.com/wp-content/uploads/2022/05/Pipa.jpg'
                alt='Imagem do Local'
            />
            <p>nome do local</p>
        </LinkWraper>
    );
};
