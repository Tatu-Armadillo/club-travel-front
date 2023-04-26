import { createContext } from 'react';
import { IAdmin } from "@/shared/Interface/IAdmin";

export interface IAuthContext {
    user: IAdmin | null;
    signIn: (name: string, password: string) => Promise<boolean>;
    signOut: () => void;
    setThemeuser: () => void;
};


export const AuthContext = createContext<IAuthContext>(null!);