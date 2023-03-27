import { AuthContext } from '@/context/AuthContext';
import React, { useState, useContext } from 'react';
import {SelectForm, FormNews, FormDestinations} from "@/shared/Components";
import { useComponent } from '@/shared/hooks';

export const ControlPanel = () => {
    const [timerLogin, setTimerLogin] = useState(true);
    setTimeout(() => {
        setTimerLogin(false);
    }, 4000);

    const componentList = [
        <SelectForm
            funcfunc={(e) => {
                changeComponent(e);
            }}
        />,
        <FormNews />,
        <FormDestinations />,
    ];

    const { currentComponent, changeComponent } = useComponent(componentList);

    const auth = useContext(AuthContext);
    return (
        <React.Fragment>
            {timerLogin ? (
                <h1 className='left-5 mt-5 bg-white p-1 flex items-center justify-center text-xl absolute'>
                    Olá{' '}
                    <span className='ml-2 text-xl font-semibold leading-10 text-orange-500'>
                        {auth.user?.username}{' '}
                    </span>
                    , Bem vindo ao seu painel de controle
                </h1>
            ) : null}
            {currentComponent}
        </React.Fragment>
    );
};
