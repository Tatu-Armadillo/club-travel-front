import { instance } from "../api/api";
import { INewsWithSubnews, INews, IPage } from "@/shared/Interface";

async function postNews(data: INewsWithSubnews) {
    await fetch("http://localhost:9090/blog/news", {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('authenticationToken')}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.headers)
        // .then((data) => {
        //     console.log("Success", data);
        // });
}

const getNews = async (): Promise<IPage<INews[]>> => {
    const response = await instance.get("/news");
    return response.data;
};

const getNewsId = async (query: number): Promise<IPage<INews[]>> => await instance.get(`/news/${query}`);

// const postNews = async (data: INewsWithSubnews) => await instance.post("/news", data, {headers: {Authorization: `Bearer ${localStorage.getItem('authenticationToken')}`}});

export const NewsService = {
    getNews,
    getNewsId,
    postNews
};