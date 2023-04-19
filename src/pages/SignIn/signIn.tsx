import { MainContainer, Image } from './signIn.styled';
import IconWorld from '@/assets/img/computer-login-animate.svg';
import { FaUser } from 'react-icons/fa';
import LogoWhite from '../../assets/img/web3travelclub4.png';
import LogoBlack from '../../assets/img/web3travelclub5.png';
import { Button } from '@chakra-ui/react';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { useForm } from 'react-hook-form';
import { IUser } from '@/shared/Interface/IUser';

export const SignIn = () => {
    const { title } = useContext(ThemeContext)
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLoading, setIsloading] = useState(false);
    const [img, setImg] = useState(LogoWhite);

    const { register, handleSubmit } = useForm<IUser>();

    const onSubmit = async (data: IUser) => {
        const { userName, password } = data;
        setIsloading(true);

        if (userName && password) {
            try {
                await auth.signIn(userName, password);
                navigate('/');
                return true;
            } catch (e) {
                alert('O username ou senha não correspondem ao banco de dados');
                return false;
            } finally {
                setIsloading(false);
            }
        }
    };

    useEffect(() => {
        title === "light" ? setImg(LogoWhite) : setImg(LogoBlack);
    }, [])

    return (
        <div className='flex items-center justify-between mx-auto max-w-7xl'>
            <Image src={IconWorld} alt='Imagem de Login' className='' />
            <MainContainer>
                <span className='flex gap-2 items-center'>
                    <FaUser size={'2em'} /><p className='text-xl font-bold'>login</p>
                    <img src={img} alt='as' className='w-20 ' />
                </span>
                {auth?.user ? (
                    <p className='text-xl font-bold pt-1'>
                        Você já está logado
                    </p>
                ) : (
                    <form action='' className='w-full'>
                        <div className='flex flex-col '>
                            <div className='flex flex-col items-center'>
                                <label htmlFor='user' className='block text-sm font-medium leading-6'>
                                    Usuário
                                </label>
                                <input
                                    type='text'
                                    id='user'
                                    placeholder='Digite seu usuário...'
                                    autoComplete='given-name'
                                    className='p-2 block w-4/6 rounded-md border-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    {...register("userName", { required: true })}
                                />
                            </div>
                            <div className='flex flex-col items-center mt-5'>
                                <label htmlFor='name' className='block text-sm font-medium leading-6'>
                                    Senha
                                </label>
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='Digite sua senha...'
                                    autoComplete='given-name'
                                    className='p-2 block w-4/6 rounded-md border-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    {...register("password", { required: true })}
                                />
                            </div>
                            <div className='flex flex-col items-center mt-10'>
                                <Button
                                    type="button"
                                    isLoading={isLoading}
                                    onClick={handleSubmit(onSubmit)}
                                    className="rounded-md w-32 capitalize bg-gradient-to-t from-black to-black hover:from-orange-200 hover:to-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 hover:text-black focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Entrar
                                </Button>
                            </div>
                        </div>
                    </form>
                )}
            </MainContainer>
        </div>
    );
};
