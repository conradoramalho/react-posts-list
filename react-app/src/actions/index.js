import 'whatwg-fetch';
const headers = { 'Authorization': 'whatever-you-want' };

export const GET_POSTS = 'GET_POSTS';
export const SET_EVALUATION_POSTS = 'SET_EVALUATION_POSTS';

export function getLeadsSuccess(data) {
    return {
        type: GET_POSTS,
        payload: data
    };
}

export function setEvaluationSuccess(data) {
    return {
        type: SET_EVALUATION_POSTS,
        payload: data
    };
}

export function getPosts() {
    return (dispatch) => {
        return fetch('http://localhost:3001/posts', { headers })
            .then(
            response => response.json(),
            error => console.log('error', error)
            ).then(json => dispatch(getLeadsSuccess({ posts: json })))
    }
}

export function setEvaluation(evaluation) {
    return (dispatch) => {
        return fetch('', { headers })
            .then(
            response => response.json(),
            error => console.log('error', error)
            ).then(json => dispatch(setEvaluationSuccess({ json })))
    }
}