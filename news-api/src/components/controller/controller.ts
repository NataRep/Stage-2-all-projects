import AppLoader from './appLoader';
import { IDataNews, IDataSources } from '../../utils/interfaces';
import { endpointType } from '../../utils/types';

class AppController extends AppLoader {
    public getSources(callback: (data: IDataSources) => void) {
        super.getResp(
            {
                endpoint: endpointType.SOURCES,
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data: IDataNews) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                //у всех остальных источников проверяю нужно ли убрать класс
                const newsSourcesButtons: HTMLElement[] = Array.from(document.querySelectorAll('.source__item'));
                newsSourcesButtons.forEach((el) => {
                    if (el.classList.contains('current')) {
                        el.classList.remove('current');
                    }
                });
                //выделяю классом кнопку с источником отображаемых новостией
                target.classList.add('current');

                //

                const sourceId: string | null = target.getAttribute('data-source-id');

                if (sourceId) {
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: endpointType.EVERYTHING,
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                } else {
                    throw Error('sourceId is null');
                }

                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
