import AppLoader from './appLoader';
import { EndpointType } from '../../utils/enums';
import { IDataNews } from '../../utils/interfaces';
import { IDataSources } from '../../utils/interfaces';

//variables for highlighting the current link with color
let currentNewsButton: HTMLElement;
let prevNewsButton: HTMLElement;
class AppController extends AppLoader {
    public getSources(callback: (data: IDataSources) => void) {
        super.getResp(
            {
                endpoint: EndpointType.SOURCES,
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data: IDataNews) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                //highlight the current link
                prevNewsButton = currentNewsButton;
                if (prevNewsButton instanceof HTMLElement) {
                    prevNewsButton.classList.remove('current');
                }
                currentNewsButton = target;
                target.classList.add('current');

                const sourceId: string | null = target.getAttribute('data-source-id');
                if (sourceId) {
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: EndpointType.EVERYTHING,
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
