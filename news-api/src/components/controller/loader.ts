import { ObjectType } from '../../utils/types';
import { EndpointType } from '../../utils/enums';
import { HttpStatusType } from '../../utils/enums';
import { ResponeCallbackType } from '../../utils/types';
import { IDataNews, IOptions, IDataSources } from '../../utils/interfaces';

class Loader {
    protected readonly baseLink: string;
    protected readonly options: IOptions;

    constructor(baseLink: string, options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp(
        { endpoint, options = {} }: { endpoint: EndpointType; options?: IOptions },
        callback: ResponeCallbackType<IDataNews> | ResponeCallbackType<IDataSources> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    protected errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === HttpStatusType.UNAUTHORIZED || res.status === HttpStatusType.NOT_FOUND)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    protected makeUrl(options: IOptions, endpoint: string) {
        const urlOptions: ObjectType = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load(
        method: string,
        endpoint: string,
        callback: ResponeCallbackType<IDataNews> | ResponeCallbackType<IDataSources>,
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
