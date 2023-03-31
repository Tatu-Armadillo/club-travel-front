import { IUser } from '@/shared/Interface/IUser';
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useApi } from '@/shared/hooks';
import { setToken } from '@/shared/services/setToken';
import light from '@/styles/themes/light';
import dark from '@/styles/themes/dark';
import { ThemeProvider } from 'styled-components';


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const api = useApi();
    const [user, setUser] = useState<IUser | null>(null);
    const [theme, setTheme] = useState(light);

    useEffect(() => {
        const hasToken = async () => {
            const saveData = localStorage.getItem('authenticationToken');
            if (saveData) {
                const data = await api.loginConnections.validateToken(saveData);
                if (data.token) {
                    setUser(data.user);
                }
            }
        };
        hasToken();
    }, []);

    const signIn = async (username: string, password: string) => {
        const response = await api.loginConnections.signIn(username, password);
        console.log(response);
        if (response.data.username && response.data.token) {
            setUser(response.data);
            setToken(response.data.token);
            return true;
        }
        return false;
    };

    const signOut = async () => {
        await api.loginConnections.signOut();
        setToken('');
        setUser(null);
    };

    const setThemeuser = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, setThemeuser }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AuthContext.Provider>
    );
};
