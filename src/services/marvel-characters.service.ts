import { ICharacter, ICharacterRoot, ITransformedCharacterInfo } from "../interfaces/character-data.interface";
import { ENVIRONMENTS } from "../environments/environment";
import UseHttp from "../hooks/http.hook";

const useMarvelCharactersService = () => {
    const { request, loading, error, clearError } = UseHttp();

    const apiBase = 'https://gateway.marvel.com:443/v1/public/characters';
    const apiKey = ENVIRONMENTS.apiKey;
    
    const getCharacterById = async (id: number) => {
        const response = await request(`${apiBase}/${id}?apikey=${apiKey}`)
            .then((data: ICharacterRoot) => data.data.results);
        
        return transformCharacter(response);
    }

    const getAllCharacters =  async () => {
        const response = await request(`${apiBase}?apikey=${apiKey}`) as ICharacterRoot;

        return response.data.results;
    }
  
    const getCharactersByOffsetAndLimit = async (offset: number, limit: number) => {
        const response = (
            await request(
                `${apiBase}?limit=${limit}&offset=${offset}&apikey=${apiKey}`
            ) as ICharacterRoot
        );
   
        return response.data.results;
    }

    const transformCharacter = (data: ICharacter[]) => {
        return ({
            name: data[0].name,
            description: data[0].description,
            homepage: data[0].resourceURI,
            thumbnail: `
            ${data[0].thumbnail.path}.${data[0].thumbnail.extension}
            `,
            wiki: data[0].urls[0].url
        } as ITransformedCharacterInfo);
    }

    return { 
        loading, 
        error, 
        clearError, 
        getCharacterById, 
        getAllCharacters, 
        getCharactersByOffsetAndLimit 
    };
}

export default useMarvelCharactersService;
