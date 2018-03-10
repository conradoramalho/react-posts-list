import { takeLatest, put, call, all } from 'redux-saga/effects';
import * as ACTIONS from '../actions/post-actions';

import API from '../api';

function* getPostList() {
    try {
        const response = yield call(API.getPosts);

        yield put({ type: ACTIONS.POST_LIST_SUCCESS, payload: response.data });

    } catch (error) {

        yield put({ type: ACTIONS.POST_LIST_FAILURE, payload: error });

    }
}

function* getPostById({ payload }) {
    try {

        const response = yield call(API.getPostById, payload);
        yield put({ type: ACTIONS.POST_SUCCESS, payload: response.data });

    } catch (error) {

        yield put({ type: ACTIONS.POST_FAILURE, payload: error });

    }
}

export default function* root() {
    yield all([
        takeLatest(ACTIONS.POST_LIST_REQUEST, getPostList),
        takeLatest(ACTIONS.POST_REQUEST, getPostById),
    ]);
}