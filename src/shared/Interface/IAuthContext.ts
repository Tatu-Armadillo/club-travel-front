import { IUser } from "./IUser";

export interface IAuthContext {
    user: IUser | null;
    signIn: (name: string, password: string) => Promise<boolean>;
    signOut: () => void;
};