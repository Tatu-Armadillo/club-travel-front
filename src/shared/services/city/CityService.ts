import { ICity } from "@/pages/ControlPanel/FormDestinations/formDestinations";
import { instance } from "../api/api"


const getAllCities = async () => {
    const response = await instance.get("/city", {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data.data;
};

const getCityByName = async (query: string): Promise<ICity[]> => {
    const response = await instance.get(`/city?name=${query}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response.data.data;
}


export const CityService = {
    getAllCities,
    getCityByName
}