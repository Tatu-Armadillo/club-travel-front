import { createContext } from 'react';
import { IAdmin, IUser } from "@/shared/Interface";

export interface IAuthContext {
    user: IAdmin | null;
    signIn: (data: IUser) => Promise<boolean>;
    signOut: () => void;
    setThemeuser: () => void;
};


export const AuthContext = createContext<IAuthContext>(null!);