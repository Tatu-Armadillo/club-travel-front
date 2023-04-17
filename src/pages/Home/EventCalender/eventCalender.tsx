import { Flex } from '@chakra-ui/react';
import { BsCalendar3 } from 'react-icons/bs';

export const EventCalender = () => {
    return (
        <Flex
            align='start'
            justify='start'
            width='90vw'
            wrap='wrap'
            borderRadius='1rem'
            minHeight='400px'
            margin='auto'
            bgColor={'#03258C'}
            padding={'15px'}
            direction={'column'}
            color={'#fff'}
        >
            <Flex gap={10} align={'center'} className='mb-5'>
                <strong className='text-4xl'>Calendário de Eventos</strong>
                <BsCalendar3 size={'2rem'} />
            </Flex>
            <Flex wrap={'wrap'} gap={10}>
                <div className='bg-white/5 hover:bg-white/30 transition-colors cursor-pointer w-48  p-3 rounded-md flex flex-col gap-1  items-start'>
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
