import { instance } from "../api/api"
import { IDestination } from "@/shared/Interface/IDestionation";
import { IPage } from "@/shared/Interface/IPage";

const getDestinations = async () => {
    const response = await instance.get(`/destinations`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response.data;
};

const postDestinations = async (data: IDestination): Promise<IPage<IDestination>> => {
    const response = await instance.post("/destinations", data);
    return response.data;
};

const getDestinationsId = async (query: number) => {
    const response = await instance.get(`/destinations/${query}`)
    return response.data;
};

export const DestinationsService = {
    getDestinations,
    postDestinations,
    getDestinationsId
}