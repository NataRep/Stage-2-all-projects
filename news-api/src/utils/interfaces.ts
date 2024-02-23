interface Sources {
    id: null | string;
    name: string;
}
export interface IArticle {
    source: Sources;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
export interface IDataNews {
    status: string;
    totalResults: number;
    articles: IArticle[];
}

export interface ISources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface IDataSources {
    status: string;
    sources: ISources[];
}

interface INews {
    draw(data: IArticle[]): void;
}

type source = { draw(data: ISources[]): void };
export interface IAppView {
    news: INews;
    sources: source;
    drawNews: (data: IDataNews) => void;
    drawSources: (data: IDataSources) => void;
}
export interface IOptions {
    apiKey?: string;
    sources?: string;
}

export interface IObject {
    [index: string]: string;
}
