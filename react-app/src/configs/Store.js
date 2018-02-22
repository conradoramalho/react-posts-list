import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from '../app/reducers';
import root from '../app/sagas/posts';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(root);

export default store;