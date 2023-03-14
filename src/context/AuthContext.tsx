import { createContext } from 'react';
import { User } from '@/shared/Interface/IAuthContext';

interface IAuthContext {
    user: User | null;
    signIn: (name: string, password: string) => Promise<boolean>;
    signOut: () => void;
}

export const AuthContext = createContext<IAuthContext>(null!);
