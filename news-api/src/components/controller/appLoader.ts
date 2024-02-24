import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const apiUrl = process.env.API_URL;
        const apiKeyData = process.env.API_KEY;

        if (!apiUrl || !apiKeyData) {
            throw new Error('Error: undefind url or key of API');
        } else {
            super(apiUrl, {
                apiKey: apiKeyData,
            });
        }
    }
}

export default AppLoader;
