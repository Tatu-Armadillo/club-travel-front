import { IUser } from '@/shared/Interface/IUser';
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useApi } from '@/shared/hooks';
import { setToken } from '@/shared/services/setToken';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const api = useApi();
    const [user, setUser] = useState<IUser | null>(null);
    useEffect(() => {
        const hasToken = async () => {
            const saveData = localStorage.getItem('authenticationToken');
            if (saveData) {
                const data = await api.validateToken(saveData);
                if (data.token) {
                    setUser(data.user);
                }
            }
        };
        hasToken();
        console.log(user + 'alterado');
    }, [user]);

    const signIn = async (username: string, password: string) => {
        const data = await api.signIn(username, password);
        if (data.data.username && data.data.token) {
            setUser(data.data.user);
            setToken(data.data.token);
            return true;
        }
        return false;
    };

    const signOut = async () => {
        await api.signOut();
        setToken('');
        setUser(null);
    };
    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
