import { all, fork } from 'redux-saga/effects';
import postSaga from './post-saga';
import commentSaga from './comment-saga';
import categorySaga from './category-saga';

export default function* root() {
    yield all([
        fork(postSaga),
        fork(commentSaga),
        fork(categorySaga)
    ]);
}