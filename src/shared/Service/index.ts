export const api = {
    getAll: async () => {
        let response = await fetch(
            'https://api.themoviedb.org/3/movie/popular?api_key=d9933aa94f6c72dd8b077673c359fc82&language=en-US&page=1'
        );
        let json = await response.json();
        return json;
    },
};
