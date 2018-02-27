export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';
export const COMMENTS_FAILURE = 'COMMENTS_FAILURE';

export function getComments(params) {
    return {
        type: COMMENTS_REQUEST,
        payload: params
    };
}