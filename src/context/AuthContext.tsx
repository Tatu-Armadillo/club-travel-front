import { createContext } from 'react';
import { IUser } from "@/shared/Interface/IUser";
import { ITheme } from '@/shared/Interface/ITheme';

export interface IAuthContext {
    user: IUser | null;
    signIn: (name: string, password: string) => Promise<boolean>;
    signOut: () => void;
    theme: ITheme | string;
    setThemeuser: () => void;
};


export const AuthContext = createContext<IAuthContext>(null!);