import { IPage } from "@/shared/Interface/IPage";
import { instance } from "../api/api";
import { INewsWithSubnews, INews } from "@/shared/Interface/INews";

const getNews = async (): Promise<IPage<INews[]>> => await instance.get("/news");

const getNewsId = async (query: number): Promise<IPage<INews[]>> => await instance.get(`/news/${query}`);

const postNews = async (data: INewsWithSubnews) => await instance.post("/news", data);

export const NewsService = {
    getNews,
    getNewsId,
    postNews
};