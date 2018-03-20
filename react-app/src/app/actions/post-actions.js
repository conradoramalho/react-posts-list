export const POST_LIST_REQUEST = 'POST_LIST_REQUEST'
export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS'
export const POST_LIST_FAILURE = 'POST_LIST_FAILURE'

export const POST_REQUEST = 'POST_REQUEST'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAILURE = 'POST_FAILURE'

export const EVALUATION_POST_REQUEST = 'EVALUATION_POST_REQUEST'
export const EVALUATION_POST_SUCCESS = 'EVALUATION_POST_SUCCESS'
export const EVALUATION_POST_FAILURE = 'EVALUATION_POST_FAILURE'

export const SAVE_POST_REQUEST = 'SAVE_POST_REQUEST'
export const SAVE_POST_SUCCESS = 'SAVE_POST_SUCCESS'
export const SAVE_POST_FAILURE = 'SAVE_POST_FAILURE'

export function getPostList() {
    return {
        type: POST_LIST_REQUEST
    };
}

export function getPostById(postId) {
    return {
        type: POST_REQUEST,
        payload: postId
    };
}

export function setPostEvaluation(params) {
    return {
        type: EVALUATION_POST_REQUEST,
        payload: params
    };
}

export function savePost(params) {
    return {
        type: SAVE_POST_REQUEST,
        payload: params
    };
}
