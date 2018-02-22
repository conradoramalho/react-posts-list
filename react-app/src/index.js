import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './configs/Routes'
import { BrowserRouter } from "react-router-dom"
import registerServiceWorker from './registerServiceWorker'
import store from './configs/Store'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root')
);

registerServiceWorker();