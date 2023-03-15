import { IAuthContext } from '@/shared/Interface/IAuthContext';
import { createContext } from 'react';

export const AuthContext = createContext<IAuthContext>(null!);
