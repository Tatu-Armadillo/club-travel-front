import { IContact } from "@/shared/Interface/IContact";
import { instance } from "../api/api";

const postContact = async (data: IContact) => {
    const response = await instance.post("/contact", data)
    return response.data;
};

export const ContactService = {
    postContact
};