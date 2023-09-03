import { Thumbnail } from "./common-interfaces.interface";

export interface ICharacterRoot {
  readonly code: number;
  readonly status: string;
  readonly copyright: string;
  readonly attributionText: string;
  readonly attributionHTML: string;
  readonly etag: string;
  readonly data: ICharacterData;
}

export interface ICharacterData {
  readonly offset: number;
  readonly limit: number;
  readonly total: number;
  readonly count: number;
  readonly results: ICharacter[];
}

export interface ICharacter {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly modified: string;
  readonly thumbnail: Thumbnail;
  readonly resourceURI: string;
  readonly comics: Comics;
  readonly series: Series;
  readonly stories: Stories;
  readonly events: Events;
  readonly urls: Url[];
}

export interface Comics {
  readonly available: number;
  readonly collectionURI: string;
  readonly items: Item[];
  readonly returned: number;
}

export interface ITransformedCharacterInfo {
  readonly name: string;
  readonly description: string;
  readonly homepage: string;
  readonly thumbnail: string;
  readonly wiki: string;
}

interface Item {
  readonly resourceURI: string;
  readonly name: string;
}

interface Series {
  readonly available: number;
  readonly collectionURI: string;
  readonly items: Item2[];
  readonly returned: number;
}

interface Item2 {
  readonly resourceURI: string;
  readonly name: string;
}

interface Stories {
  readonly available: number;
  readonly collectionURI: string;
  readonly items: Item3[];
  readonly returned: number;
}

interface Item3 {
  readonly resourceURI: string;
  readonly name: string;
  readonly type: string;
}

interface Events {
  readonly available: number;
  readonly collectionURI: string;
  readonly items: Item4[];
  readonly returned: number;
}

interface Item4 {
  readonly resourceURI: string;
  readonly name: string;
}

interface Url {
  readonly type: string;
  readonly url: string;
}
