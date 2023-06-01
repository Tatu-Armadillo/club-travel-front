import { instance } from '../api/api';
import { IPage, ICity } from '@/shared/Interface';

const getAllCities = async (): Promise<IPage<ICity[]>> => {
    const response = await instance.get('/city', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

const getCityByName = async (query: string): Promise<IPage<ICity[]>> => {
    const response = await instance.get(`/city?name=${query}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const CityService = {
    getAllCities,
    getCityByName,
};
