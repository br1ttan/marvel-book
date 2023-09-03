import { ENVIRONMENTS } from "../environments/environment";
import UseHttp from "../hooks/http.hook";

export const useMarvelComicsService = () => {
    const { request, loading, error, errorMessageHttp } = UseHttp();

    const apiBase = 'https://gateway.marvel.com:443/v1/public/comics';
    const apiKey = ENVIRONMENTS.apiKey;

    const getAllComics = async () => {
        const response = await request(`${apiBase}?apikey=${apiKey}`);

        return response.data.results;
    }
    
    const getComicsByOffsetAndLimit = async (offset: number, limit: number) => {
        const response = await request(`${apiBase}?limit=${limit}&offset=${offset}&apikey=${apiKey}`);

        return response.data.results;
    }
  
    const getComicById = async (id: number) => {
        const response = await request(`${apiBase}/${id}?apikey=${apiKey}`);

        return await response.data.results[0];
    }

    return {
        request,
        loading,
        error,
        getAllComics,
        errorMessageHttp,
        getComicsById: getComicById,
        getComicsByOffsetAndLimit
    };
}
