export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_SUCCESS';
export const COMMENTS_REQUEST_FAILURE = 'COMMENTS_FAILURE';

export function getCommentsByPostId(params) {
    return {
        type: COMMENTS_REQUEST,
        payload: params
    };
}