import axios from "axios";
import { IResponse } from "../interfaces/character-data.interface";
import { ITransformedCharacterInfo } from "../interfaces/transformed-character-info.interface";
import { ENVIRONMENTS } from "../environments/environment";

export class MarvelService {
    private readonly apiBase = 'https://gateway.marvel.com:443/v1/public';
    private readonly apiKey = ENVIRONMENTS.apiKey;
    
    public getCharacterById = (id: number) => {
        return (
            this.getResource(
                `${this.apiBase}/characters/${id}?apikey=${this.apiKey}`
            ) as Promise<IResponse>
        );
    }

    public getAllCharacters = () => {
        return (
            this.getResource(
                `${this.apiBase}/characters?apikey=${this.apiKey}`
            ) as Promise<IResponse>
        );
    }
  
    public getCharactersByOffsetAndLimit = (offset: number, limit: number) => {
        return (
            this.getResource(
                `${this.apiBase}/characters?limit=${limit}&offset=${offset}&apikey=${this.apiKey}`
            ) as Promise<IResponse>
        );
    }

    public transformCharacter = (data: IResponse) => {
        return ({
            name: data.data.results[0].name,
            description: data.data.results[0].description,
            homepage: data.data.results[0].resourceURI,
            thumbnail: `
            ${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}
            `,
            wiki: data.data.results[0].urls[0].url
        } as ITransformedCharacterInfo);
    }

    private getResource = async (url: string) => {
        const res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${res.status}`);
        }

        return await res.json();
    }

    public getResource2 = async () => {
        const res = axios.get(`${this.apiBase}/characters?apikey=${this.apiKey}`);
    
        if (!(await res).status) {
            throw new Error(`Could not fetch ${(await res).statusText}`);
        }

        return (await res).data;
    }
}
