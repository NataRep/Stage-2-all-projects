export type responeCallback<T> = (data: T) => void;
export type TObject = {
    [key: string]: string;
};
export const enum httpStatus {
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
}

export type endpoint = 'sources' | 'everything';
