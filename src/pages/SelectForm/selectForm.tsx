import { MouseEvent } from 'react';
import BackGround from '@/shared/img/image-background-panel.jpg';
import { Button, Flex, Box } from '@chakra-ui/react';
import { BiArrowFromLeft } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
export const SelectForm = () => {
    const navigate = useNavigate();
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.name === 'newsButton') navigate('/formNews');
        if (e.currentTarget.name === 'destinationButton')
            console.log('clicou no destinations');
    };
    return (
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
    );
};
