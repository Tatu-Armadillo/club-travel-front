import { ChangeEvent, useState } from 'react';
import { useApi } from '@/shared/hooks';
import { Button } from '@/shared/Components';
import { loginIsValid } from '@/shared/services/loginIsValid';

interface ModalProps {
    externFunc: () => void;
}

interface ModalFormProps {
    name: string;
    phone: string;
    email: string;
}

export const Modal = ({ externFunc }: ModalProps) => {
    const api = useApi();
    const [inputValues, setInputValue] = useState<ModalFormProps>({
        name: '',
        phone: '',
        email: '',
    });
    const handleClick = async () => {
        const { name, phone, email } = inputValues;
        if (loginIsValid(name, phone, email)) {
            try {
                const action = await api.generalInserts.insertContact(
                    name,
                    phone,
                    email
                );
                alert('Parabens seu cadastro funfou newba');
                externFunc();
            } catch (error) {
                console.log(error);
            }
        }
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue({
            ...inputValues,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };
    return (
        <div
            className='relative z-10'
            aria-labelledby='modal-title'
            role='dialog'
            aria-modal='true'
        >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

            <div className='fixed inset-0 z-10 overflow-y-auto mb-10'>
                <div className='flex min-h-full min-w-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                    <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                        <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                            <div className='sm:flex sm:items-start'>
                                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                                    <h3
                                        className='text-base font-semibold leading-6 text-gray-900'
                                        id='modal-title'
                                    >
                                        Preencha os dados e esteja sempre ligado
                                        nos melhores lugares para me mamar
                                    </h3>
                                    <form
                                        className='flex flex-col mt-5'
                                        action=''
                                    >
                                        <div className='col-span-6 sm:col-span-3'>
                                            <label
                                                htmlFor='name'
                                                className='block text-sm font-medium leading-6 text-gray-900'
                                            >
                                                Nome
                                            </label>
                                            <input
                                                onChange={handleChange}
                                                type='text'
                                                name='name'
                                                id='name'
                                                value={inputValues.name}
                                                placeholder='Digite seu nome...'
                                                autoComplete='given-name'
                                                className='p-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                            />
                                        </div>
                                        <div className='col-span-6 sm:col-span-3'>
                                            <label
                                                htmlFor='phone'
                                                className='block text-sm font-medium leading-6 text-gray-900'
                                            >
                                                Número
                                            </label>
                                            <input
                                                onChange={handleChange}
                                                type='text'
                                                name='phone'
                                                id='phone'
                                                maxLength={11}
                                                value={inputValues.phone}
                                                placeholder='(xx) x xxxx-xxxx'
                                                className='p-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                            />
                                        </div>
                                        <div className='col-span-6 sm:col-span-4'>
                                            <label
                                                htmlFor='mail'
                                                className='block text-sm font-medium leading-6 text-gray-900'
                                            >
                                                Email
                                            </label>
                                            <input
                                                onChange={handleChange}
                                                type='email'
                                                name='email'
                                                id='email'
                                                value={inputValues.email}
                                                placeholder='seuemail@email.com'
                                                className='p-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                            <Button
                                classButton={
                                    'capitalize inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400  sm:ml-3 sm:w-auto'
                                }
                                text={'enviar'}
                                typeButton={'submit'}
                                funcClick={handleClick}
                            />

                            <Button
                                classButton={
                                    'mt - 3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset capitalize ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                                }
                                text={'cancelar'}
                                typeButton={'button'}
                                funcClick={externFunc}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
