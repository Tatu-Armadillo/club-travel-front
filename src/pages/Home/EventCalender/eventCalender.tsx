import { Flex } from '@chakra-ui/react';
import { BsCalendar3 } from 'react-icons/bs';

export const EventCalender = () => {
    return (
        <Flex
            width={'90vw'}
            height={'70vh'}
            backgroundColor={'#03258C'}
            borderRadius={'1rem'}
            margin={'15px auto'}
            padding={'15px'}
            color={'#fff'}
            justifyContent={'start'}
            alignItems={'start'}
            gap={30}
            direction={'column'}
        >
            <Flex alignItems={'center'} gap={10}>
                <strong className='text-4xl'>Calendário de Eventos</strong>
                <BsCalendar3 size={'2rem'} />
            </Flex>
            <Flex wrap={'wrap'}>
                <div className='bg-white/5 hover:bg-white/10 transition-colors cursor-pointer w-48  p-3 rounded-md flex flex-col gap-1  items-start'>
                    <div>Imagem do evento</div>
                    <strong className='font-semibold'>Título do Evento</strong>
                    <p className='text-sm font-semibold text-zinc-400'>
                        Detalhes do evento
                    </p>
                    <p className='text-sm font-semibold text-zinc-400'>
                        Data do Evento
                    </p>
                </div>
            </Flex>
        </Flex>
    );
};
