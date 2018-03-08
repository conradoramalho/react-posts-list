export const CATEGORY_REQUEST = 'CATEGORY_REQUEST';
export const CATEGORY_REQUEST_SUCCESS = 'CATEGORY_SUCCESS';
export const CATEGORY_REQUEST_FAILURE = 'CATEGORY_FAILURE';

export const POST_CATEGORY_LIST_REQUEST = 'POST_CATEGORY_LIST_REQUEST'
export const POST_CATEGORY_LIST_SUCCESS = 'POST_CATEGORY_LIST_SUCCESS'
export const POST_CATEGORY_LIST_FAILURE = 'POST_CATEGORY_LIST_FAILURE'

export function getCategoryList() {
    return {
        type: CATEGORY_REQUEST
    };
}

export function getPostCategory(category) {
    return {
        type: POST_CATEGORY_LIST_REQUEST,
        payload: category
    };
}