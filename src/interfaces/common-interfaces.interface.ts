import { ICharacterData } from "./character-data.interface";
import { IComics } from "./comics-data.interface";

export interface IResponse {
  readonly code: number;
  readonly status: string;
  readonly copyright: string;
  readonly attributionText: string;
  readonly attributionHTML: string;
  readonly etag: string;
  readonly data: ICharacterData | IComics;
}

export interface Thumbnail {
  readonly path: string;
  readonly extension: string;
}
