import { IUser } from "@/shared/Interface";
import { instance } from "../api/api";

const postSignin = async (data: IUser) => {
    const response = await instance.post("/auth/signin", data);
    console.log(response.data);
    
    return response.data;
};

const signOut = async () => {
    return { status: true };
};

const validToken = async () => {
    return { user: { id: 3, username: 'king' }, token: 'king123456'};
}

export const AuthService = {
    postSignin,
    signOut,
    validToken
};