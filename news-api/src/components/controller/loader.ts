import { responeCallback } from '../../utils/types';
import { IDataNews } from '../../utils/interfaces';
import { IDataSources } from '../../utils/interfaces';
import { IOptions } from '../../utils/interfaces';
import { TObject } from '../../utils/types';
import { httpStatus } from '../../utils/types';
import { endpoint } from '../../utils/types';

class Loader {
    protected readonly baseLink: string;
    protected readonly options: IOptions;

    constructor(baseLink: string, options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp(
        { endpoint, options = {} }: { endpoint: endpoint; options?: IOptions },
        callback: responeCallback<IDataNews> | responeCallback<IDataSources> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    protected errorHandler(res: Response) {
        if (!res.ok) {
            const httpStatus: httpStatus = res.status;

            if (httpStatus === 401 || httpStatus === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    protected makeUrl(options: IOptions, endpoint: string) {
        const urlOptions: TObject = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load(
        method: string,
        endpoint: string,
        callback: responeCallback<IDataNews> | responeCallback<IDataSources>,
        options = {}
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
