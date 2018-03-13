import instance from './api.config';

function getCommentsByPostId(postId) {
    return instance({
        method: 'GET',
        url: `/posts/${postId}/comments`,
    });
}

export function getPostById(postId) {
    return instance({
        method: 'GET',
        url: `/posts/${postId}`
    });
}

function getPosts() {
    return instance({
        method: 'GET',
        url: '/posts'
    });
}

export function getPostCategories(category) {
    return instance({
        method: 'GET',
        url: `/${category}/posts`
    });
}

export function getCategories() {
    return instance({
        method: 'GET',
        url: '/categories'
    });
}

export function setEvaluation(postId, evaluation) {
    return instance({
        method: 'POST',
        url: `/posts/${postId}`,
        data: {
            option: evaluation
        }
    });
}

export function sendNewComment(params) {
    return instance({
        method: 'POST',
        url: '/comments',
        data: params
    });
}

const API = {
    getCommentsByPostId,
    getPostById,
    getPostCategories,
    setEvaluation,
    getPosts,
    sendNewComment,
    getCategories
}

export default API;