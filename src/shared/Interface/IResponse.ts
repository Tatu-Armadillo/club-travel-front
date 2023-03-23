import { IUser } from './IUser';
export interface IResponse {
    message: string;
    success: boolean;
    data: IUser;
}
