export type ResponeCallbackType<T> = (data: T) => void;

export type ObjectType = {
    [key: string]: string;
};

export const enum HttpStatusType {
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
}

export const enum EndpointType {
    SOURCES = 'sources',
    EVERYTHING = 'everything',
}
