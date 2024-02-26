import News from './news/news';
import Sources from './sources/sources';
//интерфейсы
import { IDataNews, IDataSources, IAppView } from '../../utils/interfaces';
export class AppView implements IAppView {
    public readonly news;
    public readonly sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: IDataNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: IDataSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
