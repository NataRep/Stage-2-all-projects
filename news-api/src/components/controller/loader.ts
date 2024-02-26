import { IDataNews, IOptions, IDataSources } from '../../utils/interfaces';
import { responeCallbackType, objectType, httpStatusType, endpointType } from '../../utils/types';
class Loader {
    protected readonly baseLink: string;
    protected readonly options: IOptions;

    constructor(baseLink: string, options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp(
        { endpoint, options = {} }: { endpoint: endpointType; options?: IOptions },
        callback: responeCallbackType<IDataNews> | responeCallbackType<IDataSources> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    protected errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === httpStatusType.UNAUTHORIZED || res.status === httpStatusType.NOT_FOUND)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    protected makeUrl(options: IOptions, endpoint: string) {
        const urlOptions: objectType = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load(
        method: string,
        endpoint: string,
        callback: responeCallbackType<IDataNews> | responeCallbackType<IDataSources>,
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
