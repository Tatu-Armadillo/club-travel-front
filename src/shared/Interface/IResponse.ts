import { IResponsePagination } from './IResponsePagination';
import { IUser } from './IUser';
export interface IResponse {
    message: string;
    success: boolean;
    data: IUser;
    page?: IResponsePagination;
}
