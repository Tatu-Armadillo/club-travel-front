import { IResponsePagination } from './IResponsePagination';
import { IAdmin } from './IAdmin';

export interface IResponse {
    message: string;
    success: boolean;
    data: IAdmin;
    page?: IResponsePagination;
}
