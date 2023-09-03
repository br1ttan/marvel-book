import { Thumbnail } from "./common-interfaces.interface";

export interface IComicsRoot {
  readonly code: number;
  readonly status: string;
  readonly copyright: string;
  readonly attributionText: string;
  readonly attributionHTML: string;
  readonly etag: string;
  readonly data: IComicsData;
}

export interface IComicsData {
  readonly offset: number;
  readonly limit: number;
  readonly total: number;
  readonly count: number;
  readonly results: IComics[];
}

export interface IComics {
  readonly id: number;
  readonly digitalId: number;
  readonly title: string;
  readonly issueNumber: number;
  readonly variantDescription: string;
  readonly description?: string;
  readonly modified: string;
  readonly isbn: string;
  readonly upc: string;
  readonly diamondCode: string;
  readonly ean: string;
  readonly issn: string;
  readonly format: string;
  readonly pageCount: number;
  readonly textObjects: TextObject[];
  readonly resourceURI: string;
  readonly urls: Url[];
  readonly series: Series;
  readonly variants: Variant[];
  readonly collections: unknown[];
  readonly collectedIssues: CollectedIssue[];
  readonly dates: Date[];
  readonly prices: Price[];
  readonly thumbnail: Thumbnail;
  readonly images: Image[];
  readonly creators: Creators;
  readonly characters: Characters;
  readonly stories: Stories;
  readonly events: Events;
}

interface TextObject {
  readonly type: string;
  readonly language: string;
  readonly text: string;
}

interface Url {
  readonly type: string;
  readonly url: string;
}

interface Series {
  readonly resourceURI: string;
  readonly name: string;
}

interface Variant {
  readonly resourceURI: string;
  readonly name: string;
}

interface CollectedIssue {
  readonly resourceURI: string;
  readonly name: string;
}

interface Date {
  readonly type: string;
  readonly date: string;
}

interface Price {
  readonly type: string;
  readonly price: number;
}

interface Image {
  readonly path: string;
  readonly extension: string;
}

interface Creators {
  readonly available: number;
  readonly collectionURI: string;
  readonly items: Item[];
  readonly returned: number;
}

interface Item {
  readonly resourceURI: string;
  readonly name: string;
  readonly role: string;
}

interface Characters {
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
  readonly items: unknown[];
  readonly returned: number;
}
