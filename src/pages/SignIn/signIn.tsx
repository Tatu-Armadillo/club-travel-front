import { MainContainr } from './signIn.styled';
import { FormEvent } from 'react';
import { FaUser } from 'react-icons/fa';
import Logo from '../../shared/img/web3travelclub4.png';
import { Button } from '@/shared/Components';

export const SignIn = () => {
    const handleSubmit = () => {
        console.log('Olá');
    };
    return (
        <div className='flex items-center justify-center'>
            <MainContainr>
                <span className='flex gap-2'>
                    <FaUser size={'2em'} />
                    <p className='text-xl font-bold pt-1'>LOGIN</p>
                    <img src={Logo} alt='as' className='w-20 ' />
                </span>

                <form action='' className='w-full '>
                    <div className='flex flex-col  '>
                        <div className='flex flex-col items-center'>
                            <label
                                htmlFor='user'
                                className='block text-sm font-medium leading-6  text-white'
                            >
                                Usuário
                            </label>
                            <input
                                type='text'
                                name='userName'
                                id='user'
                                placeholder='Digite seu usuário...'
                                autoComplete='given-name'
                                className='p-2 mt-2 block w-4/6 rounded-md border-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                        <div className='flex flex-col items-center'>
                            <label
                                htmlFor='name'
                                className='block text-sm font-medium leading-6 text-white'
                            >
                                Senha
                            </label>
                            <input
                                type='text'
                                name='password'
                                id='password'
                                placeholder='Digite seu nome...'
                                autoComplete='given-name'
                                className='p-2 mt-2 block w-4/6 rounded-md border-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                        <div className='flex flex-col items-center mt-20'>
                            <Button
                                typeButton='button'
                                funcClick={handleSubmit}
                                classButton='rounded-md w-32 capitalize bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-orange-400 hover:text-orange-600focus-visible:outline focus-visible:outline-2 hover:text-white  focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                text={'Entrar'}
                            />
                        </div>
                    </div>
                </form>
            </MainContainr>
        </div>
    );
};
