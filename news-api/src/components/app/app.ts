import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IAppView } from '../../utils/interfaces';
import { IDataNews } from '../../utils/interfaces';
import { IDataSources } from '../../utils/interfaces';

class App {
    controller;
    view: IAppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        document
            .querySelector('.sources')
            .addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data: IDataNews) => this.view.drawNews(data))
            );
        this.controller.getSources((data: IDataSources) => this.view.drawSources(data));
    }
}

export default App;
