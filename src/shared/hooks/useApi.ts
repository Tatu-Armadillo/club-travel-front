import axios from 'axios';
import { INews } from '../Interface/INews';
export const useApi = () => {
    const api = {
        generalSearchs: {
            getAll: async () => {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/movie/popular?api_key=d9933aa94f6c72dd8b077673c359fc82&language=en-US&page=1'
                );
                return response.data;
            },
            getNoticeByTitle: async (query: string): Promise<INews> => {
                const response = await axios.get(
                    `http://localhost:8080/blog/news?=${query}`
                );
                return response.data;
            },
        },
    };
    return api;
};
