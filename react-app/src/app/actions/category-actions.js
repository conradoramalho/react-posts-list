import * as ACTIONS from './types';

export const getCategoryList = () => ({
  type: ACTIONS.CATEGORY_REQUEST
});

export const getPostCategory = category => ({
  type: ACTIONS.POST_CATEGORY_LIST_REQUEST,
  payload: category
});
