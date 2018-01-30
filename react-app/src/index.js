import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import appReducer from './reducers';

const store = createStore(appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <BrowserRouter>
        <App store={store} />
    </BrowserRouter>
    , document.getElementById('root'));

registerServiceWorker();
