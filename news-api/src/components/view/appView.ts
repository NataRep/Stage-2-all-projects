import News from './news/news';
import Sources from './sources/sources';
//интерфейсы
import { IDataNews } from '../../utils/interfaces';
import { IDataSources } from '../../utils/interfaces';
import { IAppView } from '../../utils/interfaces';

export class AppView implements IAppView {
    news;
    sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IDataNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IDataSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
