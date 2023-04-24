import { ICity } from "@/pages/ControlPanel/FormDestinations/formDestinations";
import { instance } from "../api/api"
import { IPage } from "@/shared/Interface/IPage";

type Props = {
    idCity: number,
    name: string
};

const getAllCities = async (): Promise<IPage<Props>> => {
    const response = await instance.get("/city", {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data.data;
};

const getCityByName = async (query: string): Promise<IPage<ICity[]>> => {
    const response = await instance.get(`/city?name=${query}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response.data.data;
}

export const CityService = {
    getAllCities,
    getCityByName,
}