import { takeLatest, put, call, select } from 'redux-saga/effects';
import api from '../../utils/api';

function* getPostList() {
    try {

        const response = yield call(api.getPosts);

        yield put({ type: 'SUCCESS_POST_LIST', payload: { data: response.data } });

    } catch (err) {

        yield put({ type: 'FAILURE_POST_LIST' });

    }
}

export default function* root() {
    yield [
        takeLatest('REQUEST_POST_LIST', getPostList),
    ];
}