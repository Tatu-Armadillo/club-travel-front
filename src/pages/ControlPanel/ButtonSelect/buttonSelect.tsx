import { Button } from '@chakra-ui/react';
import { BiArrowFromLeft } from 'react-icons/bi';
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
            width='20rem'
            height='10rem'
            padding='1rem'
            borderRadius='1rem'
            transition='.5s all ease'
            size='md'
            name={name}
            _hover={{
                backgroundColor: 'orange',
            }}
            onClick={externalFunc}
        >
            {text}
            <BiArrowFromLeft color='white' />
        </Button>
    );
};
