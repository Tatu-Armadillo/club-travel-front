import { instance } from "../api/api"
import { IResponse } from "@/shared/Interface/IResponse";
import { IDestination } from "@/shared/Interface/IDestionation";

const getDestinations = async () => {
    const response = await instance.get("/destinations", {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response.data;
}

const postDestinations = async (data: IDestination): Promise<IResponse> => {
    const response = await instance.post("/contact", data);
    return response.data;
}

export const DestinationsService = {
    getDestinations,
    postDestinations
}