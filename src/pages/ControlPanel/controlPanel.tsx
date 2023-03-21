import { AuthContext } from '@/context/AuthContext';
import React, { useState, MouseEvent } from 'react';
import { useContext } from 'react';
import { Button, Flex, Box } from '@chakra-ui/react';
import { BiArrowFromLeft } from 'react-icons/bi';
import BackGround from '@/shared/img/image-background-panel.jpg';

export const ControlPanel = () => {
    const [timerLogin, setTimerLogin] = useState(true);
    setTimeout(() => {
        setTimerLogin(false);
    }, 4000);
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.name === 'newsButton')
            console.log('clicou no news');
        if (e.currentTarget.name === 'destinationButton')
            console.log('clicou no destinations');
    };
    const auth = useContext(AuthContext);
    return (
        <React.Fragment>
            {timerLogin ? (
                <h1 className='left-5 mt-5 bg-white p-1 flex items-center justify-center text-xl absolute'>
                    Olá{' '}
                    <span className='ml-2 text-xl font-semibold leading-10 text-orange-500'>
                        {auth.user?.name}{' '}
                    </span>
                    , Bem vindo ao seu painel de controle
                </h1>
            ) : null}
            <Flex
                align='center'
                justify='center'
                direction='column'
                minHeight='80vh'
                width='full'
                // bgImage={`url( ${BackGround})`}
                bgColor={'white'}
            >
                <Box
                    display='flex'
                    flexDir='column'
                    width='full'
                    bgColor='gray'
                    borderRadius='1rem'
                >
                    <Button
                        width='20rem'
                        height='10rem'
                        padding='1rem'
                        size='md'
                        name='newsButton'
                        onClick={handleClick}
                    >
                        Formulário de Notícias
                        <BiArrowFromLeft color='white' />
                    </Button>
                    <Button
                        width='20rem'
                        height='10rem'
                        padding='1rem'
                        size='md'
                        name='destinationButton'
                        onClick={handleClick}
                    >
                        Formulário de Destinos
                        <BiArrowFromLeft color='white' />
                    </Button>
                    <Button
                        width='20rem'
                        height='10rem'
                        padding='1rem'
                        size='md'
                        onClick={handleClick}
                    >
                        Formulário de Notícias
                        <BiArrowFromLeft color='white' />
                    </Button>
                </Box>
            </Flex>
        </React.Fragment>
    );
};
