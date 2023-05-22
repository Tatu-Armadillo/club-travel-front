import { createContext } from 'react';
import { IAdmin } from "@/shared/Interface/IAdmin";
import { IUser } from '@/shared/Interface/IUser';

export interface IAuthContext {
    user: IAdmin | null;
    signIn: (data: IUser) => Promise<boolean>;
    signOut: () => void;
    setThemeuser: () => void;
};


export const AuthContext = createContext<IAuthContext>(null!);