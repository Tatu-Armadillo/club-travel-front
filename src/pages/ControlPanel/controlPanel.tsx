import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
import React, { useState } from 'react';
import { FormRouter } from '@/routes/FormRouter';

export const ControlPanel = () => {
    const [timerLogin, setTimerLogin] = useState(true);
    setTimeout(() => {
        setTimerLogin(false);
    }, 4000);

    const auth = useContext(AuthContext);
    return (
        <React.Fragment>
            {timerLogin ? (
                <h1 className='left-5 mt-5 bg-white p-1 flex items-center justify-center text-xl absolute'>
                    Olá{' '}
                    <span className='ml-2 text-xl font-semibold leading-10 text-orange-500'>
                        {auth.user?.name}{' '}
                    </span>
                    , Bem vindo ao seu painel de controle
                </h1>
            ) : null}
            <FormRouter />
        </React.Fragment>
    );
};
