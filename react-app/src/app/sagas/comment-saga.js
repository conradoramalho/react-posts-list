import { all, call, takeLatest, put } from 'redux-saga/effects';
import * as ACTIONS from '../actions/comment-actions';
import API from '../api';

function* getCommentsByPostId({ payload }) {
    try {

        const { data } = yield call(API.getCommentsByPostId, payload);
        yield put({ type: ACTIONS.COMMENTS_REQUEST_SUCCESS, payload: data });

    } catch (error) {
        yield put({ type: ACTIONS.COMMENTS_REQUEST_FAILURE, payload: error });
    }
}

function* sendNewComment({ payload }) {
    try {

        const { data } = yield call(API.sendNewComment, payload);
        yield put({ type: ACTIONS.COMMENTS_NEW_REQUEST_SUCCESS, payload: data });

    } catch (error) {
        yield put({ type: ACTIONS.COMMENTS_NEW_REQUEST_FAILURE, payload: error });
    }
}

export default function* root() {
    yield all([
        takeLatest(ACTIONS.COMMENTS_REQUEST, getCommentsByPostId),
        takeLatest(ACTIONS.COMMENTS_NEW_REQUEST, sendNewComment)
    ])
}