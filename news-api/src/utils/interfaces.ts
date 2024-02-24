export interface IArticle {
    source: {
        id: null | string;
        name: string;
    };
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
export interface IAppView {
    news: {
        draw(data: IArticle[]): void;
    };
    sources: { draw(data: ISources[]): void };
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
