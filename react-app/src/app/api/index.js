import instance from './api.config';

const getCommentsByPostId = (postId) => (
    instance({
        method: 'GET',
        url: `/posts/${postId}/comments`,
    })
)

const getPostById = (postId) => (
    instance({
        method: 'GET',
        url: `/posts/${postId}`
    })
);

const getPosts = () => (
    instance({
        method: 'GET',
        url: '/posts'
    })
);

const getPostCategories = (category) => (
    instance({
        method: 'GET',
        url: `/${category}/posts`
    })
);

const getCategories = () => (
    instance({
        method: 'GET',
        url: '/categories'
    })
);

const setEvaluation = (postId, evaluation) => (
    instance({
        method: 'POST',
        url: `/posts/${postId}`,
        data: {
            option: evaluation
        }
    })
);

const sendNewComment = (params) => (
    instance({
        method: 'POST',
        url: '/comments',
        data: params
    })
);

const updateComment = ({ id, body }) => (
    instance({
        method: 'PUT',
        url: `/comments/${id}`,
        data: {
            timestamp: new Date().getTime(),
            body
        }
    })
);

const savePost = (data) => (
    instance({
        method: 'POST',
        url: '/posts',
        data: {
            ...data,
            id: Math.random().toString(36).substring(2, 15),
            author: 'Conrado Ramalho',
            timestamp: new Date().getTime()
        }
    })
);

const deletePost = (postId) => (
    instance({
        method: 'DELETE',
        url: `/posts/${postId}`
    })
);

const API = {
    getCommentsByPostId,
    getPostById,
    getPostCategories,
    setEvaluation,
    getPosts,
    sendNewComment,
    getCategories,
    updateComment,
    savePost,
    deletePost
};

export default API;