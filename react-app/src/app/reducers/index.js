
import { combineReducers } from 'redux';
import commentsReducer from './comment-reducer';
import postsReducer from './post-reducer';
import categoriesReducer from './category-reducer';

const reducers = combineReducers({
    commentsReducer,
    postsReducer,
    categoriesReducer
});

export default reducers;