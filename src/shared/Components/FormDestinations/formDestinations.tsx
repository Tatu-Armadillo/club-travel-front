import {
    FormControl,
    FormLabel,
    Input,
    Flex,
    Textarea,
    Button,
} from '@chakra-ui/react';
import { TitleTopic } from '../TitleTopic/titleTopic';
export const FormDestinations = () => {
    return (
        <Flex
            align='start'
            justify='start'
            direction='column'
            minHeight='80vh'
            width='full'
        >
            <TitleTopic title='Cadastro de Destinos' />
            <form className='grid grid-cols-6 place-content-center bg-orange-400 gap-16 p-5 ml-2 rounded-md'>
                <Flex direction='column' gap='.5rem'>
                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Clima</FormLabel>
                        <Textarea
                            placeholder='Fale sobre o clima'
                            resize='vertical'
                            size='md'
                            name='climate'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Moeda Local</FormLabel>
                        <Textarea
                            placeholder='Qual a moeda local?'
                            resize='vertical'
                            size='md'
                            name='localCurrency'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Transporte</FormLabel>
                        <Textarea
                            placeholder='Como é o transporte?'
                            resize='vertical'
                            size='md'
                            name='transport'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Alojamento</FormLabel>
                        <Textarea
                            placeholder='Fale sobre os alojamentos'
                            resize='vertical'
                            size='md'
                            name='accommodation'
                        />
                    </FormControl>
                </Flex>

                <Flex direction='column' gap='.5rem'>
                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>
                            Passeio Turístico
                        </FormLabel>
                        <Textarea
                            placeholder='Fale sobre os passeios'
                            resize='vertical'
                            size='md'
                            name='sightseeing'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Gastronômia</FormLabel>
                        <Textarea
                            placeholder='Fale sobre a gastronômia'
                            resize='vertical'
                            size='md'
                            name='gastronomy'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Idioma</FormLabel>
                        <Input
                            placeholder='Qual o idioma?'
                            resize='vertical'
                            size='md'
                            name='language'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Documentos</FormLabel>
                        <Textarea
                            placeholder='Quais documentos são necessários?'
                            resize='vertical'
                            size='md'
                            name='documents'
                        />
                    </FormControl>
                </Flex>

                <Flex direction='column' gap='.5rem'>
                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Segurança</FormLabel>
                        <Textarea
                            placeholder='Sobre segurança'
                            resize='vertical'
                            size='md'
                            name='security'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Custos</FormLabel>
                        <Textarea
                            placeholder='Sobre os custos'
                            resize='vertical'
                            size='md'
                            name='costs'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Saúde</FormLabel>
                        <Textarea
                            placeholder='Sobre saúde local'
                            resize='vertical'
                            size='md'
                            name='health'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Cultura</FormLabel>
                        <Textarea
                            placeholder='E a cultura?'
                            resize='vertical'
                            size='md'
                            name='culture'
                        />
                    </FormControl>
                </Flex>

                <Flex direction='column' gap='.5rem'>
                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Compras</FormLabel>
                        <Textarea
                            placeholder='Sobre compras locais'
                            resize='vertical'
                            size='md'
                            name='shopping'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Eventos</FormLabel>
                        <Textarea
                            placeholder='Fale dos Eventos'
                            resize='vertical'
                            size='md'
                            name='events'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Distâncias</FormLabel>
                        <Textarea
                            placeholder='Fale ???'
                            resize='vertical'
                            size='md'
                            name='distances'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Horários</FormLabel>
                        <Textarea
                            placeholder='Sobre os horários'
                            resize='vertical'
                            size='md'
                            name='schedules'
                        />
                    </FormControl>
                </Flex>

                <Flex direction='column' gap='.5rem'>
                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>
                            Conexão de Internet
                        </FormLabel>
                        <Textarea
                            placeholder='Conexão é boa?'
                            resize='vertical'
                            size='md'
                            name='internetConnection'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>
                            Transporte de Bagagem
                        </FormLabel>
                        <Textarea
                            placeholder='Sobre transp. da bagagem'
                            resize='vertical'
                            size='md'
                            name='baggageTransport'
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel fontWeight='bold'>Dicas Extras</FormLabel>
                        <Textarea
                            placeholder='Dê umas dicas'
                            resize='vertical'
                            size='md'
                            name='extraTips'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>
                            Informações Úteis
                        </FormLabel>
                        <Textarea
                            placeholder='Mais informações'
                            resize='vertical'
                            size='md'
                            name='usefulInformation'
                        />
                    </FormControl>
                </Flex>

                <Flex direction='column' gap='.5rem'>
                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Pagamentos</FormLabel>
                        <Textarea
                            placeholder='???'
                            resize='vertical'
                            size='md'
                            name='meansPayment'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>
                            Contato para Informações
                        </FormLabel>
                        <Textarea
                            placeholder='Info. para contato'
                            resize='vertical'
                            size='md'
                            name='contactInformation'
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Link da Imagem</FormLabel>
                        <Input type='text' name='imageLink' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Cidade</FormLabel>
                        <Input type='search' name='city' />
                    </FormControl>

                    <Button
                        type='button'
                        className='rounded-md w-42 capitalize bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-orange-600focus-visible:outline focus-visible:outline-2 hover:text-white  focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5'
                    >
                        Cadastrar
                    </Button>
                </Flex>
            </form>
        </Flex>
    );
};
