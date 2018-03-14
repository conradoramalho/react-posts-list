export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_SUCCESS';
export const COMMENTS_REQUEST_FAILURE = 'COMMENTS_FAILURE';

export const COMMENTS_NEW_REQUEST = 'COMMENTS_NEW_REQUEST';
export const COMMENTS_NEW_REQUEST_SUCCESS = 'COMMENTS_NEW_REQUEST_SUCCESS';
export const COMMENTS_NEW_REQUEST_FAILURE = 'COMMENTS_NEW_REQUEST_FAILURE';

export const UPDATE_COMMENTS_REQUEST = 'UPDATE_COMMENTS_REQUEST';
export const UPDATE_COMMENTS_REQUEST_SUCCESS = 'UPDATE_COMMENTS_REQUEST_SUCCESS';
export const UPDATE_COMMENTS_REQUEST_FAILURE = 'UPDATE_COMMENTS_REQUEST_FAILURE';

export function getCommentsByPostId(params) {
    return {
        type: COMMENTS_REQUEST,
        payload: params
    };
}

export function sendNewComment(params) {
    return {
        type: COMMENTS_NEW_REQUEST,
        payload: params
    };
}

export function updateComment(params) {
    return {
        type: UPDATE_COMMENTS_REQUEST,
        payload: params
    };
}