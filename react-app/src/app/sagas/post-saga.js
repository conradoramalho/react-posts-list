import { takeLatest, put, call, all } from 'redux-saga/effects';
import {
    POST_LIST_SUCCESS,
    POST_LIST_FAILURE,
    POST_LIST_REQUEST,
    POST_REQUEST,
    POST_SUCCESS,
    POST_FAILURE
} from '../actions/post-actions';

import API from '../api';

function* getPostList() {
    try {
        const response = yield call(API.getPosts);

        yield put({ type: POST_LIST_SUCCESS, payload: response.data });

    } catch (error) {

        yield put({ type: POST_LIST_FAILURE, payload: error });

    }
}

function* getPostById({ payload }) {
    try {

        const response = yield call(API.getPostById, payload);
        yield put({ type: POST_SUCCESS, payload: response.data });

    } catch (error) {

        yield put({ type: POST_FAILURE, payload: error });

    }
}

export default function* root() {
    yield all([
        takeLatest(POST_LIST_REQUEST, getPostList),
        takeLatest(POST_REQUEST, getPostById),
    ]);
}