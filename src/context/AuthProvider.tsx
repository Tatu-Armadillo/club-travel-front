import { IUser } from '@/shared/Interface/IUser';
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useApi } from '@/shared/hooks';
import { setToken } from '@/shared/services/setToken';
import { ITheme } from '@/shared/Interface/ITheme';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const api = useApi();
    const [user, setUser] = useState<IUser | null>(null);
    const [theme, setTheme] = useState<ITheme | string>("light");

    useEffect(() => {
        console.log(user + 'alterado');
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
    }, []);

    const signIn = async (username: string, password: string) => {
        const response = await api.signIn(username, password);
        console.log(response);
        if (response.data.username && response.data.token) {
            setUser(response.data);
            setToken(response.data.token);
            return true;
        }
        return false;
    };

    const signOut = async () => {
        await api.signOut();
        setToken('');
        setUser(null);
    };

    const setThemeuser = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, theme, setThemeuser }}>
            {children}
        </AuthContext.Provider>
    );
};
