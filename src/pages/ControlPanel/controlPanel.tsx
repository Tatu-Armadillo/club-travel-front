import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';

export const ControlPanel = () => {
    const auth = useContext(AuthContext);
    return (
        <div>
            <p>Olá {auth.user?.name}, Bem vindo ao seu painel de controle</p>
        </div>
    );
};
