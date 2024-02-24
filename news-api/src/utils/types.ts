export type responeCallback<T> = (data: T) => void;
export type TObject = {
    [key: string]: string;
};
export const enum httpStatusType {
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
}

export const enum endpointType {
    SOURCES = 'sources',
    EVERYTHING = 'everything',
}
