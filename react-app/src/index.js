import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './configs/routes'
import { BrowserRouter } from "react-router-dom"
import registerServiceWorker from './registerServiceWorker'
import store from './configs/store'

ReactDOM.render(
    <BrowserRouter>
        <StrictMode>
            <Provider store={store}>
                <Routes />
            </Provider>
        </StrictMode>
    </BrowserRouter>
    , document.getElementById('root')
);

registerServiceWorker();