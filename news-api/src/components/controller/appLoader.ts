import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const apiUrl = process.env.API_URL;
        const apiKeyData = process.env.API_KEY;

        if (!apiUrl || !apiKeyData) {
            console.log('Undefind url or key of API');
            throw new Error();
        } else {
            super(apiUrl, {
                apiKey: apiKeyData,
            });
        }
    }
}

export default AppLoader;
