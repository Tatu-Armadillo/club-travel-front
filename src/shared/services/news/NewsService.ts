import { IPage } from "@/shared/Interface/IPage";
import { instance } from "../api/api";
import { INewsWithSubnews, INews } from "@/shared/Interface/INews";

const getNews = async (): Promise<IPage<INews[]>> => {
    const response = await instance.get("/news");
    return response.data;
};

const getNewsId = async (query: number): Promise<IPage<INews[]>> => {
    const response = await instance.get(`/news/${query}`);
    return response.data;
};

const postNews = async (data: INewsWithSubnews) => {
    const response = await instance.post("/news", data);
    return response.data;
}

export const NewsService = {
    getNews,
    getNewsId,
    postNews
};