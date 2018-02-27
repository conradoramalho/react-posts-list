export const POST_LIST_REQUEST = 'POST_LIST_REQUEST'
export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS'
export const POST_LIST_FAILURE = 'POST_LIST_FAILURE'

export const POST_REQUEST = 'POST_REQUEST'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAILURE = 'POST_FAILURE'

export const EVALUATION_POST_REQUEST = 'EVALUATION_POST_REQUEST'
export const EVALUATION_POST_SUCCESS = 'EVALUATION_POST_SUCCESS'
export const EVALUATION_POST_FAILURE = 'EVALUATION_POST_FAILURE'

export const POST_CATEGORY_LIST_REQUEST = 'POST_CATEGORY_LIST_REQUEST'
export const POST_CATEGORY_LIST_SUCCESS = 'POST_CATEGORY_LIST_SUCCESS'
export const POST_CATEGORY_LIST_FAILURE = 'POST_CATEGORY_LIST_FAILURE'

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

export function setPostEvaluation(evaluation) {
    return {
        type: EVALUATION_POST_REQUEST,
        payload: evaluation
    };
}

export function getPostCategory(category) {
    return {
        type: POST_CATEGORY_LIST_REQUEST,
        payload: category
    };
}