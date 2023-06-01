import { IAdmin, IUser } from '@/shared/Interface';
import { setToken } from '@/shared/services/setToken';
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import light from '@/styles/themes/light';
import dark from '@/styles/themes/dark';
import { ThemeProvider } from 'styled-components';
import { AuthService } from "@/shared/services"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<IAdmin | null>(null);
    const sessionTheme = JSON.parse(sessionStorage.getItem("Theme") || JSON.stringify(light));
    const [theme, setTheme] = useState(sessionTheme);

    useEffect(() => {
        const hasToken = async () => {
            const saveData = localStorage.getItem('authenticationToken');
            if (saveData) {
                const { user, token } = await AuthService.validToken();
                if (token) {
                    setUser(user);
                }
            }
        };
        hasToken();
    }, []);

    const signIn = async (data: IUser) => {
        const response = await AuthService.postSignin(data)

        if (response.data.username && response.data.token) {
            setUser(response.data);
            setToken(response.data.token);
            return true;
        }
        return false;
    };

    const signOut = async () => {
        await AuthService.signOut();
        setToken('');
        setUser(null);
    };

    const setThemeuser = () => {
        const themeToggle = sessionTheme.title === "light" ? dark : light;
        setTheme(themeToggle);
        sessionStorage.setItem("Theme", JSON.stringify(themeToggle));
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, setThemeuser }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AuthContext.Provider>
    );
};
