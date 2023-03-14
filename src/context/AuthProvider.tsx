import { User } from '@/shared/Interface/IAuthContext';
import { useState } from 'react';
import { AuthContext } from './AuthContext';
import { api } from '@/shared/Service/index';
export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);

    const signIn = async (name: string, password: string) => {
        const data = await api.signIn(name, password);
        if (data.user && data.request_token) {
            setUser(data.user);
            return true;
        }
        return false;
    };

    const signOut = async () => {
        await api.signOut();
        setUser(null);
    };
    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
