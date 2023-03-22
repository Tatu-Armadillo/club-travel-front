import axios from 'axios';

export const useApi = () => {
    const api = {
        getAll: async () => {
            const response = await axios.get(
                'https://api.themoviedb.org/3/movie/popular?api_key=d9933aa94f6c72dd8b077673c359fc82&language=en-US&page=1'
            );
            return response.data;
        },
        postAddNew: async (name: string, phone: string, email: string) => {
            const response = await axios.post(
                'http://localhost:8080/blog/contact',
                { name, phone, email }
            );
            return response.data;
        },
        signIn: async (username: string, password: string) => {
            try {
                const res = await axios.post(
                    'http://localhost:8080/blog/auth/signin',
                    { username, password }
                );
                return res.data;
            } catch (error) {
                console.error(error);
            }
        },
        validateToken: async (token: string) => {
            return { user: { id: 3, username: 'king' }, token: 'king123456' };
            const response = await axios.post('/validate', token);
            return response.data;
        },
        signOut: async () => {
            return { status: true };
            const response = await axios.post('/logout');
            return response.data;
        },
    };
    return api;
};
