import { IUser } from '@/shared/Interface/IUser';
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useApi } from '@/shared/hooks/useApi';
import { setToken } from '@/shared/services/setToken';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const api = useApi();
    const [user, setUser] = useState<IUser | null>(null);
    useEffect(() => {
        const hasToken = async () => {
            const saveData = localStorage.getItem('authenticationToken');
            if (saveData) {
                const data = await api.validateToken(saveData);
                if (data.user) {
                    setUser(data.user);
                }
            }
        };

        hasToken();
    }, []);

    const signIn = async (name: string, password: string) => {
        const data = await api.signIn(name, password);
        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
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
