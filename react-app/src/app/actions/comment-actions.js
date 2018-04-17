import * as ACTIONS from './types';

export const getCommentsByPostId = params => ({
  type: ACTIONS.COMMENTS_REQUEST,
  payload: params
});

export const sendNewComment = params => ({
  type: ACTIONS.COMMENTS_NEW_REQUEST,
  payload: params
});

export const updateComment = params => ({
  type: ACTIONS.UPDATE_COMMENTS_REQUEST,
  payload: params
});

export const deleteComment = params => ({
  type: ACTIONS.DELETE_COMMENT_REQUEST,
  payload: params
})