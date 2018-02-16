
import { combineReducers } from 'redux';
import commentsReducer from './CommentsReducer';
import postsReducer from './PostsReducer';

const reducers = combineReducers({
    commentsReducer,
    postsReducer
});

export default reducers;