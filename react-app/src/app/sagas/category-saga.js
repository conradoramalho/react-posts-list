import { all, call, takeLatest, put } from 'redux-saga/effects';
import * as ACTIONS from '../actions/types';
import API from '../api';

function* getCategoryList() {
    try {

        const { data } = yield call(API.getCategories);
        yield put({ type: ACTIONS.CATEGORY_REQUEST_SUCCESS, payload: data });

    } catch (error) {
        yield put({ type: ACTIONS.CATEGORY_REQUEST_FAILURE, payload: error });
    }
}

function* getPostCategory({ payload }) {
    try {

        const { data } = yield call(API.getPostCategories, payload);
        yield put({ type: ACTIONS.POST_CATEGORY_LIST_SUCCESS, payload: data });

    } catch (error) {
        yield put({ type: ACTIONS.POST_CATEGORY_LIST_FAILURE, payload: error });
    }
}

export default function* root() {
    yield all([
        takeLatest(ACTIONS.CATEGORY_REQUEST, getCategoryList),
        takeLatest(ACTIONS.POST_CATEGORY_LIST_REQUEST, getPostCategory)
    ])
}