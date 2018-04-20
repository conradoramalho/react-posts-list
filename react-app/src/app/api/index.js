import instance from './api.config';

class API {
  static getCommentsByPostId = (postId) => (
    instance({
      method: 'GET',
      url: `/posts/${postId}/comments`,
    })
  )

  static getPostById = (postId) => (
    instance({
      method: 'GET',
      url: `/posts/${postId}`
    })
  );

  static getPosts = () => (
    instance({
      method: 'GET',
      url: '/posts'
    })
  );

  static getPostCategories = (category) => (
    instance({
      method: 'GET',
      url: `/${category}/posts`
    })
  );

  static getCategories = () => (
    instance({
      method: 'GET',
      url: '/categories'
    })
  );

  static setEvaluation = (postId, evaluation) => (
    instance({
      method: 'POST',
      url: `/posts/${postId}`,
      data: {
        option: evaluation
      }
    })
  );

  static sendNewComment = (params) => (
    instance({
      method: 'POST',
      url: '/comments',
      data: params
    })
  );

  static updateComment = ({ id, body }) => (
    instance({
      method: 'PUT',
      url: `/comments/${id}`,
      data: {
        timestamp: new Date().getTime(),
        body
      }
    })
  );

  static deleteComment = ({ id }) => (
    instance({
      method: 'DELTE',
      url: `/comments/${id}`
    })
  );

  static savePost = (data) => (
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

  static updatePost = ({ postId, title, body }) => (
    instance({
      method: 'PUT',
      url: `/posts/${postId}`,
      data: {
        title,
        body
      }
    })
  );

  static deleteComment = (commentId) => (
    instance({
      method: 'DELETE',
      url: `/comments/${commentId}`
    })
  );

  static deletePost = (postId) => (
    instance({
      method: 'DELETE',
      url: `/posts/${postId}`
    })
  );
}

export default API;