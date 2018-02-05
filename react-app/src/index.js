import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from 'redux';
import appReducer from './reducers';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

registerServiceWorker();