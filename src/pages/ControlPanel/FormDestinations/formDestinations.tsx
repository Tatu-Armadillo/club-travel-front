import { IDestination } from '@/shared/Interface/IDestionation';
import {
    FormControl,
    FormLabel,
    Input,
    Flex,
    Textarea,
    Button,
} from '@chakra-ui/react';
import { ChangeEvent, useState, MouseEvent } from 'react';

import { useApi } from '@/shared/hooks';
import { providerInput } from '@/shared/services/providerInput';
import { ResponseCityList } from '@/pages/ControlPanel/ResponseCityList/responseCityList';
import { ResponseCityItem } from '../ResponseCityItem/responseCityItem';

export interface ICity {
    idCity: number;
    name: string;
}
export const FormDestinations = () => {
    const [cities, setCities] = useState<ICity[]>([]);
    const { generalSearchs, generalInserts } = useApi();

    const [destination, setDestination] = useState<IDestination>({
        climate: '',
        localCurrency: '',
        transport: '',
        accommodation: '',
        sightseeing: '',
        gastronomy: '',
        language: '',
        documents: '',
        security: '',
        costs: '',
        health: '',
        culture: '',
        shopping: '',
        events: '',
        distances: '',
        schedules: '',
        internetConnection: '',
        baggageTransport: '',
        extraTips: '',
        usefulInformation: '',
        meansPayment: '',
        contactInformation: '',
        imageLink: '',
        city: '',
    });
    const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(Object.values(destination));
        if (providerInput().validateInputs(Object.values(destination)))
            try {
                await generalInserts.insertDestination(destination);
                alert('Dados inseridos com sucesso!');
            } catch (error) {
                alert('Deu ruim');
            }
    };
    const handleSearchCities = async (query: string) => {
        const res = await generalSearchs.getCityByName(query);
        setCities(res);
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if (
            e.currentTarget.name.includes('city') &&
            e.currentTarget.value.length > 3
        )
            handleSearchCities(e.currentTarget.value);
        setDestination({
            ...destination,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };
    const choiceCity = (cityName: string) => {
        setDestination({ ...destination, city: cityName });
        setCities([]);
    };
    return (
        <Flex
            align='start'
            justify='start'
            direction='column'
            minHeight='80vh'
            width='full'
        >
            <form
                autoComplete='off'
                className=' lg:grid grid-cols-6 place-content-center bg-blue-800 gap-16 p-5 rounded-md m-auto'
            >
                <Flex direction='column' gap='.5rem'>
                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Clima
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Fale sobre o clima'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='climate'
                            value={destination.climate}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Moeda Local
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Qual a moeda local?'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='localCurrency'
                            value={destination.localCurrency}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Transporte
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Como é o transporte?'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='transport'
                            value={destination.transport}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Alojamento
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Fale sobre os alojamentos'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='accommodation'
                            value={destination.accommodation}
                        />
                    </FormControl>
                </Flex>

                <Flex direction='column' gap='.5rem'>
                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Passeio Turístico
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Fale sobre os passeios'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='sightseeing'
                            value={destination.sightseeing}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Gastronômia
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Fale sobre a gastronômia'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='gastronomy'
                            value={destination.gastronomy}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Idioma
                        </FormLabel>
                        <Input
                            placeholder='Qual o idioma?'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='language'
                            value={destination.language}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Documentos
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Quais documentos são necessários?'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='documents'
                            value={destination.documents}
                        />
                    </FormControl>
                </Flex>

                <Flex direction='column' gap='.5rem'>
                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Segurança
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Sobre segurança'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='security'
                            value={destination.security}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Custos
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Sobre os custos'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='costs'
                            value={destination.costs}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Saúde
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Sobre saúde local'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='health'
                            value={destination.health}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Cultura
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='E a cultura?'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='culture'
                            value={destination.culture}
                        />
                    </FormControl>
                </Flex>

                <Flex direction='column' gap='.5rem'>
                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Compras
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Sobre compras locais'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='shopping'
                            value={destination.shopping}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Eventos
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Fale dos Eventos'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='events'
                            value={destination.events}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Distâncias
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Fale ???'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='distances'
                            value={destination.distances}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Horários
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Sobre os horários'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='schedules'
                            value={destination.schedules}
                        />
                    </FormControl>
                </Flex>

                <Flex direction='column' gap='.5rem'>
                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Conexão de Internet
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Conexão é boa?'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='internetConnection'
                            value={destination.internetConnection}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Transporte de Bagagem
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Sobre transp. da bagagem'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='baggageTransport'
                            value={destination.baggageTransport}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel fontWeight='bold' color='white'>
                            Dicas Extras
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Dê umas dicas'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='extraTips'
                            value={destination.extraTips}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Informações Úteis
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Mais informações'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='usefulInformation'
                            value={destination.usefulInformation}
                        />
                    </FormControl>
                </Flex>

                <Flex direction='column' gap='.5rem'>
                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Pagamentos
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='???'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='meansPayment'
                            value={destination.meansPayment}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Contato para Informações
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Info. para contato'
                            resize='vertical'
                            size='md'
                            onChange={handleChange}
                            name='contactInformation'
                            value={destination.contactInformation}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Link da Imagem
                        </FormLabel>
                        <Input
                            borderRadius={5}
                            padding={2}
                            type='text'
                            onChange={handleChange}
                            name='imageLink'
                            value={destination.imageLink}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Cidade
                        </FormLabel>
                        <Input
                            borderRadius={5}
                            padding={2}
                            placeholder='escreva 3 letras'
                            type='text'
                            onChange={handleChange}
                            name='city'
                            value={destination.city}
                        />
                        {cities.length != 0 ? (
                            <ResponseCityList>
                                {cities.map((city) => (
                                    <ResponseCityItem
                                        idCity={city.idCity}
                                        name={city.name}
                                        externalFunc={choiceCity}
                                    />
                                ))}
                            </ResponseCityList>
                        ) : null}
                    </FormControl>

                    <Button
                        onClick={handleClick}
                        type='submit'
                        className='rounded-md w-42 capitalize bg-gradient-to-t from-black to-black hover:from-orange-200 hover:to-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  hover:text-orange-600focus-visible:outline focus-visible:outline-2   focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5'
                    >
                        Cadastrar
                    </Button>
                </Flex>
            </form>
        </Flex>
    );
};
