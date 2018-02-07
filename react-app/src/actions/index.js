import 'whatwg-fetch';
const headers = { 'Authorization': 'whatever-you-want' };
const apiAddress = 'http://localhost:3002'

export const GET_POSTS = 'GET_POSTS';
export const SET_EVALUATION_POST = 'SET_EVALUATION_POST';

export function getLeadsSuccess(data) {
    return {
        type: GET_POSTS,
        payload: data
    };
}

export function setEvaluationSuccess(data) {
    return {
        type: SET_EVALUATION_POST,
        payload: data
    };
}

export function getPosts() {
    return (dispatch) => {
        return fetch(`${apiAddress}/posts`, { headers })
            .then(
            response => response.json(),
            error => console.log('error', error)
            ).then(json => dispatch(getLeadsSuccess({ posts: json })))
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