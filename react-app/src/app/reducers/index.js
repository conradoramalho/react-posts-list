
import { combineReducers } from 'redux';
import commentsReducer from './CommentsReducer';
import postsReducer from './PostsReducer';
import postList from './post';

const reducers = combineReducers({
    commentsReducer,
    postsReducer,
    postList
});

export default reducers;