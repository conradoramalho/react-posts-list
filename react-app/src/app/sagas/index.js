import { all, fork } from 'redux-saga/effects';
import postSaga from './post-saga';
import commentSaga from './comment-saga';

export default function* root() {
    yield all([
        fork(postSaga),
        fork(commentSaga),
    ]);
}