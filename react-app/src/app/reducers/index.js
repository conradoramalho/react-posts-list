
import { combineReducers } from 'redux';
import commentsReducer from './comment-reducer';
import postsReducer from './post-reducer';

const reducers = combineReducers({
    commentsReducer,
    postsReducer
});

export default reducers;