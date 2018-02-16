import 'whatwg-fetch';
const headers = { 'Authorization': 'whatever-you-want' }
const apiAddress = 'http://localhost:3001'

export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const SET_EVALUATION_POST = 'SET_EVALUATION_POST'
export const GET_POSTS_CATEGORY = 'GET_POSTS_CATEGORY'

export function getLeadsSuccess(data) {
    return {
        type: GET_POSTS,
        payload: data
    };
}

export function getPostSuccess(data) {
    return {
        type: GET_POST,
        payload: data
    };
}

export function getPostCategorySuccess(data) {
    return {
        type: GET_POSTS_CATEGORY,
        payload: data
    };
}

export function setEvaluationSuccess(data) {
    return {
        type: SET_EVALUATION_POST,
        payload: data
    };
}

// export function getPosts() {
//     return (dispatch) => {
//         return fetch(`${apiAddress}/posts`, { headers })
//             .then(
//                 response => response.json(),
//                 error => console.log('error', error)
//             ).then(json => dispatch(getLeadsSuccess(json)))
//     }
// }


export async function getPosts() {
    return async (dispatch) => {
        debugger

        const req = await fetch(`${apiAddress}/posts`, { headers })
        dispatch(getLeadsSuccess(json)
            // .then(
            //     response => response.json(),
            //     error => console.log('error', error)
            // ).then(json => dispatch(getLeadsSuccess(json)))
    }
}

export function getPost(postId) {
    return (dispatch) => {
        return fetch(`${apiAddress}/posts/${postId}`, { headers })
            .then(
                response => response.json(),
                error => console.log('error', error)
            ).then(post => dispatch(getPostSuccess(post)))
    }
}

export function getPostsCategory(category) {
    return (dispatch) => {
        return fetch(`${apiAddress}/${category}/posts`, { headers })
            .then(
                response => response.json(),
                error => console.log('error', error)
            ).then(post => dispatch(getPostCategorySuccess(post)))
    }
}

export function setEvaluation(postId, evaluation) {
    const body = {
        option: evaluation
    };

    return (dispatch) => {
        return fetch(`${apiAddress}/posts/${postId}`, {
            method: 'POST', headers: {
                ...headers,
                'Content-Type': 'application/json'
            }, body: JSON.stringify(body)
        })
            .then(
                response => response.json(),
                error => console.log('error', error)
            ).then(data => dispatch(setEvaluationSuccess({ postId, data })))
    }
}