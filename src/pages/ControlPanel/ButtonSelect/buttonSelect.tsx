import { Button } from '@chakra-ui/react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { MouseEvent } from 'react';
export type ButtonSelectProps = {
    name: string;
    text: string;
    externalFunc: (e: MouseEvent<HTMLButtonElement>) => void;
};
export const ButtonSelect = ({
    name,
    text,
    externalFunc,
}: ButtonSelectProps) => {
    return (
        <Button
            className='text-2xl w-2/3 font-semibold flex items-center gap-1 text-white'
            height='10rem'
            padding='1rem'
            transition='.5s all ease'
            size='md'
            name={name}
            _hover={{
                backgroundColor: 'orange',
                borderRadius: '1rem',
                gap: '1rem',
            }}
            onClick={externalFunc}
        >
            {text}
            <BsFillArrowRightSquareFill color='#03258C' size={'2rem'} />
        </Button>
    );
};
