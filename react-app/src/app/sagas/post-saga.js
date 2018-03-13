import { takeLatest, put, call, all } from 'redux-saga/effects';
import * as ACTIONS from '../actions/post-actions';

import API from '../api';

function* getPostList() {
    try {
        const { data } = yield call(API.getPosts);

        yield put({ type: ACTIONS.POST_LIST_SUCCESS, payload: data });

    } catch (error) {

        yield put({ type: ACTIONS.POST_LIST_FAILURE, payload: error });

    }
}

function* getPostById({ payload }) {
    try {

        const { data } = yield call(API.getPostById, payload);
        yield put({ type: ACTIONS.POST_SUCCESS, payload: data });

    } catch (error) {

        yield put({ type: ACTIONS.POST_FAILURE, payload: error });

    }
}

function* setPostEvaluation({ payload }) {
    try {

        const { data } = yield call(API.setEvaluation, payload.postId, payload.evaluation);

        yield put({ type: ACTIONS.EVALUATION_POST_SUCCESS, payload: data });

    } catch (error) {

        yield put({ type: ACTIONS.EVALUATION_POST_FAILURE, payload: error });

    }
}

export default function* root() {
    yield all([
        takeLatest(ACTIONS.POST_LIST_REQUEST, getPostList),
        takeLatest(ACTIONS.POST_REQUEST, getPostById),
        takeLatest(ACTIONS.EVALUATION_POST_REQUEST, setPostEvaluation),
    ]);
}