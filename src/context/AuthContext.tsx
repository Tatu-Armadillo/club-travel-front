import { createContext } from 'react';
import { IUser } from "@/shared/Interface/IUser";

export interface IAuthContext {
    user: IUser | null;
    signIn: (name: string, password: string) => Promise<boolean>;
    signOut: () => void;
    setThemeuser: () => void;
};


export const AuthContext = createContext<IAuthContext>(null!);