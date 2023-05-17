import { MouseEvent } from 'react';
import BackGround from '@/assets/img/bgPlane.jpg';
import { Flex, Box } from '@chakra-ui/react';
import { ButtonSelect } from '../ButtonSelect/buttonSelect';

export interface SelectFormProps {
    externalFunc: (e: MouseEvent<HTMLButtonElement>) => void;
}
export const SelectForm = ({ externalFunc }: SelectFormProps) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        externalFunc(e);
    };

    return (
        <Flex
            align='center'
            justify='center'
            minHeight='90vh'
            width='full'
            bgImage={BackGround}
            bgPosition='center center'
            bgSize='cover'
            bgRepeat='no-repeat'
        >
            <Box
                display='flex'
                flexDir='row'
                width='full'
                borderRadius='1rem'
                bgColor='rgba(255, 255, 255, 0.3)'
                boxShadow='30px 30px 20px rgba(0, 0, 0, 0.3);'
            >
                <ButtonSelect
                    name='newsButton'
                    text='Formulário de Notícias'
                    externalFunc={handleClick}
                />

                <ButtonSelect
                    name='destinationButton'
                    text='Formulário de Destinos'
                    externalFunc={handleClick}
                />
            </Box>
        </Flex>
    );
};
