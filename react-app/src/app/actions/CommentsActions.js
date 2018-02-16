import 'whatwg-fetch';
const headers = { 'Authorization': 'whatever-you-want' };
const apiAddress = 'http://localhost:3001'

export const GET_COMMENTS = 'GET_COMMENTS';

export function getCommentsSuccess(data) {
    return {
        type: GET_COMMENTS,
        payload: data
    };
}

export function getComments(postId) {
    return (dispatch) => {
        return fetch(`${apiAddress}/posts/${postId}/comments`, { headers })
            .then(
                response => response.json(),
                error => console.log('error', error)
            ).then(json => dispatch(getCommentsSuccess(json)))
    }
} 