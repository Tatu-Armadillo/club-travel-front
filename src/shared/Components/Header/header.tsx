import { useContext, useState } from 'react';
import { Navbar, BoxImages, BoxLogo } from './header.styled';
import LogoName from '../../../assets/img/web3travelclub4.png';
import Logo from '../../../assets/img/web3reallogoamarela.png';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/Components';
import { BsMoon, BsSun, IoMdMenu, BiMenuAltLeft } from "react-icons/all";
import { ThemeContext } from 'styled-components';
import { AuthContext } from '@/context/AuthContext';

export const Header = () => {
    const { title } = useContext(ThemeContext);
    const auth = useContext(AuthContext);
    const iconSet = <IoMdMenu color='white' className='block h-6 w-6' />;
    const [icon, setIcon] = useState(iconSet);

    type Props = {
        name: string;
        link: string;
    };

    const arrItems: Props[] = [
        { name: 'início', link: '/club-travel-front' },
        { name: 'infográficos', link: '/club-travel-front/infographics' },
        { name: 'login', link: '/club-travel-front/signIn' },
        { name: 'sobre nós', link: '/club-travel-front/about' },
    ];
    if (auth.user) {
        arrItems.push({ name: 'painel de controle', link: '/club-travel-front/controlPanel' });
    };

    const handleClassHidden = () => {
        const addHidden = document.querySelector('#mobile-menu')?.classList.toggle('hidden');

        const newIcon = <BiMenuAltLeft color='white' className='block h-6 w-6' />;

        addHidden === false ? setIcon(newIcon) : setIcon(iconSet);
    };

    const handleTheme = () => {
        auth.setThemeuser();
    };

    return (
        <header>
            <Navbar>
                <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                    <div className='relative flex h-20 items-center justify-between'>
                        <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                            <Button
                                typeButton='button'
                                classButton='inline-flex items-center justify-center teste rounded-md p-2 text-gray-400 hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                text={icon}
                                funcClick={handleClassHidden}
                            />
                        </div>
                        <BoxImages>
                            <Link to='/club-travel-front'>
                                <BoxLogo
                                    className='hidden lg:block'
                                    src={Logo}
                                    alt='Your Company'
                                />
                                <BoxLogo
                                    className='hidden lg:block'
                                    src={LogoName}
                                    alt='Your Company'
                                />
                            </Link>
                        </BoxImages>
                        <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                            <BoxImages>
                                <Link to='/club-travel-front'>
                                    <BoxLogo
                                        className='lg:hidden sm:block hidden'
                                        src={Logo}
                                        alt='Your Company'
                                    />
                                    <BoxLogo
                                        className='lg:hidden block'
                                        src={LogoName}
                                        alt='Your Company'
                                    />
                                </Link>
                            </BoxImages>
                        </div>
                        <div className='hidden sm:ml-6 sm:block'>
                            <div className='flex space-x-4'>
                                {arrItems.map((item, key) => {
                                    const { link, name } = item;
                                    if (name === 'login' && auth.user) return;
                                    return (
                                        <Link
                                            to={link}
                                            className='capitalize text-gray-300 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-base font-medium'
                                            key={key}>
                                            {name}
                                        </Link>
                                    );
                                })}
                                {auth.user && (
                                    <Link
                                        to={'/club-travel-front'}
                                        className='capitalize text-gray-300 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-base font-medium'
                                        onClick={() => auth.signOut()} >
                                        Sair
                                    </Link>
                                )}
                                <span onClick={handleTheme} className="flex items-center text-gray-300 hover:text-white hover:bg-blue-900 rounded-md px-3 py-2 hover:cursor-pointer">
                                    {title === "light" ? <BsSun/> : <BsMoon />}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:hidden md:hidden sm:hidden hidden' id='mobile-menu'>
                    <div className='space-y-1 px-2 pt-2 pb-3'>
                        {arrItems.map((item, key) => {
                            const { link, name } = item;
                            return (
                                <Link
                                    to={link}
                                    className='capitalize text-center text-gray-300 hover:bg-blue-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                                    key={key}
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </Navbar>
        </header>
    );
};
