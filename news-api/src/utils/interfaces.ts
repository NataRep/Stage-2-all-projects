interface Scouce {
    id: null | string;
    name: string;
}
export interface IArticle {
    source: Scouce;
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

export interface IScource {
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
    sources: IScource[];
}

interface INews {
    draw(data: IArticle[]): void;
}

//interface ISources {
//
//}

export interface IAppView {
    news: INews;
    sources: any;
}
