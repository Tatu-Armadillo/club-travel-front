import { instance } from '../api/api';
import { IDestination } from '@/shared/Interface/IDestionation';
import { IPage } from '@/shared/Interface/IPage';
import { IError } from '@/shared/Interface/IError';

const getDestinations = async () => {
    const response = await instance.get(`/destinations`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

const postDestinations = async (
    data: IDestination
): Promise<IPage<IDestination> | IError> => {
    const response = await instance.post('/destinations', data);
    console.log(response.data);

    return response.data;
};

const getDestinationsId = async (query: number) => {
    const response = await instance.get(`/destinations/${query}`);
    return response.data;
};

export const DestinationsService = {
    getDestinations,
    postDestinations,
    getDestinationsId,
};
