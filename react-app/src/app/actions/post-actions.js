import * as ACTIONS from './types'

export const getPostList = () => ({
  type: ACTIONS.POST_LIST_REQUEST
});

export const getPostById = postId => ({
  type: ACTIONS.POST_REQUEST,
  payload: postId
});

export const setPostEvaluation = params => ({
  type: ACTIONS.EVALUATION_POST_REQUEST,
  payload: params
});

export const savePost = params => ({
  type: ACTIONS.SAVE_POST_REQUEST,
  payload: params
});

export const deletePost = params => ({
  type: ACTIONS.DELETE_POST_REQUEST,
  payload: params
});
