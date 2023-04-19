import { IDestination } from '@/shared/Interface/IDestionation';
import { FormControl, FormLabel, Input, Flex, Textarea, Button, } from '@chakra-ui/react';
import { ChangeEvent, useState, KeyboardEvent, } from 'react';
import { useForm } from 'react-hook-form';

import { useApi } from '@/shared/hooks';
import { ResponseCityList } from '@/pages/ControlPanel/ResponseCityList/responseCityList';
import { ResponseCityItem } from '../ResponseCityItem/responseCityItem';

export interface ICity {
    idCity: number;
    name: string;
}
export const FormDestinations = () => {
    // const [buttonDisable, setButtonDisable] = useState(true);
    const [cities, setCities] = useState<ICity[]>([]);
    const { generalSearchs, generalInserts } = useApi();
    const { register, handleSubmit, formState: { errors } } = useForm<IDestination>();

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

    const handleClick = async (data: IDestination) => {
        try {
            await generalInserts.insertDestination(data);
            alert('Dados inseridos com sucesso!');
        } catch (error) {
            alert('Não foi possível cadastrar o destino, verifique os dados e tente novamente.');
            throw new Error('Cidade não enontrada no banco de dados asswhole');
        }
    };
    const validateKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (+e.key || e.key === '0') {
            e.preventDefault();
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.currentTarget.name.includes('city') && e.currentTarget.value.length > 3)
            handleSearchCities(e.currentTarget.value);
        setDestination({
            ...destination,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };
    const handleSearchCities = async (query: string) => {
        const res = await generalSearchs.getCityByName(query);
        setCities(res);
    };

    const choiceCity = (cityName: string) => {
        setDestination({ ...destination, city: cityName });
        setCities([]);
    };

    return (
        <Flex align='start' justify='start' direction='column' minHeight='80vh' width='full'>
            <form autoComplete='off' className=' lg:grid grid-cols-6 place-content-center bg-blue-800 gap-16 p-5 rounded-md m-auto'>
                <Flex direction='column' gap='.5rem'>
                    <FormControl >
                        <FormLabel fontWeight='bold' color='white'>
                            Clima
                        </FormLabel>
                        <Textarea
                            borderRadius={5}
                            padding={2}
                            placeholder='Fale sobre o clima'
                            resize='vertical'
                            size='md'
                            {...register("climate", { required: true })}
                        />
                        {errors.climate && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("localCurrency", { required: true })}
                        />
                        {errors.localCurrency && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("transport", { required: true })}
                        />
                        {errors.transport && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("accommodation", { required: true })}
                        />
                        {errors.accommodation && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("sightseeing", { required: true })}
                        />
                        {errors.sightseeing && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("gastronomy", { required: true })}
                        />
                        {errors.gastronomy && (<span className='capitalize'>campo obrigatório!</span>)}
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Idioma
                        </FormLabel>
                        <Input
                            placeholder='Qual o idioma?'
                            resize='vertical'
                            size='md'
                            {...register("language", { required: true })}
                        />
                        {errors.language && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("documents", { required: true })}
                        />
                        {errors.documents && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("security", { required: true })}
                        />
                        {errors.security && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("costs", { required: true })}
                        />
                        {errors.costs && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("health", { required: true })}
                        />
                        {errors.health && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("culture", { required: true })}
                        />
                        {errors.culture && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("shopping", { required: true })}
                        />
                        {errors.shopping && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("events", { required: true })}
                        />
                        {errors.events && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("distances", { required: true })}
                        />
                        {errors.distances && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("schedules", { required: true })}
                        />
                        {errors.schedules && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("internetConnection", { required: true })}
                        />
                        {errors.internetConnection && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("baggageTransport", { required: true })}
                        />
                        {errors.baggageTransport && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("extraTips")}
                        />
                        {errors.extraTips && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("usefulInformation", { required: true })}
                        />
                        {errors.usefulInformation && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("meansPayment", { required: true })}
                        />
                        {errors.meansPayment && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            {...register("contactInformation", { required: true })}
                        />
                        {errors.contactInformation && (<span className='capitalize'>campo obrigatório!</span>)}
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel fontWeight='bold' color='white'>
                            Link da Imagem
                        </FormLabel>
                        <Input
                            borderRadius={5}
                            padding={2}
                            type='text'
                            {...register("imageLink", { required: true })}
                        />
                        {errors.imageLink && (<span className='capitalize'>campo obrigatório!</span>)}
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
                            onKeyDown={validateKeyPress}
                        />
                        {cities.length != 0 ? (
                            <ResponseCityList>
                                {cities.map((city, key) => (
                                    <ResponseCityItem
                                        key={key}
                                        idCity={city.idCity}
                                        name={city.name}
                                        externalFunc={choiceCity}
                                    />
                                ))}
                            </ResponseCityList>
                        ) : null}
                    </FormControl>

                    <Button
                        onClick={handleSubmit(handleClick)}
                        type='submit'
                        className='rounded-md w-42 capitalize bg-gradient-to-t from-black to-black hover:from-orange-200 hover:to-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  hover:text-orange-600focus-visible:outline focus-visible:outline-2   focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5'>
                        Cadastrar
                    </Button>
                </Flex>
            </form>
        </Flex>
    );
};
