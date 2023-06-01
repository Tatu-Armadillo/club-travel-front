import { instance } from "../api/api";
import { INewsWithSubnews, INews, IPage } from "@/shared/Interface";

const getNews = async (): Promise<IPage<INews[]>> => {
    const response = await instance.get("/news");
    return response.data;
};

const getNewsId = async (query: number): Promise<IPage<INews[]>> => await instance.get(`/news/${query}`);

const postNews = async (data: INewsWithSubnews) => await instance.post("/news", data);

export const NewsService = {
    getNews,
    getNewsId,
    postNews
};