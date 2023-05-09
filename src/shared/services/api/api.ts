import axios from "axios";

export const instance = axios.create({
    baseURL: "https://illustrious-cakes-production.up.railway.app/blog/"
})