import { takeLatest, put, call, all } from 'redux-saga/effects';
import * as ACTIONS from '../actions/types';

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

function* savePost({ payload }) {
    try {
        const { data } = yield call(API.savePost, payload);

        yield put({ type: ACTIONS.SAVE_POST_SUCCESS, payload: data });

    } catch (error) {

        yield put({ type: ACTIONS.SAVE_POST_FAILURE, payload: error });

    }
}

function* deletePost({ payload }) {
    try {
        const { data } = yield call(API.deletePost, payload);

        yield put({ type: ACTIONS.DELETE_POST_SUCCESS, payload: data });

    } catch (error) {

        yield put({ type: ACTIONS.DELETE_POST_FAILURE, payload: error });

    }
}

function* updatePost({ payload }) {
    try {
        const { data } = yield call(API.updatePost, payload);

        yield put({ type: ACTIONS.UPDATE_POST_SUCCESS, payload: data });

    } catch (error) {

        yield put({ type: ACTIONS.UPDATE_POST_FAILURE, payload: error });

    }
}

export default function* root() {
    yield all([
        takeLatest(ACTIONS.POST_LIST_REQUEST, getPostList),
        takeLatest(ACTIONS.POST_REQUEST, getPostById),
        takeLatest(ACTIONS.EVALUATION_POST_REQUEST, setPostEvaluation),
        takeLatest(ACTIONS.SAVE_POST_REQUEST, savePost),
        takeLatest(ACTIONS.UPDATE_POST_REQUEST, updatePost),
        takeLatest(ACTIONS.DELETE_POST_REQUEST, deletePost),
    ]);
}