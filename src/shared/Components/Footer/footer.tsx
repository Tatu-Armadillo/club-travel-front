import { BoxFooter } from './footer.styled';
import {
    FaInstagram,
    FaTwitter,
    FaWhatsapp,
    FaTiktok,
    FaTelegramPlane,
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Logo from '../../img/web3reallogoamarela.png';
import LogoName from '../../img/web3travelclub4.png';
import { Link } from 'react-router-dom';

export const Footer = () => {
    type Props = {
        href: string;
        icon: JSX.Element;
    };

    const sizeIcon: string = '1.3rem';

    const arrAnchor: Props[] = [
        {
            href: 'https://www.instagram.com/agenciadeviagem.eth/',
            icon: <FaInstagram size={sizeIcon} />,
        },
        {
            href: 'https://twitter.com/Web3TravelClub',
            icon: <FaTwitter size={sizeIcon} />,
        },
        {
            href: 'https://api.whatsapp.com/message/C4GH5VQQYFZAD1?autoload=1&app_absent=0',
            icon: <FaWhatsapp size={sizeIcon} />,
        },
        {
            href: 'https://t.me/+e-UE2kn0mGkwZWVh',
            icon: <FaTelegramPlane size={sizeIcon} />,
        },
        {
            href: 'https://tiktok.com/@agenciadeviagem.eth',
            icon: <FaTiktok size={sizeIcon} />,
        },
        {
            href: 'mailto:agenciadeviagem.eth@gmail.com',
            icon: <AiOutlineMail size={sizeIcon} />,
        },
    ];

    return (
        <BoxFooter className='p-4'>
            <div className='md:flex md:justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='mb-6 md:mb-0 justify-center items-center flex'>
                    <Link to='/' className='flex items-center'>
                        <img
                            src={Logo}
                            className='h-12 mr-3'
                            alt='FlowBite Logo'
                        />
                        <img src={LogoName} className='h-12' />
                    </Link>
                </div>
                <div className='flex space-x-6 items-center sm:mt-0 justify-center'>
                    {arrAnchor.map((item, key) => {
                        const { href, icon } = item;
                        return (
                            <a
                                href={href}
                                className='text-white hover:text-gray-900 dark:hover:text-white'
                                key={key}
                            >
                                {icon}
                            </a>
                        );
                    })}
                </div>
            </div>
            <hr className='my-6 sm:mx-auto dark:border-gray-700 ' />
            <div className='flex items-center justify-center'>
                <span className='text-sm text-slate-300 dark:text-gray-400 capitalize'>
                    © 2023 travel club. todos os direitos reservados.
                </span>
            </div>
        </BoxFooter>
    );
};
