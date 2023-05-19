import { instance } from '../api/api';
import { IPage } from '@/shared/Interface/IPage';
import axios from 'axios';

export type ICity = {
    idCity: number;
    name: string;
};

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
