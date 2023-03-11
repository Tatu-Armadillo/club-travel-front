import { MainContainr } from './signIn.styled';
import { FaUser } from 'react-icons/fa';

export const SignIn = () => {
    return (
        <div className='flex items-center justify-center'>
            <MainContainr>
                <span className='flex gap-2'>
                    <FaUser size={'2em'} />
                    <p className='text-xl font-bold pt-1'>LOGIN</p>
                </span>
                <hr className='h-2 w-14 bg-black pt' />
            </MainContainr>
        </div>
    );
};
