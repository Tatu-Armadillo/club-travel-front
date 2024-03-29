import React from 'react';
import { IDestination, ICity } from '@/shared/Interface';
import { CityService, DestinationsService } from '@/shared/services';
import { useForm, useFieldArray } from 'react-hook-form';
import { IoMdCloseCircle } from 'react-icons/io';
import { BoxReferenceField } from './BoxReferenceField/boxReferenceField';
import { ResponseCityItem } from './ResponseCityItem/responseCityItem';
import { ResponseCityList } from './ResponseCityList/responseCityList';
import { Button } from '@/shared/Components';

export const FormDestinations = () => {
    const [listOpen, setListOpen] = React.useState(false);

    const { register, handleSubmit, watch, setValue, control, reset, formState: { errors }, } = useForm<IDestination>();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'references',
    });

    const [citiesList, setCitiesList] = React.useState<ICity[]>([]);

    const handleSearchCities = async (query: string) => {
        try {
            setListOpen(true);
            const response = await CityService.getCityByName(query);
            setCitiesList(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const removeReference = (indexRef: number) => {
        remove(indexRef);
    };

    const createNewDestination = async (data: IDestination) => {
        const { references, nameCity } = data;
        if (!nameCity) {
            alert('Você precisa escolher uma cidade');
            return;
        }
        if (!references || references.length === 0) {
            alert('É obrigatório que o destino tenha no mínimo 1 referência.');
            return;
        }
        try {
            await DestinationsService.postDestinations(data);
            alert('Cadastro inserido com sucesso!');
            reset();
            remove();
        } catch (error) {
            alert('Não foi possível concluir a operação');
            console.error(error);
        }
    };
    React.useEffect(() => {
        watch((data) => {
            if (!data.nameCity || data.nameCity.toString().trim().length > 5 || data.nameCity.toString().trim().length < 1) {
                return;
            }
            handleSearchCities(data.nameCity!);
        });
    }, [watch]);

    return (
        <div className='w-full flex mt-5 justify-center'>
            <form onSubmit={handleSubmit(createNewDestination)} className='bg-gray-300 flex flex-col p-2 rounded-md w-1/2 gap-2 border-2 border-black m-2'>
                <div className='flex flex-col justify-center w-full items-center'>
                    <label className='text-2xs font-bold ' htmlFor='title'>
                        Cidade
                    </label>

                    <input
                        className='w-64 md:w-1/2 p-1 rounded-md bg-slate-200 focus:bg-white border border-black'
                        type='text'
                        id='nameCity'
                        placeholder='Qualquer parte do nome da cidade'
                        {...register('nameCity', { required: true })}
                    />
                    {errors.nameCity && (<span>É obrigatório selecionar 1 cidade</span>)}
                    {listOpen && (
                        <ResponseCityList>
                            {citiesList.map((cities, index) => (
                                <ResponseCityItem
                                    key={index}
                                    idCity={cities.idCity}
                                    name={cities.name}
                                    externalFunc={() => {
                                        setValue('nameCity', cities.name);
                                        setListOpen(!listOpen);
                                    }}
                                />
                            ))}
                        </ResponseCityList>
                    )}
                </div>
                <BoxReferenceField
                    callAdd={() => append({ keyReference: '', imageLink: '', valor: '', })}
                    childrens={fields.map((field, index) => {
                        return (
                            <div key={field.id} className='flex flex-col justify-center w-full gap-2 items-center  border-2 bg-blue-400 rounded-md border-slate-100 p-2' >
                                <div className='flex justify-center w-full gap-2 items-center '>
                                    <label className='text-2xs font-bold flex justify-start' htmlFor={`references.${index}.keyReference`}>
                                        Título Referência
                                    </label>
                                    <input
                                        className='w-64 md:w-1/2 p-1 rounded-md bg-slate-200 focus:bg-white border border-black'
                                        type='text'
                                        id='title'
                                        {...register(`references.${index}.keyReference`)}
                                    />
                                    <label className='text-2xs font-bold flex justify-start' htmlFor={`references.${index}.imageLink`}>
                                        Link da Imagem
                                    </label>
                                    <input
                                        className='w-64 md:w-1/2 p-1 rounded-md bg-slate-200 focus:bg-white border border-black'
                                        type='text'
                                        id='title'
                                        {...register(`references.${index}.imageLink`)}
                                    />
                                    <Button
                                        typeButton='button'
                                        classButton='relative -top-5 left-1'
                                        funcClick={() => removeReference(index)}
                                        text={<IoMdCloseCircle size='1.3em' color='red' />}
                                    />
                                </div>
                                <div className='w-full flex flex-col items-center justify-center '>
                                    <label className='text-2xs font-bold' htmlFor={`references.${index}.valor`}>
                                        Conteúdo
                                    </label>
                                    <textarea className='h-44 w-full p-1 rounded-md bg-slate-200 focus:bg-white border border-black' id='title' {...register(`references.${index}.valor`)} />
                                </div>
                            </div>
                        );
                    })}
                />
                <div className='flex justify-center' >
                    <input type='submit' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-3/4' />
                </div>
            </form >
        </div >
    );
};
