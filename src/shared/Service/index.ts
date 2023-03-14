import axios from 'axios';
export const api = {
    getAll: async () => {
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/popular?api_key=d9933aa94f6c72dd8b077673c359fc82&language=en-US&page=1'
        );
        return response.data;
    },
    postAddNew: async (title: string, body: string, userId: number) => {
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            { title, body, userId }
        );
        return response.data;
    },
    signIn: async (name: string, password: string) => {
        const response = await axios.post('./', { name, password });
        return response.data;
    },
    validateToken: async (token: string) => {
        const response = await axios.post('/validate', { token });
        return response.data;
    },
    signOut: async () => {
        const response = await axios.post('/logout');
        return response.data;
    },
};
